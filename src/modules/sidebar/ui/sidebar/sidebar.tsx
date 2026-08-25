import SvgPanelLeftClose from '@common/assets/icons/panel-left-close.svg';
import SvgPanelLeftOpen from '@common/assets/icons/panel-left-open.svg';
import { classNames } from '@common/helpers/class-names';
import { useToggle } from '@common/helpers/use-toggle';
import { LangSwitcher } from '@modules/sidebar/ui/lang-switcher/lang-switcher';
import { FC, useState } from 'react';

import classes from './sidebar.module.css';

export interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [isCollapsed, onToggle] = useToggle(false);

  return (
    <div className={classNames(classes.sidebar, { [classes.collapsed]: isCollapsed }, className)}>
      <div className={classes.actions}>
        <button style={{ width: '40px', height: '40px' }} type="button" onClick={onToggle}>
          {isCollapsed ? <SvgPanelLeftOpen /> : <SvgPanelLeftClose />}
        </button>

        <LangSwitcher />
      </div>
    </div>
  );
};
