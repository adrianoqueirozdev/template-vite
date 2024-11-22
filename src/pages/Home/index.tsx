import { Box, Typography } from '@mui/material';
import React from 'react';

import socket from '@/config/socket';
import { useGetUsersQuery } from '@/services/users/hooks';

function HomePage() {
  const { data, isFetching } = useGetUsersQuery();

  React.useEffect(() => {
    socket.on('connect', () => {
      // TODO: Handle socket events
    });
  }, []);

  return (
    <Box>
      <Typography variant="h4">{isFetching ? 'Loading...' : 'Users'}</Typography>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Box>
  );
}

export default HomePage;
