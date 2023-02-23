import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children: ReactNode;
  initialStore?: Partial<StateSchema>;
}

export function StoreProvider({ children, initialStore }: StoreProviderProps) {
  const store = createReduxStore(initialStore as StateSchema);

  return <Provider store={store}>{children}</Provider>;
}
