import { useRoutes } from 'react-router';

import NotFoundPage from '@/pages/NotFound';

import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

function AppRoutes() {
  return useRoutes([PrivateRoutes, PublicRoutes, { path: '*', element: <NotFoundPage /> }]);
}

export default AppRoutes;
