import { AboutPageAsync } from 'pages/AboutPage/ui/AboutPage.async';
import { MainPageAsync } from 'pages/MainPage/ui/MainPage.async';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';
import { RouterPath } from 'shared/config/router/RouterPath';

export type IRouteConfig = RouteProps & {
  title: string;
};

export const routerConfig: IRouteConfig[] = [
  {
    title: 'Main',
    path: RouterPath.MAIN,
    element: <MainPageAsync />,
  },

  {
    title: 'About',
    path: RouterPath.ABOUT,
    element: <AboutPageAsync />,
  },

  {
    title: 'Not Found',
    path: RouterPath.NOT_FOUND,
    element: <NotFoundPage />,
  },
];
