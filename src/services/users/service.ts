import api from '@/config/api';
import { Response } from '@/types/api';

import { User } from './types';

export async function getUsers() {
  const { data } = await api.get<Response<User[]>>('/users');
  return data;
}
