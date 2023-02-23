import { Suspense } from 'react';
import { useTheme } from 'shared/hooks/useTheme';
import cns from 'shared/lib/classnames/cns';
import { Navbar } from 'widgets/Navbar';
import { PageLoader } from 'widgets/PageLoader';
import { Sidebar } from 'widgets/Sidebar';
import { ErrorBoundary } from './providers/ErrorBoundary';
import { AppRouter } from './providers/Router';

export function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <div className={cns('app', {})}>
        <ErrorBoundary>
          <Navbar />
          <div className="page-wrapper">
            <Sidebar className="page-sidebar" />
            <AppRouter />
          </div>
        </ErrorBoundary>
      </div>
    </Suspense>
  );
}
