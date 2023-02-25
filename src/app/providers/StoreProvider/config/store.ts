import { AnyAction, configureStore, ReducersMapObject, ThunkDispatch } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';
import { useDispatch } from 'react-redux';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };
  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __DEV__,
    preloadedState: initialState,
  });
}

export const useThunkDispatch = () => useDispatch<ThunkDispatch<StateSchema, any, AnyAction>>();
