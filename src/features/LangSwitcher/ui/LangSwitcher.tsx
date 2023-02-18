import { PropsWithChildren } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cns from 'shared/lib/classnames/cns';

interface LangSwitcherProps {
  short?: boolean;
  className?: string;
}

export function LangSwitcher(props: PropsWithChildren<LangSwitcherProps>) {
  const { className, short } = props;
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').catch(() => {});
  };

  return (
    <Button className={cns('', { className }, [])} onClick={changeLanguage}>
      {short ? t('lng') : t('language')}
    </Button>
  );
}
