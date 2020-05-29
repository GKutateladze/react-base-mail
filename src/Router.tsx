import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

const Router = () => {

  const routes = [
    {
      path: '/login',
      component: lazy(() => import('./components/pages/Login/Login'))
    },
    {
      path: '/mail',
      component: lazy(() => import('./components/pages/Mail/Mail'))
    },
    {
      path: '/team',
      component: lazy(() => import('./components/pages/Team/Team'))
    },
    {
      path: '/files',
      component: lazy(() => import('./components/pages/Files/Files'))
    }
  ];

  const routerOutlet = routes.map((r) => {
    return <Suspense fallback={<div>...</div>} key={r.path}><Route path={r.path} component={r.component} /></Suspense>;
  });

  return (
    <>
      {routerOutlet}
    </>
  );
};

export default Router;