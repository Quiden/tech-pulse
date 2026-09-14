import SvgPanelLeftClose from '@common/assets/icons/panel-left-close.svg';
import SvgPanelLeftOpen from '@common/assets/icons/panel-left-open.svg';
import { classNames } from '@common/helpers/class-names';
import { useToggle } from '@common/helpers/use-toggle';
import { Button } from '@common/ui/button';
import { LangSwitcher } from '@modules/sidebar/ui/lang-switcher/lang-switcher';
import { FC } from 'react';

import classes from './sidebar.module.css';

export interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [isCollapsed, onToggle] = useToggle(false);

  return (
    <div className={classNames(classes.sidebar, { [classes.collapsed]: isCollapsed }, className)} data-testid="sidebar">
      <div className={classes.actions}>
        <Button type="button" onClick={onToggle} data-testid="sidebar-toggle">
          {isCollapsed ? <SvgPanelLeftOpen /> : <SvgPanelLeftClose />}
        </Button>

        <LangSwitcher />
      </div>
    </div>
  );
};
