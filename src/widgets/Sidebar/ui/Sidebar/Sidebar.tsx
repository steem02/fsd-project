import { PropsWithChildren, useState } from 'react';
import { cns } from 'shared/lib';
import { Button } from 'shared/ui/Button';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'features/LangSwitcher';
import css from './Sidebar.module.scss';

interface SideBarProps {
  classNames?: string;
}

export function Sidebar(props: PropsWithChildren<SideBarProps>) {
  const { classNames } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation('sidebar');

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={cns(css.root, { classNames, [css.collapsed]: collapsed }, [])}>
      <div className={css.links} />
      <div className={css.actions}>
        <ThemeSwitcher />
        <LangSwitcher />
        <Button onClick={toggleSidebar}>{t('sidebar_toggle')}</Button>
      </div>
    </div>
  );
}
