import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constants/queryKeys';
import { getUsers } from '@/services/users/service';
import { QueryParams } from '@/types/react-query';

export function useGetUsersQuery(queryParams: QueryParams = {}) {
  return useQuery({
    queryFn: getUsers,
    queryKey: [QUERY_KEYS.USERS],
    ...queryParams,
  });
}
