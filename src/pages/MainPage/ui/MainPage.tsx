import { useEffect, useState } from 'react';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';

export default function MainPage() {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <div>
      MainPage
      <br />
      <Button variant={ButtonVariant.OUTLINED} onClick={() => setError(true)}>
        Error
      </Button>
    </div>
  );
}
