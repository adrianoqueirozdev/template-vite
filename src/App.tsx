import { ApplicationConfigProvider } from './contexts/ApplicationConfig';
import AppRoutes from './routes';
import ThemeProvider from './theme';

function App() {
  return (
    <ApplicationConfigProvider>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </ApplicationConfigProvider>
  );
}

export default App;
