import cns from 'shared/lib/classnames/cns';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LangSwitcher } from 'features/LangSwitcher';
import { PropsWithChildren, useState } from 'react';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RouterPath } from 'shared/config/router/RouterPath';
import { Size } from 'shared/types/types';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import css from './Sidebar.module.scss';

interface SideBarProps {
  className?: string;
  defaultCollapsed?: boolean;
}

export function Sidebar(props: PropsWithChildren<SideBarProps>) {
  const { className, defaultCollapsed } = props;
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(defaultCollapsed ?? false);

  const toggleSidebar = async () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div data-testid="test-sidebar" className={cns(css.root, { [css.collapsed]: collapsed }, [className])}>
      <div className={css.links}>
        <AppLink to={RouterPath.MAIN} className={css.link}>
          <MainIcon className={css.icon} />
          {!collapsed && <span>{t('main')}</span>}
        </AppLink>
        <AppLink to={RouterPath.ABOUT} className={css.link}>
          <AboutIcon className={css.icon} />
          {!collapsed && <span>{t('about')}</span>}
        </AppLink>
      </div>
      <div className={css.actions}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
        <Button
          variant={ButtonVariant.OUTLINED}
          size={Size.L}
          className={css.switcher}
          data-testid="toggle-button"
          onClick={toggleSidebar}
        >
          {collapsed ? '>' : '<'}
        </Button>
      </div>
    </div>
  );
}
