import { RouteObject } from 'react-router';

import { ROUTE_PATHS } from '@/constants/routePaths';
import AuthLayout from '@/layouts/AuthLayout';

import GuestGuard from './guards/GuestGuard';

const PublicRoutes: RouteObject = {
  path: ROUTE_PATHS.ROOT,
  element: (
    <GuestGuard>
      <AuthLayout />
    </GuestGuard>
  ),
  children: [{ path: ROUTE_PATHS.AUTH.LOGIN, element: <div>LOGIN - PUBLIC</div> }],
};

export default PublicRoutes;
