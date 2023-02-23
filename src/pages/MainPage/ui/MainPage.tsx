import { Counter } from 'entities/Counter';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';

export default function MainPage() {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <div>
      {t('mock_article')}
      <br />
      <Button variant={ButtonVariant.OUTLINED} onClick={() => setError(true)}>
        {t('error')}
      </Button>

      <Counter />
    </div>
  );
}
