    let mut dashboard = test_dashboard(Vec::new(), 0);
        dashboard.cfg.pane_layout = PaneLayout::Grid;
        dashboard.pane_size_percent = DEFAULT_GRID_SIZE_PERCENT;

        for _ in 0..20 {
            dashboard.adjust_pane_size_with_save(5, Path::new("/tmp/ecc2-noop.toml"), |_| Ok(()));
        }
        assert_eq!(dashboard.pane_size_percent, MAX_PANE_SIZE_PERCENT);

        for _ in 0..40 {
            dashboard.adjust_pane_size_with_save(-5, Path::new("/tmp/ecc2-noop.toml"), |_| Ok(()));
        }
        assert_eq!(dashboard.pane_size_percent, MIN_PANE_SIZE_PERCENT);
    }

    #[test]
    fn pane_navigation_skips_log_outside_grid_layouts() {
        let mut dashboard = test_dashboard(Vec::new(), 0);
        dashboard.next_pane();
        dashboard.next_pane();
        dashboard.next_pane();
        assert_eq!(dashboard.selected_pane, Pane::Sessions);

        dashboard.cfg.pane_layout = PaneLayout::Grid;
        dashboard.pane_size_percent = DEFAULT_GRID_SIZE_PERCENT;
        dashboard.next_pane();
        dashboard.next_pane();
        dashboard.next_pane();
        assert_eq!(dashboard.selected_pane, Pane::Log);
    }

    #[test]
    fn focus_pane_number_selects_visible_panes_and_rejects_hidden_targets() {
        let mut dashboard = test_dashboard(Vec::new(), 0);

        dashboard.focus_pane_number(3);

        assert_eq!(dashboard.selected_pane, Pane::Metrics);
        assert_eq!(
            dashboard.operator_note.as_deref(),
            Some("focused metrics pane")
        );

        dashboard.focus_pane_number(4);

        assert_eq!(dashboard.selected_pane, Pane::Metrics);
        assert_eq!(
            dashboard.operator_note.as_deref(),
            Some("log pane is not visible")
        );
    }

    #[test]
    fn directional_pane_focus_uses_grid_neighbors() {
        let mut dashboard = test_dashboard(Vec::new(), 0);
        dashboard.cfg.pane_layout = PaneLayout::Grid;
        dashboard.pane_size_percent = DEFAULT_GRID_SIZE_PERCENT;

        dashboard.focus_pane_right();
        assert_eq!(dashboard.selected_pane, Pane::Output);

        dashboard.focus_pane_down();
        assert_eq!(dashboard.selected_pane, Pane::Log);

        dashboard.focus_pane_left();
        assert_eq!(dashboard.selected_pane, Pane::Metrics);

        dashboard.focus_pane_up();
        assert_eq!(dashboard.selected_pane, Pane::Sessions);
        assert_eq!(
            dashboard.operator_note.as_deref(),
            Some("focused sessions pane")
        );
    }

    #[test]
    fn configured_pane_navigation_keys_override_defaults() {
        let mut dashboard = test_dashboard(Vec::new(), 0);
        dashboard.cfg.pane_navigation.focus_metrics = "e".to_string();
        dashboard.cfg.pane_navigation.move_left = "a".to_string();

        assert!(dashboard.handle_pane_navigation_key(KeyEvent::new(
            crossterm::event::KeyCode::Char('e'),
            crossterm::event::KeyModifiers::NONE,
        )));
        assert_eq!(dashboard.selected_pane, Pane::Metrics);

        assert!(dashboard.handle_pane_navigation_key(KeyEvent::new(
            crossterm::event::KeyCode::Char('a'),
            crossterm::event::KeyModifiers::NONE,
        )));
        assert_eq!(dashboard.selected_pane, Pane::Sessions);
    }

    #[test]
    fn pane_navigation_labels_use_configured_bindings() {
        let mut dashboard = test_dashboard(Vec::new(), 0);
        dashboard.cfg.pane_navigation.focus_sessions = "q".to_string();
        dashboard.cfg.pane_navigation.focus_output = "w".to_string();
        dashboard.cfg.pane_navigation.focus_metrics = "e".to_string();
        dashboard.cfg.pane_navigation.focus_log = "r".to_string();
        dashboard.cfg.pane_navigation.move_left = "a".to_string();
        dashboard.cfg.pane_navigation.move_down = "s".to_string();
        dashboard.cfg.pane_navigation.move_up = "w".to_string();
        dashboard.cfg.pane_navigation.move_right = "d".to_string();

        assert_eq!(dashboard.pane_focus_shortcuts_label(), "q/w/e/r");
        assert_eq!(dashboard.pane_move_shortcuts_label(), "a/s/w/d");
    }

    #[test]
    fn pane_command_mode_handles_focus_and_cancel() {
        let mut dashboard = test_dashboard(Vec::new(), 0);

        dashboard.begin_pane_command_mode();
        assert!(dashboard.is_pane_command_mode());

        assert!(dashboard.handle_pane_command_key(KeyEvent::new(
            crossterm::event::KeyCode::Char('3'),
            crossterm::event::KeyModifiers::NONE,
        )));
        assert_eq!(dashboard.selected_pane, Pane::Metrics);
        assert!(!dashboard.is_pane_command_mode());

        dashboard.begin_pane_command_mode();
        assert!(dashboard.handle_pane_command_key(KeyEvent::new(
            crossterm::event::KeyCode::Esc,
            crossterm::event::KeyModifiers::NONE,
        )));
        assert_eq!(
            dashboard.operator_note.as_deref(),
            Some("pane command cancelled")
        );
        assert!(!dashboard.is_pane_command_mode());
    }

    #[test]
    fn pane_command_mode_sets_layout() {
        let mut dashboard = test_dashboard(Vec::new(), 0);
        dashboard.cfg.pane_layout = PaneLayout::Horizontal;

        dashboard.begin_pane_command_mode();
        assert!(dashboard.handle_pane_command_key(KeyEvent::new(
            crossterm::event::KeyCode::Char('g'),
            crossterm::event::KeyModifiers::NONE,
        )));

        assert_eq!(dashboard.cfg.pane_layout, PaneLayout::Grid);
        assert!(dashboard
            .operator_note
            .as_deref()
            .is_some_and(|note| note.contains("pane layout set to grid | saved to ")));
    }

    #[test]
    fn cycle_pane_layout_rotates_and_hides_log_when_leaving_grid() {
        let mut dashboard = test_dashboard(Vec::new(), 0);
        dashboard.cfg.pane_layout = PaneLayout::Grid;
        dashboard.cfg.linear_pane_size_percent = 44;
        dashboard.cfg.grid_pane_size_percent = 77;
        dashboard.pane_size_percent = 77;
        dashboard.selected_pane = Pane::Log;

        dashboard.cycle_pane_layout();

        assert_eq!(dashboard.cfg.pane_layout, PaneLayout::Horizontal);
        assert_eq!(dashboard.pane_size_percent, 44);
        assert_eq!(dashboard.selected_pane, Pane::Sessions);
    }

    #[test]
    fn cycle_pane_layout_persists_config() {
        let mut dashboard = test_dashboard(Vec::new(), 0);
        let tempdir = std::env::temp_dir().join(format!("ecc2-layout-policy-{}", Uuid::new_v4()));
        std::fs::create_dir_all(&tempdir).unwrap();
        let config_path = tempdir.join("ecc2.toml");

        dashboard.cycle_pane_layout_with_save(&config_path, |cfg| cfg.save_to_path(&config_path));

        assert_eq!(dashboard.cfg.pane_layout, PaneLayout::Vertical);
        let expected_note = format!(
            "pane layout set to vertical | saved to {}",
            config_path.display()
        );
        assert_eq!(
            dashboard.operator_note.as_deref(),
            Some(expected_note.as_str())
        );

        let saved = std::fs::read_to_string(&config_path).unwrap();
        let loaded: Config = toml::from_str(&saved).unwrap();
        assert_eq!(loaded.pane_layout, PaneLayout::Vertical);
        let _ = std::fs::remove_dir_all(tempdir);
    }

    #[test]
    fn pane_resize_persists_linear_setting() {
        let mut dashboard = test_dashboard(Vec::new(), 0);
        let tempdir = std::env::temp_dir().join(format!("ecc2-pane-size-{}", Uuid::new_v4()));
        std::fs::create_dir_all(&tempdir).unwrap();
        let config_path = tempdir.join("ecc2.toml");

        dashboard.adjust_pane_size_with_save(5, &config_path, |cfg| cfg.save_to_path(&config_path));

        assert_eq!(dashboard.pane_size_percent, 40);
        assert_eq!(dashboard.cfg.linear_pane_size_percent, 40);
        let expected_note = format!(
            "pane size set to 40% for horizontal layout | saved to {}",
            config_path.display()
        );
        assert_eq!(
            dashboard.operator_note.as_deref(),
            Some(expected_note.as_str())
        );

        let saved = std::fs::read_to_string(&config_path).unwrap();
        let loaded: Config = toml::from_str(&saved).unwrap();
        assert_eq!(loaded.linear_pane_size_percent, 40);
        assert_eq!(loaded.grid_pane_size_percent, 50);
        let _ = std::fs::remove_dir_all(tempdir);
    }

    #[test]
    fn cycle_pane_layout_uses_persisted_grid_size() {
        let mut dashboard = test_dashboard(Vec::new(), 0);
        dashboard.cfg.pane_layout = PaneLayout::Vertical;
        dashboard.cfg.linear_pane_size_percent = 41;
        dashboard.cfg.grid_pane_size_percent = 63;
        dashboard.pane_size_percent = 41;

        dashboard.cycle_pane_layout_with_save(Path::new("/tmp/ecc2-noop.toml"), |_| Ok(()));

        assert_eq!(dashboard.cfg.pane_layout, PaneLayout::Grid);
        assert_eq!(dashboard.pane_size_percent, 63);
    }

    #[test]
    fn auto_split_layout_after_spawn_prefers_vertical_for_two_live_sessions() {
        let mut dashboard = test_dashboard(
            vec![
                sample_session("running-1", "planner", SessionState::Running, None, 1, 1),
                sample_session("idle-1", "planner", SessionState::Idle, None, 1, 1),
            ],
            0,
        );

        let note = dashboard.auto_split_layout_after_spawn_with_save(
            2,
            Path::new("/tmp/ecc2-noop.toml"),
            |_| Ok(()),
        );

        assert_eq!(dashboard.cfg.pane_layout, PaneLayout::Vertical);
        assert_eq!(
            dashboard.pane_size_percent,
            dashboard.cfg.linear_pane_size_percent
        );
        assert_eq!(dashboard.selected_pane, Pane::Sessions);
        assert_eq!(
            note.as_deref(),
            Some("auto-split vertical layout for 2 live session(s)")
        );
    }

    #[test]
    fn auto_split_layout_after_spawn_prefers_grid_for_three_live_sessions() {
        let mut dashboard = test_dashboard(
            vec![
                sample_session("pending-1", "planner", SessionState::Pending, None, 1, 1),
                sample_session("running-1", "planner", SessionState::Running, None, 1, 1),
                sample_session("idle-1", "planner", SessionState::Idle, None, 1, 1),
            ],
            1,
        );
        dashboard.selected_pane = Pane::Output;

        let note = dashboard.auto_split_layout_after_spawn_with_save(
            2,
            Path::new("/tmp/ecc2-noop.toml"),
            |_| Ok(()),
        );

        assert_eq!(dashboard.cfg.pane_layout, PaneLayout::Grid);
        assert_eq!(
            dashboard.pane_size_percent,
            dashboard.cfg.grid_pane_size_percent
        );
        assert_eq!(dashboard.selected_pane, Pane::Sessions);
        assert_eq!(
            note.as_deref(),
            Some("auto-split grid layout for 3 live session(s)")
        );
    }

    #[test]
    fn auto_split_layout_after_spawn_focuses_sessions_when_layout_already_matches() {
        let mut dashboard = test_dashboard(
            vec![
                sample_session("pending-1", "planner", SessionState::Pending, None, 1, 1),
                sample_session("running-1", "planner", SessionState::Running, None, 1, 1),
                sample_session("idle-1", "planner", SessionState::Idle, None, 1, 1),
            ],
            1,
        );
        dashboard.cfg.pane_layout = PaneLayout::Grid;
        dashboard.selected_pane = Pane::Output;

        let note = dashboard.auto_split_layout_after_spawn_with_save(
            3,
            Path::new("/tmp/ecc2-noop.toml"),
            |_| Ok(()),
        );

        assert_eq!(dashboard.cfg.pane_layout, PaneLayout::Grid);
        assert_eq!(dashboard.selected_pane, Pane::Sessions);
        assert_eq!(
            note.as_deref(),
            Some("auto-focused sessions in grid layout for 3 live session(s)")
        );
    }

    #[test]
    fn post_spawn_selection_prefers_lead_for_multi_spawn() {
        let preferred = post_spawn_selection_id(
            Some("lead-12345678"),
            &["child-a".to_string(), "child-b".to_string()],
        );

        assert_eq!(preferred.as_deref(), Some("lead-12345678"));
    }

    #[test]
    fn post_spawn_selection_keeps_single_spawn_on_created_session() {
        let preferred = post_spawn_selection_id(Some("lead-12345678"), &["child-a".to_string()]);

        assert_eq!(preferred.as_deref(), Some("child-a"));
    }

    #[test]
    fn post_spawn_selection_falls_back_to_first_created_when_no_lead_exists() {
        let preferred =
            post_spawn_selection_id(None, &["child-a".to_string(), "child-b".to_string()]);

        assert_eq!(preferred.as_deref(), Some("child-a"));
    }

    #[test]
    fn toggle_theme_persists_config() {
        let mut dashboard = test_dashboard(Vec::new(), 0);
        let tempdir = std::env::temp_dir().join(format!("ecc2-theme-policy-{}", Uuid::new_v4()));
        std::fs::create_dir_all(&tempdir).unwrap();
        let config_path = tempdir.join("ecc2.toml");

        dashboard.toggle_theme_with_save(&config_path, |cfg| cfg.save_to_path(&config_path));

        assert_eq!(dashboard.cfg.theme, Theme::Light);
        let expected_note = format!("theme set to light | saved to {}", config_path.display());
        assert_eq!(
            dashboard.operator_note.as_deref(),
            Some(expected_note.as_str())
        );

        let saved = std::fs::read_to_string(&config_path).unwrap();
        let loaded: Config = toml::from_str(&saved).unwrap();
        assert_eq!(loaded.theme, Theme::Light);
        let _ = std::fs::remove_dir_all(tempdir);
    }

    #[test]
    fn light_theme_uses_light_palette_accent() {
        let mut dashboard = test_dashboard(Vec::new(), 0);
        dashboard.cfg.theme = Theme::Light;
        dashboard.selected_pane = Pane::Sessions;

        assert_eq!(
            dashboard.pane_border_style(Pane::Sessions),
            Style::default().fg(Color::Blue)
        );
        assert_eq!(dashboard.theme_palette().row_highlight_bg, Color::Gray);
    }

    fn test_output_line(stream: OutputStream, text: &str) -> OutputLine {
        OutputLine::new(stream, text, Utc::now().to_rfc3339())
    }

    fn test_output_line_minutes_ago(
        stream: OutputStream,
        text: &str,
        minutes_ago: i64,
    ) -> OutputLine {
        OutputLine::new(
            stream,
            text,
            (Utc::now() - chrono::Duration::minutes(minutes_ago)).to_rfc3339(),
        )
    }

    fn line_plain_text(line: &Line<'_>) -> String {
        line.spans
            .iter()
            .map(|span| span.content.as_ref())
            .collect::<String>()
    }

    fn text_plain_text(text: &Text<'_>) -> String {
        text.lines
            .iter()
            .map(line_plain_text)
            .collect::<Vec<_>>()
            .join("\n")
    }

    fn test_dashboard(sessions: Vec<Session>, selected_session: usize) -> Dashboard {
        let selected_session = selected_session.min(sessions.len().saturating_sub(1));
        let cfg = Config::default();
        let notifier = DesktopNotifier::new(cfg.desktop_notifications.clone());
        let webhook_notifier = WebhookNotifier::new(cfg.webhook_notifications.clone());
        let last_session_states = sessions
            .iter()
            .map(|session| (session.id.clone(), session.state.clone()))
            .collect();
        let session_harnesses = sessions
            .iter()
            .map(|session| {
                (
                    session.id.clone(),
                    SessionHarnessInfo::detect(&session.agent_type, &session.working_dir)
                        .with_config_detection(&cfg, &session.working_dir),
                )
            })
            .collect();
        let output_store = SessionOutputStore::default();
        let output_rx = output_store.subscribe();
        let mut session_table_state = TableState::default();
        if !sessions.is_empty() {
            session_table_state.select(Some(selected_session));
        }

        Dashboard {
            db: StateStore::open(Path::new(":memory:")).expect("open test db"),
            pane_size_percent: configured_pane_size(&cfg, cfg.pane_layout),
            cfg,
            output_store,
            output_rx,
            notifier,
            webhook_notifier,
            sessions,
            session_harnesses,
            session_output_cache: HashMap::new(),
            unread_message_counts: HashMap::new(),
            approval_queue_counts: HashMap::new(),
            approval_queue_preview: Vec::new(),
            handoff_backlog_counts: HashMap::new(),
            worktree_health_by_session: HashMap::new(),
            global_handoff_backlog_leads: 0,
            global_handoff_backlog_messages: 0,
            daemon_activity: DaemonActivity::default(),
            selected_messages: Vec::new(),
            selected_parent_session: None,
            selected_child_sessions: Vec::new(),
            focused_delegate_session_id: None,
            selected_team_summary: None,
            selected_route_preview: None,
            logs: Vec::new(),
            selected_diff_summary: None,
            selected_diff_preview: Vec::new(),
            selected_diff_patch: None,
            selected_diff_hunk_offsets_unified: Vec::new(),
            selected_diff_hunk_offsets_split: Vec::new(),
            selected_diff_hunk: 0,
            diff_view_mode: DiffViewMode::Split,
            selected_conflict_protocol: None,
            selected_merge_readiness: None,
            selected_git_status_entries: Vec::new(),
            selected_git_status: 0,
            selected_git_patch: None,
            selected_git_patch_hunk_offsets_unified: Vec::new(),
            selected_git_patch_hunk_offsets_split: Vec::new(),
            selected_git_patch_hunk: 0,
            output_mode: OutputMode::SessionOutput,
            graph_entity_filter: GraphEntityFilter::All,
            output_filter: OutputFilter::All,
            output_time_filter: OutputTimeFilter::AllTime,
            timeline_event_filter: TimelineEventFilter::All,
            timeline_scope: SearchScope::SelectedSession,
            selected_pane: Pane::Sessions,
            selected_session,
            show_help: false,
            operator_note: None,
            pane_command_mode: false,
            output_follow: true,
            output_scroll_offset: 0,
            last_output_height: 0,
            metrics_scroll_offset: 0,
            last_metrics_height: 0,
            collapsed_panes: HashSet::new(),
            search_input: None,
            spawn_input: None,
            commit_input: None,
            pr_input: None,
            search_query: None,
            search_scope: SearchScope::SelectedSession,
            search_agent_filter: SearchAgentFilter::AllAgents,
            search_matches: Vec::new(),
            selected_search_match: 0,
            active_completion_popup: None,
            queued_completion_popups: VecDeque::new(),
            session_table_state,
            last_cost_metrics_signature: None,
            last_tool_activity_signature: None,
            last_budget_alert_state: BudgetState::Normal,
            last_session_states,
            last_seen_approval_message_id: None,
        }
    }

    fn build_config(root: &Path) -> Config {
        Config {
            db_path: root.join("state.db"),
            worktree_root: root.join("worktrees"),
            worktree_branch_prefix: "ecc".to_string(),
            max_parallel_sessions: 4,
            max_parallel_worktrees: 4,
            worktree_retention_secs: 0,
            session_timeout_secs: 60,
            heartbeat_interval_secs: 5,
            auto_terminate_stale_sessions: false,
            default_agent: "claude".to_string(),
            default_agent_profile: None,
            harness_runners: Default::default(),
            agent_profiles: Default::default(),
            orchestration_templates: Default::default(),
            memory_connectors: Default::default(),
            computer_use_dispatch: crate::config::ComputerUseDispatchConfig::default(),
            auto_dispatch_unread_handoffs: false,
            auto_dispatch_limit_per_session: 5,
            auto_create_worktrees: true,
            auto_merge_ready_worktrees: false,
            desktop_notifications: crate::notifications::DesktopNotificationConfig::default(),
            webhook_notifications: crate::notifications::WebhookNotificationConfig::default(),
            completion_summary_notifications:
                crate::notifications::CompletionSummaryConfig::default(),
            cost_budget_usd: 10.0,
            token_budget: 500_000,
            budget_alert_thresholds: crate::config::Config::BUDGET_ALERT_THRESHOLDS,
            conflict_resolution: crate::config::ConflictResolutionConfig::default(),
            theme: Theme::Dark,
            pane_layout: PaneLayout::Horizontal,
            pane_navigation: Default::default(),
            linear_pane_size_percent: 35,
            grid_pane_size_percent: 50,
            risk_thresholds: Config::RISK_THRESHOLDS,
        }
    }

    fn init_git_repo(path: &Path) -> Result<()> {
        fs::create_dir_all(path)?;
        run_git(path, &["init", "-q"])?;
        run_git(path, &["config", "user.name", "ECC Tests"])?;
        run_git(path, &["config", "user.email", "ecc-tests@example.com"])?;
        fs::write(path.join("README.md"), "hello\n")?;
        run_git(path, &["add", "README.md"])?;
        run_git(path, &["commit", "-qm", "init"])?;
        Ok(())
    }

    fn run_git(path: &Path, args: &[&str]) -> Result<()> {
        let output = Command::new("git")
            .arg("-C")
            .arg(path)
            .args(args)
            .output()?;
        if !output.status.success() {
            anyhow::bail!("{}", String::from_utf8_lossy(&output.stderr));
        }
        Ok(())
    }

    fn git_stdout(path: &Path, args: &[&str]) -> Result<String> {
        let output = Command::new("git")
            .arg("-C")
            .arg(path)
            .args(args)
            .output()?;
        if !output.status.success() {
            anyhow::bail!("{}", String::from_utf8_lossy(&output.stderr));
        }
        Ok(String::from_utf8_lossy(&output.stdout).into_owned())
    }

    fn sample_session(
        id: &str,
        agent_type: &str,
        state: SessionState,
        branch: Option<&str>,
        tokens_used: u64,
        duration_secs: u64,
    ) -> Session {
        Session {
            id: id.to_string(),
            task: "Render dashboard rows".to_string(),
            project: "workspace".to_string(),
            task_group: "general".to_string(),
            agent_type: agent_type.to_string(),
            state,
            working_dir: branch
                .map(|branch| PathBuf::from(format!("/tmp/{branch}")))
                .unwrap_or_else(|| PathBuf::from("/tmp")),
            pid: None,
            worktree: branch.map(|branch| WorktreeInfo {
                path: PathBuf::from(format!("/tmp/{branch}")),
                branch: branch.to_string(),
                base_branch: "main".to_string(),
            }),
            created_at: Utc::now(),
            updated_at: Utc::now(),
            last_heartbeat_at: Utc::now(),
            metrics: SessionMetrics {
                input_tokens: tokens_used.saturating_mul(3) / 4,
                output_tokens: tokens_used / 4,
                tokens_used,
                tool_calls: 4,
                files_changed: 2,
                duration_secs,
                cost_usd: 0.42,
            },
        }
    }

    fn budget_session(id: &str, tokens_used: u64, cost_usd: f64) -> Session {
        let now = Utc::now();
        Session {
            id: id.to_string(),
            task: "Budget tracking".to_string(),
            project: "workspace".to_string(),
            task_group: "general".to_string(),
            agent_type: "claude".to_string(),
            state: SessionState::Running,
            working_dir: PathBuf::from("/tmp"),
            pid: None,
            worktree: None,
            created_at: now,
            updated_at: now,
            last_heartbeat_at: now,
            metrics: SessionMetrics {
                input_tokens: tokens_used.saturating_mul(3) / 4,
                output_tokens: tokens_used / 4,
                tokens_used,
                tool_calls: 0,
                files_changed: 0,
                duration_secs: 0,
                cost_usd,
            },
        }
    }

    fn render_dashboard_text(mut dashboard: Dashboard, width: u16, height: u16) -> String {
        let backend = TestBackend::new(width, height);
        let mut terminal = Terminal::new(backend).expect("create terminal");

        terminal
            .draw(|frame| dashboard.render(frame))
            .expect("render dashboard");

        let buffer = terminal.backend().buffer();
        buffer
            .content
            .chunks(buffer.area.width as usize)
            .map(|cells| cells.iter().map(|cell| cell.symbol()).collect::<String>())
            .collect::<Vec<_>>()
            .join("\n")
    }
}
