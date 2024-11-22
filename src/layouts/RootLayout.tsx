import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { AppBar, Box, IconButton, Stack, Toolbar, Typography, useColorScheme } from '@mui/material';
import { Outlet } from 'react-router';

function RootLayout() {
  const { mode, setMode } = useColorScheme();

  return (
    <Box sx={{ height: '100vh', overflow: 'hidden' }}>
      <AppBar position="static">
        <Toolbar>
          <Stack flexGrow={1} direction="row" justifyContent={'space-between'} alignItems="center">
            <Typography variant="h4">
              Template Vite + React + TS + ESLint + Prettier + Socket + MUI + TanStack Query
            </Typography>

            <IconButton onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
              {mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      <Box sx={{ flexGrow: 1, overflow: 'auto', height: 'calc(100vh - 64px)' }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default RootLayout;
