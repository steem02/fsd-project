import { Suspense } from 'react';
import { Routes, Route, RouteProps } from 'react-router-dom';
import { routerConfig } from 'shared/config/routerConfig/routerConfig';

export function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routerConfig.map((route: RouteProps) => (
          <Route key={route.path} path={route.path} element={<div className="page-content">{route.element}</div>} />
        ))}
      </Routes>
    </Suspense>
  );
}
