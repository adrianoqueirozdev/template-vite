import React from 'react';

import { ThemeConfigOptions } from '@/types/theme';

type ApplicationConfigState = ThemeConfigOptions & {};

export const ApplicationConfigContext = React.createContext({} as ApplicationConfigState);
