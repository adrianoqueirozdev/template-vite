import React from 'react';

import { ApplicationConfigContext } from '@/contexts/ApplicationConfig';

export function useApplicationConfig() {
  const context = React.useContext(ApplicationConfigContext);

  if (!context) {
    throw new Error('useApplicationConfigContext must be used within an ApplicationConfigProvider');
  }

  return context;
}
