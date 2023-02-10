import { lazy } from 'react';

export const MainPageAsync = lazy(
  async () =>
    new Promise((resolve) =>
      // eslint-disable-next-line no-promise-executor-return
      setTimeout(() => {
        // @ts-ignore
        resolve(import('./MainPage'));
      }, 1000)
    )
);
