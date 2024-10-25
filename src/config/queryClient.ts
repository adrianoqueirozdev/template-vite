import { QueryClient } from '@tanstack/react-query';

const queryCLient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
    },
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export default queryCLient;
