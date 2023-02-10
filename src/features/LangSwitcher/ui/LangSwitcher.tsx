import { PropsWithChildren } from 'react';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { cns } from 'shared/lib';

interface LangSwitcherProps {
  className?: string;
}

export function LangSwitcher(props: PropsWithChildren<LangSwitcherProps>) {
  const { className } = props;
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').catch(() => {});
  };

  return (
    <Button className={cns('', { className }, [])} onClick={changeLanguage}>
      {t('language')}
    </Button>
  );
}
