import { CssBaseline, StyledEngineProvider, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import React from 'react';

import components from './components';
import paletteDark from './paletteDark';
import paletteLight from './paletteLight';
import typography from './typography';

function ThemeProvider({ children }: React.PropsWithChildren) {
  const theme = createTheme({
    components,
    typography,
    colorSchemes: {
      light: { palette: paletteLight },
      dark: { palette: paletteDark },
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
}

export default ThemeProvider;
