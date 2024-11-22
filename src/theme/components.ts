import { createTheme } from '@mui/material/styles';

const components = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
  },
}).components;

export default components;
