import React from 'react';

import { ThemeConfigOptions } from '@/types/theme';
import initialThemeConfig from '@/utils/initialThemeConfig';

import { ApplicationConfigContext } from './ApplicationConfigContext';

type ApplicationConfigState = ThemeConfigOptions & {};

const initialState: ApplicationConfigState = {
  ...initialThemeConfig,
};

export function ApplicationConfigProvider({ children }: React.PropsWithChildren) {
  const [config] = React.useState<ApplicationConfigState>(initialState);

  const contextValue = React.useMemo(() => ({ ...config }), [config]);

  return <ApplicationConfigContext.Provider value={contextValue}>{children}</ApplicationConfigContext.Provider>;
}
