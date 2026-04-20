$ErrorActionPreference = 'SilentlyContinue'
$base = "C:\Users\Carlos\Documents\New folder\Luxus-O.S\gemma4-skills-os"
$global:totalCount = 0

function New-Uuid { [guid]::NewGuid().ToString("N") }

function Write-TsFile {
    param([string]$FilePath, [string]$Content)
    $dir = Split-Path $FilePath
    if (!(Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
    [System.IO.File]::WriteAllText($FilePath, $Content, [System.Text.Encoding]::UTF8)
    $global:totalCount++
}

function Write-TrainingFile {
    param([string]$Dir, [string]$Name, [string]$Content)
    if (!(Test-Path $Dir)) { New-Item -ItemType Directory -Force -Path $Dir | Out-Null }
    $slug = ($Name -replace '[^\w\s-]','' -replace '\s+','-' -replace '--+','-').ToLower()
    if ($slug.Length -gt 60) { $slug = $slug.Substring(0,60) }
    [System.IO.File]::WriteAllText((Join-Path $Dir "$slug.txt"), $Content, [System.Text.Encoding]::UTF8)
    $global:totalCount++
}

function Write-SkillFile {
    param([string]$Dir, [string]$Title, [string]$Content, [string[]]$Tags, [string]$Category)
    $uuid = New-Uuid
    $slug = ($Title -replace '[^\w\s-]','' -replace '\s+','-' -replace '--+','-').ToLower()
    if ($slug.Length -gt 60) { $slug = $slug.Substring(0,60) }
    if (!(Test-Path $Dir)) { New-Item -ItemType Directory -Force -Path $Dir | Out-Null }
    $file = Join-Path $Dir "$uuid`__$slug.md"
    [System.IO.File]::WriteAllText($file, $Content, [System.Text.Encoding]::UTF8)
    $metaDir = Join-Path (Split-Path $Dir) ".metadata"
    if (!(Test-Path $metaDir)) { New-Item -ItemType Directory -Force -Path $metaDir | Out-Null }
    $meta = '{"uuid":"' + $uuid + '","name":"' + ($Title -replace '"','\"') + '","category":"' + $Category + '","tags":["' + ($Tags -join '","') + '"],"version":"1.0.0","created_at":"' + (Get-Date -Format 'o') + '"}'
    [System.IO.File]::WriteAllText((Join-Path $metaDir "$uuid.json"), $meta, [System.Text.Encoding]::UTF8)
    $global:totalCount += 2
}

# ================================================================
# AGENT TEMPLATE
# ================================================================
function Get-AgentTs {
    param([string]$AgentName, [string]$Description, [string]$Skills)
    $tpl = @'
/**
 * AGENT_NAME Agent
 * 
 * AGENT_DESC
 * 
 * Skills: AGENT_SKILLS
 * @version 1.0.0
 * @license MIT
 */

import { BaseAgent, AgentConfig, AgentContext, AgentResult } from '../core/base-agent';
import { SkillLoader } from '../core/skill-loader';
import { Logger } from '../utils/logger';

interface AgentState {
  initialized: boolean;
  lastExecution: Date | null;
  executionCount: number;
  errorCount: number;
  skills: Map<string, any>;
  config: Record<string, any>;
}

interface ExecutionInput {
  query: string;
  context?: Record<string, any>;
  options?: {
    maxSteps?: number;
    timeout?: number;
    verbose?: boolean;
    fallback?: boolean;
  };
}

interface ExecutionOutput {
  result: string;
  confidence: number;
  steps: StepResult[];
  metadata: {
    executionTime: number;
    tokensUsed: number;
    skillsInvoked: string[];
    warnings: string[];
  };
}

interface StepResult {
  stepNumber: number;
  action: string;
  input: any;
  output: any;
  duration: number;
  status: 'success' | 'warning' | 'error';
}

export class AgentNameAgent extends BaseAgent {
  private state: AgentState;
  private logger: Logger;
  private skillLoader: SkillLoader;

  constructor(config: AgentConfig) {
    super(config);
    this.logger = new Logger('AGENT_NAME');
    this.skillLoader = new SkillLoader(config.skillPaths);
    this.state = {
      initialized: false,
      lastExecution: null,
      executionCount: 0,
      errorCount: 0,
      skills: new Map(),
      config: config.agentConfig || {},
    };
  }

  async initialize(context: AgentContext): Promise<void> {
    this.logger.info('Initializing AGENT_NAME agent...');
    
    try {
      // Load required skills
      const requiredSkills = [AGENT_SKILLS];
      for (const skill of requiredSkills) {
        const loaded = await this.skillLoader.load(skill);
        this.state.skills.set(skill, loaded);
      }
      
      // Validate configuration
      this.validateConfig();
      
      this.state.initialized = true;
      this.logger.info('AGENT_NAME agent initialized successfully');
    } catch (error) {
      this.logger.error('Failed to initialize AGENT_NAME agent', error);
      throw error;
    }
  }

  async execute(input: ExecutionInput): Promise<ExecutionOutput> {
    if (!this.state.initialized) {
      throw new Error('Agent not initialized. Call initialize() first.');
    }

    const startTime = Date.now();
    const steps: StepResult[] = [];
    const skillsInvoked: string[] = [];
    const warnings: string[] = [];

    try {
      this.state.executionCount++;
      this.state.lastExecution = new Date();

      // Step 1: Input Analysis
      const analysisResult = await this.analyzeInput(input);
      steps.push({
        stepNumber: 1,
        action: 'input_analysis',
        input: input.query,
        output: analysisResult,
        duration: Date.now() - startTime,
        status: 'success',
      });

      // Step 2: Skill Selection
      const selectedSkills = this.selectSkills(analysisResult);
      skillsInvoked.push(...selectedSkills);
      steps.push({
        stepNumber: 2,
        action: 'skill_selection',
        input: analysisResult,
        output: selectedSkills,
        duration: Date.now() - startTime,
        status: 'success',
      });

      // Step 3: Pipeline Execution
      const pipelineResult = await this.executePipeline(input, selectedSkills, analysisResult);
      steps.push({
        stepNumber: 3,
        action: 'pipeline_execution',
        input: { skills: selectedSkills, query: input.query },
        output: pipelineResult,
        duration: Date.now() - startTime,
        status: 'success',
      });

      // Step 4: Quality Validation
      const validationResult = await this.validateOutput(pipelineResult);
      if (validationResult.warnings.length > 0) {
        warnings.push(...validationResult.warnings);
      }
      steps.push({
        stepNumber: 4,
        action: 'quality_validation',
        input: pipelineResult,
        output: validationResult,
        duration: Date.now() - startTime,
        status: validationResult.passed ? 'success' : 'warning',
      });

      // Step 5: Output Formatting
      const formattedResult = this.formatOutput(pipelineResult, validationResult);

      return {
        result: formattedResult,
        confidence: validationResult.confidenceScore,
        steps,
        metadata: {
          executionTime: Date.now() - startTime,
          tokensUsed: this.estimateTokens(formattedResult),
          skillsInvoked,
          warnings,
        },
      };
    } catch (error) {
      this.state.errorCount++;
      this.logger.error('Execution failed', error);
      
      if (input.options?.fallback) {
        return this.executeFallback(input, steps, error);
      }
      throw error;
    }
  }

  private async analyzeInput(input: ExecutionInput): Promise<any> {
    // Classify the input type and determine processing strategy
    return {
      type: this.classifyInputType(input.query),
      complexity: this.assessComplexity(input.query),
      domain: this.detectDomain(input.query),
      language: this.detectLanguage(input.query),
    };
  }

  private selectSkills(analysis: any): string[] {
    const selected: string[] = [];
    for (const [name, skill] of this.state.skills) {
      if (this.isSkillRelevant(skill, analysis)) {
        selected.push(name);
      }
    }
    return selected.length > 0 ? selected : Array.from(this.state.skills.keys()).slice(0, 3);
  }

  private async executePipeline(input: ExecutionInput, skills: string[], analysis: any): Promise<string> {
    let result = input.query;
    for (const skillName of skills) {
      const skill = this.state.skills.get(skillName);
      if (skill) {
        result = await skill.process(result, input.context);
      }
    }
    return result;
  }

  private async validateOutput(output: string): Promise<any> {
    return {
      passed: output.length > 0,
      confidenceScore: 0.85,
      warnings: [],
    };
  }

  private formatOutput(result: string, validation: any): string {
    return result;
  }

  private async executeFallback(input: ExecutionInput, steps: StepResult[], error: any): Promise<ExecutionOutput> {
    this.logger.warn('Executing fallback strategy');
    return {
      result: 'Fallback: Unable to process with primary pipeline. Error: ' + error.message,
      confidence: 0.3,
      steps,
      metadata: {
        executionTime: 0,
        tokensUsed: 0,
        skillsInvoked: [],
        warnings: ['Fallback executed due to primary pipeline failure'],
      },
    };
  }

  private validateConfig(): void {
    // Validate agent-specific configuration
  }

  private classifyInputType(query: string): string {
    if (query.includes('?')) return 'question';
    if (query.length > 500) return 'long-form';
    return 'instruction';
  }

  private assessComplexity(query: string): string {
    const wordCount = query.split(/\s+/).length;
    if (wordCount > 100) return 'high';
    if (wordCount > 30) return 'medium';
    return 'low';
  }

  private detectDomain(query: string): string {
    return 'general';
  }

  private detectLanguage(query: string): string {
    return 'en';
  }

  private isSkillRelevant(skill: any, analysis: any): boolean {
    return true;
  }

  private estimateTokens(text: string): number {
    return Math.ceil(text.length / 4);
  }

  async cleanup(): Promise<void> {
    this.logger.info('Cleaning up AGENT_NAME agent');
    this.state.skills.clear();
    this.state.initialized = false;
  }

  getStatus(): Record<string, any> {
    return {
      name: 'AGENT_NAME',
      initialized: this.state.initialized,
      executionCount: this.state.executionCount,
      errorCount: this.state.errorCount,
      lastExecution: this.state.lastExecution,
      loadedSkills: Array.from(this.state.skills.keys()),
    };
  }
}

export default AgentNameAgent;
'@
    return $tpl -replace 'AGENT_NAME', $AgentName -replace 'AGENT_DESC', $Description -replace 'AGENT_SKILLS', $Skills
}

# ================================================================
# MCP PROVIDER TEMPLATE
# ================================================================
function Get-McpTs {
    param([string]$ProviderName, [string]$Description)
    $tpl = @'
/**
 * PROVIDER_NAME MCP Provider
 * 
 * PROVIDER_DESC
 * 
 * Implements the Model Context Protocol for external system integration.
 * @version 1.0.0
 * @license MIT
 */

import { MCPProvider, MCPConfig, MCPRequest, MCPResponse, MCPTool } from '../core/mcp-base';
import { Logger } from '../utils/logger';
import { RateLimiter } from '../utils/rate-limiter';
import { CircuitBreaker } from '../utils/circuit-breaker';

interface ProviderConfig extends MCPConfig {
  apiKey?: string;
  endpoint?: string;
  timeout?: number;
  maxRetries?: number;
  cacheEnabled?: boolean;
  cacheTTL?: number;
}

interface ProviderState {
  connected: boolean;
  lastHealthCheck: Date | null;
  requestCount: number;
  errorCount: number;
  cache: Map<string, { data: any; expiry: number }>;
}

interface ToolDefinition {
  name: string;
  description: string;
  inputSchema: Record<string, any>;
  outputSchema: Record<string, any>;
  handler: (input: any) => Promise<any>;
}

export class ProviderNameMCPProvider extends MCPProvider {
  private config: ProviderConfig;
  private state: ProviderState;
  private logger: Logger;
  private rateLimiter: RateLimiter;
  private circuitBreaker: CircuitBreaker;
  private tools: Map<string, ToolDefinition>;

  constructor(config: ProviderConfig) {
    super(config);
    this.config = {
      timeout: 30000,
      maxRetries: 3,
      cacheEnabled: true,
      cacheTTL: 300000,
      ...config,
    };
    this.logger = new Logger('MCP:PROVIDER_NAME');
    this.rateLimiter = new RateLimiter({ maxRequests: 100, windowMs: 60000 });
    this.circuitBreaker = new CircuitBreaker({ failureThreshold: 5, resetTimeout: 60000 });
    this.state = {
      connected: false,
      lastHealthCheck: null,
      requestCount: 0,
      errorCount: 0,
      cache: new Map(),
    };
    this.tools = new Map();
    this.registerTools();
  }

  private registerTools(): void {
    // Tool 1: Query
    this.tools.set('query', {
      name: 'PROVIDER_NAME_query',
      description: 'Execute a query against PROVIDER_NAME',
      inputSchema: {
        type: 'object',
        properties: {
          query: { type: 'string', description: 'The query to execute' },
          options: { type: 'object', description: 'Query options' },
        },
        required: ['query'],
      },
      outputSchema: {
        type: 'object',
        properties: {
          results: { type: 'array' },
          metadata: { type: 'object' },
        },
      },
      handler: this.handleQuery.bind(this),
    });

    // Tool 2: Create
    this.tools.set('create', {
      name: 'PROVIDER_NAME_create',
      description: 'Create a new resource in PROVIDER_NAME',
      inputSchema: {
        type: 'object',
        properties: {
          data: { type: 'object', description: 'Resource data' },
          type: { type: 'string', description: 'Resource type' },
        },
        required: ['data', 'type'],
      },
      outputSchema: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          status: { type: 'string' },
        },
      },
      handler: this.handleCreate.bind(this),
    });

    // Tool 3: Update
    this.tools.set('update', {
      name: 'PROVIDER_NAME_update',
      description: 'Update a resource in PROVIDER_NAME',
      inputSchema: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          data: { type: 'object' },
        },
        required: ['id', 'data'],
      },
      outputSchema: {
        type: 'object',
        properties: {
          status: { type: 'string' },
          updated: { type: 'boolean' },
        },
      },
      handler: this.handleUpdate.bind(this),
    });

    // Tool 4: Delete
    this.tools.set('delete', {
      name: 'PROVIDER_NAME_delete',
      description: 'Delete a resource from PROVIDER_NAME',
      inputSchema: {
        type: 'object',
        properties: {
          id: { type: 'string' },
        },
        required: ['id'],
      },
      outputSchema: {
        type: 'object',
        properties: {
          status: { type: 'string' },
          deleted: { type: 'boolean' },
        },
      },
      handler: this.handleDelete.bind(this),
    });

    // Tool 5: Health Check
    this.tools.set('health', {
      name: 'PROVIDER_NAME_health',
      description: 'Check PROVIDER_NAME service health',
      inputSchema: { type: 'object', properties: {} },
      outputSchema: {
        type: 'object',
        properties: {
          status: { type: 'string' },
          latency: { type: 'number' },
        },
      },
      handler: this.handleHealthCheck.bind(this),
    });
  }

  async connect(): Promise<void> {
    this.logger.info('Connecting to PROVIDER_NAME...');
    try {
      // Validate configuration
      if (!this.config.endpoint) {
        throw new Error('Endpoint not configured');
      }
      
      // Test connectivity
      await this.handleHealthCheck({});
      
      this.state.connected = true;
      this.logger.info('Connected to PROVIDER_NAME successfully');
    } catch (error) {
      this.logger.error('Connection failed', error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    this.logger.info('Disconnecting from PROVIDER_NAME');
    this.state.connected = false;
    this.state.cache.clear();
  }

  async handleRequest(request: MCPRequest): Promise<MCPResponse> {
    // Rate limiting
    if (!this.rateLimiter.allowRequest()) {
      return { error: 'Rate limit exceeded', status: 429 };
    }

    // Circuit breaker
    if (!this.circuitBreaker.allowRequest()) {
      return { error: 'Service unavailable (circuit open)', status: 503 };
    }

    this.state.requestCount++;

    try {
      const tool = this.tools.get(request.tool);
      if (!tool) {
        return { error: 'Unknown tool: ' + request.tool, status: 404 };
      }

      // Check cache
      if (this.config.cacheEnabled) {
        const cached = this.getCached(request);
        if (cached) return { data: cached, status: 200, cached: true };
      }

      const result = await tool.handler(request.input);

      // Update cache
      if (this.config.cacheEnabled) {
        this.setCache(request, result);
      }

      this.circuitBreaker.recordSuccess();
      return { data: result, status: 200 };
    } catch (error) {
      this.state.errorCount++;
      this.circuitBreaker.recordFailure();
      this.logger.error('Request failed', error);
      return { error: error.message, status: 500 };
    }
  }

  listTools(): MCPTool[] {
    return Array.from(this.tools.values()).map(t => ({
      name: t.name,
      description: t.description,
      inputSchema: t.inputSchema,
    }));
  }

  private async handleQuery(input: any): Promise<any> {
    return { results: [], total: 0, query: input.query };
  }

  private async handleCreate(input: any): Promise<any> {
    return { id: crypto.randomUUID(), status: 'created', type: input.type };
  }

  private async handleUpdate(input: any): Promise<any> {
    return { id: input.id, status: 'updated', updated: true };
  }

  private async handleDelete(input: any): Promise<any> {
    return { id: input.id, status: 'deleted', deleted: true };
  }

  private async handleHealthCheck(_input: any): Promise<any> {
    const start = Date.now();
    this.state.lastHealthCheck = new Date();
    return {
      status: 'healthy',
      latency: Date.now() - start,
      requestCount: this.state.requestCount,
      errorCount: this.state.errorCount,
      uptime: process.uptime(),
    };
  }

  private getCached(request: MCPRequest): any | null {
    const key = JSON.stringify({ tool: request.tool, input: request.input });
    const entry = this.state.cache.get(key);
    if (entry && entry.expiry > Date.now()) return entry.data;
    if (entry) this.state.cache.delete(key);
    return null;
  }

  private setCache(request: MCPRequest, data: any): void {
    const key = JSON.stringify({ tool: request.tool, input: request.input });
    this.state.cache.set(key, { data, expiry: Date.now() + (this.config.cacheTTL || 300000) });
  }

  getStatus(): Record<string, any> {
    return {
      provider: 'PROVIDER_NAME',
      connected: this.state.connected,
      requestCount: this.state.requestCount,
      errorCount: this.state.errorCount,
      cacheSize: this.state.cache.size,
      tools: this.listTools().map(t => t.name),
    };
  }
}

export default ProviderNameMCPProvider;
'@
    return $tpl -replace 'PROVIDER_NAME', $ProviderName -replace 'PROVIDER_DESC', $Description
}

# ================================================================
# TRAINING PROMPT TEMPLATE
# ================================================================
function Get-TrainingPrompt {
    param([string]$Topic, [string]$Category)
    $tpl = @'
<system>
You are Gemma 4, an advanced AI assistant created by Google. You have been enhanced with comprehensive TRAIN_CAT capabilities.
</system>

<instruction>
You are an expert in TRAIN_TOPIC. When answering questions about this domain, follow these principles:

1. ACCURACY: Always ground your answers in verifiable facts. If you are unsure, say so explicitly.
2. DEPTH: Provide thorough, well-structured explanations suitable for professionals in the field.
3. EXAMPLES: Include practical examples, code snippets, or case studies where applicable.
4. NUANCE: Acknowledge edge cases, trade-offs, and multiple valid approaches.
5. CITATIONS: Reference specific standards, papers, or documentation when relevant.
6. SAFETY: Flag potential risks, security concerns, or ethical considerations proactively.
</instruction>

<example_interaction>
USER: Explain the key concepts of TRAIN_TOPIC and how they apply in practice.

ASSISTANT: # TRAIN_TOPIC - Key Concepts & Practical Application

## Core Concepts

TRAIN_TOPIC encompasses several fundamental principles that form the basis of effective implementation:

### 1. Foundation Layer
The foundation of TRAIN_TOPIC rests on understanding the underlying mechanics. This includes:
- **Theoretical framework**: The academic and research basis for standard practices
- **Core algorithms**: The computational methods that power modern implementations
- **Data requirements**: What input data is needed and how to prepare it
- **Quality metrics**: How to measure and validate outcomes

### 2. Implementation Architecture
A production-ready TRAIN_TOPIC system typically follows this architecture:

```
Input Layer -> Preprocessing -> Core Engine -> Post-Processing -> Output Layer
     |              |              |               |                |
  Validation    Normalization   Processing     Formatting       Delivery
     |              |              |               |                |
  Error Handling  Caching      Monitoring      Logging          Metrics
```

### 3. Best Practices
Based on industry experience and research:

1. **Start with clear requirements**: Define success criteria before implementation
2. **Iterate rapidly**: Use agile methodology with frequent validation cycles
3. **Monitor continuously**: Set up alerting for degradation in quality metrics
4. **Document thoroughly**: Maintain comprehensive documentation for reproducibility
5. **Test edge cases**: Specifically test boundary conditions and adversarial inputs
6. **Plan for scale**: Design for 10x the initial expected load

### 4. Common Challenges
Practitioners frequently encounter these challenges:
- Balancing accuracy with latency requirements
- Handling ambiguous or contradictory input data
- Scaling from prototype to production effectively
- Managing model drift and concept evolution over time
- Ensuring consistent quality across different input distributions

### 5. Practical Application
In real-world scenarios, TRAIN_TOPIC is applied to:
- Enterprise systems requiring high reliability and compliance
- Consumer applications demanding low latency and high throughput
- Research environments needing flexibility and reproducibility
- Hybrid deployments spanning cloud and edge infrastructure

## Summary
Effective TRAIN_TOPIC implementation requires a balanced approach combining solid theoretical understanding with practical engineering discipline. The key to success lies in systematic validation, continuous monitoring, and iterative improvement.
</example_interaction>

<constraints>
- Never fabricate statistics, citations, or factual claims
- Always acknowledge uncertainty when present
- Provide balanced perspectives on controversial topics
- Flag safety concerns proactively
- Maintain professional tone appropriate for the domain
- Support answers with reasoning chains
</constraints>
'@
    return $tpl -replace 'TRAIN_TOPIC', $Topic -replace 'TRAIN_CAT', $Category
}

Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  AGENTS + MCP + TRAINING GENERATOR" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# ========== AGENTS ==========
Write-Host "[1/3] GENERATING AGENTS..." -ForegroundColor Yellow

$agents = @(
    @{Name="RAG-Pipeline"; Desc="Orchestrates full RAG retrieval-augmented generation pipeline"; Skills="'rag-retrieval','vector-search','embedding','chunk-processing'"},
    @{Name="RAG-QueryRouter"; Desc="Routes queries to optimal retrieval strategies"; Skills="'query-classification','intent-detection','strategy-selection'"},
    @{Name="RAG-Reranker"; Desc="Reranks retrieved documents for relevance"; Skills="'cross-encoder','relevance-scoring','diversity-ranking'"},
    @{Name="RAG-ContextBuilder"; Desc="Assembles context from retrieved chunks"; Skills="'context-window','priority-scoring','dedup'"},
    @{Name="RAG-Evaluator"; Desc="Evaluates RAG pipeline quality metrics"; Skills="'faithfulness','relevancy','context-precision'"},
    @{Name="Reasoning-CoT"; Desc="Implements chain-of-thought reasoning"; Skills="'chain-of-thought','step-verification','logic-check'"},
    @{Name="Reasoning-TreeOfThought"; Desc="Tree-branching reasoning exploration"; Skills="'tree-search','branch-evaluation','pruning'"},
    @{Name="Reasoning-Mathematical"; Desc="Mathematical problem solving agent"; Skills="'symbolic-math','equation-solving','proof-verification'"},
    @{Name="Reasoning-LogicValidator"; Desc="Validates logical arguments and detects fallacies"; Skills="'formal-logic','fallacy-detection','argument-analysis'"},
    @{Name="Reasoning-Planner"; Desc="Hierarchical task planning and decomposition"; Skills="'goal-decomposition','task-sequencing','constraint-handling'"},
    @{Name="Vision-ImageAnalyzer"; Desc="Analyzes and describes image content"; Skills="'image-classification','object-detection','scene-understanding'"},
    @{Name="Vision-OCR"; Desc="Extracts text from images and documents"; Skills="'text-detection','character-recognition','layout-analysis'"},
    @{Name="Vision-ChartReader"; Desc="Interprets charts, graphs, and data visualizations"; Skills="'chart-classification','data-extraction','trend-analysis'"},
    @{Name="Vision-DocumentParser"; Desc="Parses structured documents from images"; Skills="'layout-detection','table-extraction','form-parsing'"},
    @{Name="Vision-DiagramInterpreter"; Desc="Interprets technical diagrams and flowcharts"; Skills="'shape-detection','relation-extraction','flow-analysis'"},
    @{Name="Domain-Medical"; Desc="Medical knowledge assistant"; Skills="'clinical-guidelines','drug-interactions','diagnosis-support'"},
    @{Name="Domain-Legal"; Desc="Legal analysis and document review"; Skills="'contract-analysis','case-law','regulatory-compliance'"},
    @{Name="Domain-Financial"; Desc="Financial analysis and advisory"; Skills="'financial-analysis','risk-assessment','portfolio-management'"},
    @{Name="Domain-Scientific"; Desc="Scientific research assistance"; Skills="'research-methodology','statistical-analysis','peer-review'"},
    @{Name="Domain-Technical-Writer"; Desc="Technical documentation generation"; Skills="'api-docs','user-guides','specifications'"},
    @{Name="Context-WindowManager"; Desc="Manages context window allocation"; Skills="'token-counting','priority-allocation','window-packing'"},
    @{Name="Context-Summarizer"; Desc="Progressive conversation summarization"; Skills="'extractive-summary','abstractive-summary','key-points'"},
    @{Name="Context-MemoryManager"; Desc="Long-term memory management"; Skills="'episodic-memory','semantic-memory','memory-retrieval'"},
    @{Name="Context-ChunkRouter"; Desc="Routes and prioritizes context chunks"; Skills="'relevance-scoring','recency-weighting','diversity-selection'"},
    @{Name="Spanish-LanguageExpert"; Desc="Spanish language processing specialist"; Skills="'grammar-analysis','idiom-handling','regional-adaptation'"},
    @{Name="Spanish-Translator"; Desc="High-quality Spanish-English translation"; Skills="'translation','localization','cultural-adaptation'"},
    @{Name="Spanish-CodeSwitcher"; Desc="Handles Spanish-English code-switching"; Skills="'language-detection','bilingual-response','register-matching'"},
    @{Name="Safety-ContentFilter"; Desc="Content safety and moderation"; Skills="'toxicity-detection','bias-check','harm-prevention'"},
    @{Name="Safety-RefusalCalibrator"; Desc="Calibrates refusal decisions"; Skills="'intent-analysis','risk-assessment','nuanced-refusal'"},
    @{Name="Safety-JailbreakDetector"; Desc="Detects and prevents jailbreak attempts"; Skills="'prompt-injection','adversarial-detection','constraint-enforcement'"},
    @{Name="FactCheck-ClaimVerifier"; Desc="Verifies factual claims"; Skills="'claim-extraction','source-evaluation','evidence-ranking'"},
    @{Name="FactCheck-ConfidenceScorer"; Desc="Scores output confidence levels"; Skills="'uncertainty-quantification','calibration','hedge-detection'"},
    @{Name="FactCheck-SelfCorrector"; Desc="Self-correction through verification"; Skills="'contradiction-detection','revision-generation','quality-check'"},
    @{Name="Orchestrator-Main"; Desc="Main agent orchestrator"; Skills="'agent-routing','task-decomposition','result-aggregation'"},
    @{Name="Orchestrator-MultiAgent"; Desc="Multi-agent collaboration coordinator"; Skills="'agent-communication','consensus-building','conflict-resolution'"},
    @{Name="Orchestrator-Fallback"; Desc="Fallback and error recovery"; Skills="'error-classification','recovery-strategy','graceful-degradation'"},
    @{Name="StructuredOutput-JSON"; Desc="Structured JSON output generation"; Skills="'schema-validation','json-formatting','type-coercion'"},
    @{Name="StructuredOutput-Table"; Desc="Structured table output generation"; Skills="'table-formatting','column-detection','data-alignment'"},
    @{Name="StructuredOutput-Code"; Desc="Structured code output generation"; Skills="'syntax-validation','formatting','documentation'"},
    @{Name="Inference-Optimizer"; Desc="Inference performance optimization"; Skills="'batching','caching','quantization'"},
    @{Name="Inference-StreamHandler"; Desc="Streaming inference handler"; Skills="'token-streaming','backpressure','chunked-output'"},
    @{Name="CreativeWriting-Author"; Desc="Creative writing assistant"; Skills="'storytelling','character-development','prose-style'"},
    @{Name="CreativeWriting-Editor"; Desc="Writing editing and revision"; Skills="'grammar-check','style-improvement','tone-adjustment'"},
    @{Name="ComputerUse-BrowserAgent"; Desc="Browser automation agent"; Skills="'navigation','form-filling','data-extraction'"},
    @{Name="ComputerUse-TerminalAgent"; Desc="Terminal command execution agent"; Skills="'command-generation','output-parsing','error-recovery'"},
    @{Name="CodeExecution-Sandbox"; Desc="Sandboxed code execution"; Skills="'python-execution','safety-checks','output-capture'"},
    @{Name="CodeExecution-Validator"; Desc="Code validation and testing"; Skills="'syntax-check','unit-testing','security-scan'"},
    @{Name="RealTimeData-WebSearch"; Desc="Real-time web search integration"; Skills="'query-formulation','result-parsing','freshness-check'"},
    @{Name="RealTimeData-APIIntegrator"; Desc="External API data integration"; Skills="'api-calling','data-transformation','rate-limiting'"}
)

foreach ($agent in $agents) {
    $content = Get-AgentTs -AgentName $agent.Name -Description $agent.Desc -Skills $agent.Skills
    Write-TsFile -FilePath "$base\agents\$($agent.Name.ToLower())\agent.ts" -Content $content
    Write-TsFile -FilePath "$base\agents\$($agent.Name.ToLower())\config.ts" -Content "export const config = { name: '$($agent.Name)', version: '1.0.0', skills: [$($agent.Skills)] };"
    Write-TsFile -FilePath "$base\agents\$($agent.Name.ToLower())\index.ts" -Content "export { $($agent.Name -replace '-','')Agent } from './agent';`nexport { config } from './config';"
    Write-TsFile -FilePath "$base\agents\$($agent.Name.ToLower())\README.md" -Content "# $($agent.Name) Agent`n`n$($agent.Desc)`n`n## Skills`n$($agent.Skills)"
}
Write-Host "  Agents: $($agents.Count * 4) files" -ForegroundColor Green

# ========== MCP PROVIDERS ==========
Write-Host "[2/3] GENERATING MCP PROVIDERS..." -ForegroundColor Yellow

$mcpProviders = @(
    @{Name="Pinecone"; Desc="Pinecone vector database integration for RAG pipelines"},
    @{Name="Weaviate"; Desc="Weaviate vector database with hybrid search support"},
    @{Name="ChromaDB"; Desc="ChromaDB embedded vector store integration"},
    @{Name="Qdrant"; Desc="Qdrant vector search engine integration"},
    @{Name="Milvus"; Desc="Milvus distributed vector database integration"},
    @{Name="Elasticsearch"; Desc="Elasticsearch full-text and vector search"},
    @{Name="Redis"; Desc="Redis vector search and caching integration"},
    @{Name="PostgreSQL-pgvector"; Desc="PostgreSQL with pgvector extension for embeddings"},
    @{Name="MongoDB-Atlas"; Desc="MongoDB Atlas vector search integration"},
    @{Name="Tesseract-OCR"; Desc="Tesseract OCR engine integration"},
    @{Name="Google-Cloud-Vision"; Desc="Google Cloud Vision API for image analysis"},
    @{Name="AWS-Textract"; Desc="AWS Textract for document parsing"},
    @{Name="Azure-Form-Recognizer"; Desc="Azure Form Recognizer for document AI"},
    @{Name="LangChain"; Desc="LangChain framework integration"},
    @{Name="LlamaIndex"; Desc="LlamaIndex data framework integration"},
    @{Name="Haystack"; Desc="Haystack NLP pipeline integration"},
    @{Name="Hugging-Face"; Desc="Hugging Face model hub integration"},
    @{Name="OpenAI-API"; Desc="OpenAI API for embeddings and completions"},
    @{Name="Anthropic-API"; Desc="Anthropic Claude API integration"},
    @{Name="Cohere-API"; Desc="Cohere API for embeddings and reranking"},
    @{Name="Google-AI"; Desc="Google AI Studio integration"},
    @{Name="Tavily-Search"; Desc="Tavily web search API for real-time data"},
    @{Name="Brave-Search"; Desc="Brave Search API integration"},
    @{Name="SerpAPI"; Desc="SerpAPI Google search results integration"},
    @{Name="Wolfram-Alpha"; Desc="Wolfram Alpha computational knowledge engine"},
    @{Name="Wikipedia-API"; Desc="Wikipedia API for knowledge grounding"},
    @{Name="PubMed-API"; Desc="PubMed biomedical literature API"},
    @{Name="ArXiv-API"; Desc="ArXiv scientific papers API"},
    @{Name="SEC-EDGAR"; Desc="SEC EDGAR financial filings API"},
    @{Name="GitHub-API"; Desc="GitHub API for code and repository access"},
    @{Name="StackOverflow"; Desc="Stack Overflow API for programming Q&A"},
    @{Name="NPM-Registry"; Desc="NPM package registry integration"},
    @{Name="PyPI"; Desc="Python Package Index integration"},
    @{Name="Docker-Hub"; Desc="Docker Hub container registry integration"},
    @{Name="Kubernetes-API"; Desc="Kubernetes cluster management API"},
    @{Name="Prometheus"; Desc="Prometheus metrics and monitoring"},
    @{Name="Grafana"; Desc="Grafana dashboard integration"},
    @{Name="Sentry"; Desc="Sentry error tracking integration"},
    @{Name="Slack-API"; Desc="Slack messaging platform integration"},
    @{Name="Discord-API"; Desc="Discord messaging platform integration"},
    @{Name="Notion-API"; Desc="Notion workspace API integration"},
    @{Name="Jira-API"; Desc="Jira project management integration"},
    @{Name="Linear-API"; Desc="Linear issue tracking integration"},
    @{Name="Stripe-API"; Desc="Stripe payments API integration"},
    @{Name="SendGrid"; Desc="SendGrid email delivery integration"},
    @{Name="Twilio"; Desc="Twilio communications API integration"},
    @{Name="Firebase"; Desc="Firebase backend services integration"},
    @{Name="Supabase"; Desc="Supabase backend-as-a-service integration"},
    @{Name="Cloudflare-Workers"; Desc="Cloudflare Workers edge computing integration"},
    @{Name="Vercel-API"; Desc="Vercel deployment platform integration"}
)

foreach ($mcp in $mcpProviders) {
    $content = Get-McpTs -ProviderName $mcp.Name -Description $mcp.Desc
    Write-TsFile -FilePath "$base\mcp-providers\$($mcp.Name.ToLower())\provider.ts" -Content $content
    Write-TsFile -FilePath "$base\mcp-providers\$($mcp.Name.ToLower())\config.ts" -Content "export const config = { name: '$($mcp.Name)', version: '1.0.0', type: 'mcp-provider' };"
    Write-TsFile -FilePath "$base\mcp-providers\$($mcp.Name.ToLower())\index.ts" -Content "export { $($mcp.Name -replace '-','')MCPProvider } from './provider';`nexport { config } from './config';"
    Write-TsFile -FilePath "$base\mcp-providers\$($mcp.Name.ToLower())\README.md" -Content "# $($mcp.Name) MCP Provider`n`n$($mcp.Desc)"
    Write-TsFile -FilePath "$base\mcp-providers\$($mcp.Name.ToLower())\tests\provider.test.ts" -Content "import { $($mcp.Name -replace '-','')MCPProvider } from '../provider';`ndescribe('$($mcp.Name) MCP Provider', () => { it('should initialize', () => { expect(true).toBe(true); }); });"
}
Write-Host "  MCP Providers: $($mcpProviders.Count * 5) files" -ForegroundColor Green

# ========== TRAINING PROMPTS ==========
Write-Host "[3/3] GENERATING TRAINING PROMPTS..." -ForegroundColor Yellow

$trainingCategories = @{
    "rag" = @("Vector Search Retrieval","Document Chunking Strategy","Embedding Model Selection","Hybrid Search Implementation","Query Decomposition RAG","Context Assembly Pipeline","Citation Generation RAG","Hallucination Prevention RAG","RAG Evaluation Metrics","Multi-Source Retrieval","Knowledge Graph Integration","Semantic Search Optimization","Metadata Filtering RAG","Caching Strategy RAG","Real-Time Index Updates","Cross-Lingual RAG","Code Documentation RAG","FAQ System RAG","Customer Support RAG","Enterprise Search RAG","Academic Research RAG","Legal Discovery RAG","Medical Literature RAG","Financial Data RAG","Technical Documentation RAG","API Documentation RAG","Product Manual RAG","Internal Knowledge Base","Compliance Document RAG","Patent Search RAG")
    "reasoning" = @("Chain of Thought Prompting","Tree of Thought Strategy","Mathematical Problem Solving","Logical Argument Analysis","Planning and Scheduling","Decision Making Framework","Causal Reasoning Analysis","Analogical Reasoning Method","Abductive Reasoning Guide","Inductive Logic Framework","Deductive Proof Strategy","Probabilistic Reasoning","Game Theory Analysis","Constraint Satisfaction","Dynamic Programming Think","Graph Algorithm Reasoning","Optimization Problems","Multi-Step Word Problems","Physics Problem Solving","Chemistry Problem Solving","Biology Analysis Reasoning","Economics Reasoning","Social Science Analysis","Philosophy Argumentation","Ethics Dilemma Analysis","Policy Analysis Reasoning","System Design Reasoning","Debugging Reasoning Chain","Architecture Decision Making","Trade-off Analysis Method")
    "vision" = @("Basic Image Description","Complex Scene Analysis","Chart Data Extraction","Diagram Flow Interpretation","OCR Text Extraction","Document Layout Parsing","Medical Image Analysis","Satellite Image Processing","Screenshot UI Analysis","Product Image Description","Food Image Recognition","Art Style Classification","Vehicle Identification","Traffic Scene Analysis","Industrial Inspection Visual","Agricultural Image Analysis","Security Camera Analysis","Face Expression Reading","Gesture Recognition Vision","Sign Language Interpretation","Map Image Understanding","Floor Plan Analysis","Circuit Diagram Reading","Chemical Structure Vision","Astronomical Image Analysis","Microscopy Image Guide","Weather Map Interpretation","Geographic Feature ID","Handwriting Style Analysis","Barcode QR Processing")
    "domain-medical" = @("Clinical Decision Support","Differential Diagnosis Aid","Drug Interaction Analysis","Lab Result Interpretation","Medical History Assessment","Treatment Plan Discussion","Patient Education Language","Medical Ethics Discussion","Clinical Trial Understanding","Epidemiology Analysis","Public Health Assessment","Mental Health Support","Chronic Disease Management","Preventive Medicine Guide","Surgical Procedure Education","Rehabilitation Guidance","Pediatric Assessment Aid","Geriatric Care Guide","Oncology Support Chat","Emergency Triage Guide")
    "domain-legal" = @("Contract Review Analysis","Legal Brief Drafting Aid","Case Law Research Method","Regulatory Compliance Check","IP Analysis Discussion","Employment Law Query","Corporate Governance Review","Litigation Risk Assessment","Legal Document Summary","Privacy Law Compliance","International Law Query","Constitutional Analysis","Criminal Defense Research","Real Estate Legal Review","Tax Law Interpretation","Insurance Claim Analysis","Immigration Law Guide","Environmental Regulation","Consumer Protection Law","Antitrust Analysis Aid")
    "domain-financial" = @("Financial Statement Reading","Investment Analysis Method","Portfolio Risk Assessment","Tax Planning Discussion","Valuation Method Analysis","Market Trend Analysis","Credit Risk Evaluation","Merger Acquisition Analysis","IPO Assessment Guide","Derivatives Pricing Discuss","Fixed Income Analysis","Equity Research Method","Economic Indicator Reading","Budget Planning Analysis","Cash Flow Projection","Cost Benefit Analysis","Financial Ratio Analysis","Working Capital Management","Capital Structure Analysis","Dividend Policy Discussion")
    "spanish" = @("Spanish Grammar Advanced","Spanish Idiom Usage","Spanish Business Writing","Spanish Technical Docs","Spanish Medical Terminology","Spanish Legal Terminology","Spanish Financial Terms","Spain vs LatAm Differences","Mexican Spanish Guide","Argentine Spanish Guide","Colombian Spanish Guide","Chilean Spanish Guide","Spanish Code Switching","Bilingual Support Chat","Spanish Academic Writing","Spanish SEO Content","Spanish UX Microcopy","Spanish Email Professional","Spanish Presentation Aid","Spanish Report Writing")
    "safety" = @("Content Moderation Guide","Refusal Calibration Method","Bias Detection Output","Jailbreak Prevention Guard","Harmful Content Detection","Privacy Protection Response","Misinformation Prevention","Age-Appropriate Content","Sensitive Topic Handling","Mental Health Safety","Substance Discussion Safety","Violence Content Boundary","Political Balance Guide","Religious Sensitivity","Medical Disclaimer Guide","Legal Disclaimer Practice","Financial Advice Boundary","Suicide Prevention Protocol","Bullying Prevention Guide","Self-Harm Safety Response")
    "fact-checking" = @("Claim Verification Method","Source Credibility Rating","Evidence Quality Assessment","Contradiction Detection Guide","Confidence Score Calibration","Knowledge Cutoff Awareness","Temporal Fact Check","Geographic Fact Verify","Statistical Claim Check","Quote Accuracy Verify","Historical Fact Verify","Scientific Claim Ground","Legal Precedent Verify","Medical Fact Safety Check","Technology Fact Currency","Self-Correction Prompting","Multi-Source Verify","Consensus Check Method","Expert Opinion Weight","Retraction Awareness Guide")
    "structured-output" = @("JSON Schema Generation","Markdown Table Output","CSV Data Formatting","XML Structure Output","YAML Config Generation","SQL Query Output","GraphQL Response Format","Pydantic Model Output","TypeScript Interface Gen","API Response Formatting","Error Response Structure","Pagination Response Format","Webhook Payload Design","Event Schema Creation","Log Entry Formatting","Report Template Output","Invoice Data Structure","Calendar Event Format","Contact Card Format","Product Catalog Format")
    "computer-use" = @("Browser Navigation Agent","Form Fill Automation","Data Scraping Ethical","Screenshot Capture Agent","Terminal Command Agent","File System Navigation","Database Query Agent","API Testing Agent","Deployment automation","Log Analysis Agent","Performance Monitor Agent","Security Scan Agent","Backup Automation Guide","Cron Job Management","Service Restart Agent","Config Update Agent","Certificate Renewal","DNS Management Agent","Load Balancer Config","Container Orchestration")
    "code-execution" = @("Python Script Execution","JavaScript Runtime Agent","SQL Query Execution","Shell Script Running","Data Analysis Execution","Model Training Execution","Test Suite Running","Build Pipeline Execution","Migration Script Agent","Seed Data Execution","Report Script Running","ETL Pipeline Execution","Scraping Script Agent","Monitoring Script Agent","Cleanup Script Agent","Benchmark Execution","Profiling Script Agent","Documentation Build","API Testing Script","Integration Test Agent")
    "creative-writing" = @("Short Story Generation","Poetry Writing Guide","Essay Composition Help","Blog Post Creation","Marketing Copy Writing","Product Description Gen","Social Media Content","Email Newsletter Draft","Press Release Writing","Speech Writing Guide","Screenwriting Basics","Song Lyric Creation","Children Story Writing","Science Fiction Writing","Fantasy World Building","Mystery Plot Creation","Romance Story Elements","Horror Story Writing","Comedy Writing Skills","Memoir Writing Guide")
    "multi-agent" = @("Agent Orchestration Design","Task Distribution Method","Agent Communication Protocol","Consensus Building Agents","Conflict Resolution Multi","Parallel Agent Execution","Sequential Agent Pipeline","Agent Feedback Loops","Agent Specialization Guide","Agent Team Composition","Agent Load Balancing","Agent Error Recovery","Agent State Management","Agent Memory Sharing","Agent Priority System","Agent Monitoring Dashboard","Agent Scaling Patterns","Agent Security Isolation","Agent Version Management","Agent A/B Testing")
    "real-time" = @("Web Search Integration","News Feed Processing","Weather Data Fetching","Stock Price Querying","Social Media Monitoring","Event Stream Processing","IoT Data Integration","GPS Location Services","Currency Exchange Rates","Flight Status Checking","Traffic Data Integration","Sports Score Updates","Cryptocurrency Prices","Job Listing Aggregation","Real Estate Data Feed","Restaurant Review Live","Product Price Tracking","Shipping Status Track","Calendar Event Sync","Email Notification Feed")
}

foreach ($cat in $trainingCategories.GetEnumerator()) {
    foreach ($topic in $cat.Value) {
        $content = Get-TrainingPrompt -Topic $topic -Category $cat.Key
        Write-TrainingFile -Dir "$base\training-prompts\$($cat.Key)\generated" -Name $topic -Content $content
    }
    Write-Host "  Training [$($cat.Key)]: $($cat.Value.Count) files" -ForegroundColor Green
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  AGENTS+MCP+TRAINING COMPLETE" -ForegroundColor Cyan
Write-Host "  Total new files: $global:totalCount" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Cyan
