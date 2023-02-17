import { Suspense } from 'react';
import { useTheme } from 'shared/hooks/useTheme';

import cns from 'shared/lib/classnames/cns';
import { Navbar } from 'widgets/Navbar';
import { PageLoader } from 'widgets/PageLoader';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/Router/ui';

export function App() {
  const { theme } = useTheme();
  return (
    <Suspense fallback={<PageLoader />}>
      <div className={cns('app light', {}, [theme])}>
        <Navbar />
        <div className="page-wrapper">
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
}
