import { AboutPageAsync } from 'pages/AboutPage/ui/AboutPage.async';
import { MainPageAsync } from 'pages/MainPage/ui/MainPage.async';
import { RouteProps } from 'react-router-dom';

export type IRouteConfig = RouteProps & {
  title: string;
};

export const routerConfig: IRouteConfig[] = [
  {
    title: 'Main',
    path: '/main',
    element: <MainPageAsync />,
  },

  {
    title: 'About',
    path: '/about',
    element: <AboutPageAsync />,
  },
];
