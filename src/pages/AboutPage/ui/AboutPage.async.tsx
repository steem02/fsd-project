import { lazy } from 'react';

export const AboutPageAsync = lazy(
  async () =>
    new Promise((resolve) =>
      // eslint-disable-next-line no-promise-executor-return
      setTimeout(() => {
        // @ts-ignore
        resolve(import('./AboutPage'));
      }, 1000)
    )
);
