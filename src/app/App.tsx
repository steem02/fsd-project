import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Suspense } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { cns } from 'shared/lib';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Button, ButtonVariant } from 'shared/ui/Button';
import { AppRouter } from './providers/Router/ui';
import css from './App.module.scss';

export function App() {
  const { theme } = useTheme();
  return (
    <BrowserRouter>
      <Suspense fallback="Loading">
        <div className={cns('app', {}, [theme])}>
          <Navbar />
          <div className="page-wrapper">
            <Sidebar />
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}
