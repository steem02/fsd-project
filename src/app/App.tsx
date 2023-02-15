import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useTheme } from 'shared/hooks/useTheme';
import { cns } from 'shared/lib';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { Navbar } from 'widgets/Navbar';
import { PageLoader } from 'widgets/PageLoader';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/Router/ui';

export function App() {
  const { theme } = useTheme();
  return (
    <Suspense fallback={<PageLoader />}>
      <div className={cns('app', {}, [theme])}>
        <ErrorBoundary>
          <Navbar />
          <div className="page-wrapper">
            <Sidebar />
            <AppRouter />
          </div>
        </ErrorBoundary>
      </div>
    </Suspense>
  );
}
