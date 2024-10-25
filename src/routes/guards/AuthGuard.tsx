import React from 'react';
import { useNavigate } from 'react-router';

import { ROUTE_PATHS } from '@/constants/routePaths';

function AuthGuard({ children }: React.PropsWithChildren) {
  const isLoggedIn = true; // TODO: Pegar essa informação de um hook: useAuth
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isLoggedIn) {
      navigate(ROUTE_PATHS.AUTH.LOGIN, { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return children;
}

export default AuthGuard;
