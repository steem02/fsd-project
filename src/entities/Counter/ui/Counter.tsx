import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export function Counter() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div data-testid="value-title">
      <h1>{counterValue}</h1>
      <Button data-testid="increment-btn" onClick={increment}>
        {t('increment')}
      </Button>
      <Button data-testid="decrement-btn" onClick={decrement}>
        {t('decrement')}
      </Button>
    </div>
  );
}
