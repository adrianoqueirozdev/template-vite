import { RouteObject } from 'react-router';

import { ROUTE_PATHS } from '@/constants/routePaths';
import RootLayout from '@/layouts/RootLayout';
import HomePage from '@/pages/Home';

import AuthGuard from './guards/AuthGuard';

const PrivateRoutes: RouteObject = {
  path: ROUTE_PATHS.ROOT,
  element: (
    <AuthGuard>
      <RootLayout />
    </AuthGuard>
  ),
  children: [{ index: true, element: <HomePage /> }],
};

export default PrivateRoutes;
