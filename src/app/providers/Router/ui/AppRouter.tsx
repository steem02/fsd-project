import { Suspense } from 'react';
import { Routes, Route, RouteProps } from 'react-router-dom';
import { routerConfig } from 'app/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader';

export function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routerConfig.map((route: RouteProps) => (
          <Route key={route.path} path={route.path} element={<div className="page-content">{route.element}</div>} />
        ))}
      </Routes>
    </Suspense>
  );
}
