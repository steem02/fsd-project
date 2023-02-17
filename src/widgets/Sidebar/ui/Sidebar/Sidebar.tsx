import { Button } from 'shared/ui/Button';
import cns from 'shared/lib/classnames/cns';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'features/LangSwitcher';
import { PropsWithChildren, useState } from 'react';
import css from './Sidebar.module.scss';

interface SideBarProps {
  classNames?: string;
}

export function Sidebar(props: PropsWithChildren<SideBarProps>) {
  const { classNames } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation('sidebar');

  const toggleSidebar = async () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div data-testid="test-sidebar" className={cns(css.root, { classNames, [css.collapsed]: collapsed }, [])}>
      <div className={css.links} />
      <div className={css.actions}>
        <ThemeSwitcher />
        <LangSwitcher />
        <Button data-testid="toggle-button" onClick={toggleSidebar}>
          {t('sidebar_toggle')}
        </Button>
      </div>
    </div>
  );
}
