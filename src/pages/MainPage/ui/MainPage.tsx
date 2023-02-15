import { useEffect, useState } from 'react';
import { Button, ButtonVariant } from 'shared/ui/Button';

export default function MainPage() {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <div>
      MainPage{' '}
      <Button theme={ButtonVariant.OUTLINED} onClick={() => setError(true)}>
        Error
      </Button>
    </div>
  );
}
