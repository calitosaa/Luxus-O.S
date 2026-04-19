---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/renderer/pages/settings/ToolsSettings/McpServerActions.tsx
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { Button, Dropdown, Menu, Switch } from '@arco-design/web-react';
import { DeleteFour, SettingOne, Write } from '@icon-park/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import type { IMcpServer } from '@/common/config/storage';

interface McpServerActionsProps {
  server: IMcpServer;
  onEditServer: (server: IMcpServer) => void;
  onDeleteServer: (serverId: string) => void;
  onToggleServer: (serverId: string, enabled: boolean) => void;
}

const McpServerActions: React.FC<McpServerActionsProps> = ({
  server,
  onEditServer,
  onDeleteServer,
  onToggleServer,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Dropdown
        trigger='hover'
        droplist={
          <Menu>
            <Menu.Item key='edit' onClick={() => onEditServer(server)}>
              <div className='flex items-center gap-2'>
                <Write size={'14'} />
                {t('settings.mcpEditServer')}
              </div>
            </Menu.Item>
            <Menu.Item key='delete' onClick={() => onDeleteServer(server.id)}>
              <div className='flex items-center gap-2 text-red-500'>
                <DeleteFour size={'14'} />
                {t('settings.mcpDeleteServer')}
              </div>
            </Menu.Item>
          </Menu>
        }
      >
        <Button size='mini' icon={<SettingOne size={'14'} />} />
      </Dropdown>

      <Switch
        checked={server.enabled}
        onChange={(checked) => onToggleServer(server.id, checked)}
        size='small'
        disabled={server.status === 'testing'}
      />
    </>
  );
};

export default McpServerActions;
