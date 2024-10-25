import React from 'react';

import socket from '@/config/socket';
import { useGetUsersQuery } from '@/services/users/hooks';

function Home() {
  const { data, isLoading } = useGetUsersQuery();

  React.useEffect(() => {
    socket.on('connect', () => {
      // TODO: Handle socket events
    });
  }, []);

  return (
    <div>
      {isLoading && 'Loading...'}

      {!isLoading && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default Home;
