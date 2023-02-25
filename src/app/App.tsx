import { userActions } from 'entities/User';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import cns from 'shared/lib/classnames/cns';
import { Navbar } from 'widgets/Navbar';
import { PageLoader } from 'widgets/PageLoader';
import { Sidebar } from 'widgets/Sidebar';
import { ErrorBoundary } from './providers/ErrorBoundary';
import { AppRouter } from './providers/Router';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

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
