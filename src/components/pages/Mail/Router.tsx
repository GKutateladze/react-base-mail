import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

const Router = () => {

  const routes = [
    {
      path: '/:id',
      component: lazy(() => import('../Message/Message'))
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