import { useQuery } from '@tanstack/react-query';
import { fetchDetailsPost } from '@/services/query.services';

export const useDetailsPostsQuery = (id: number | string) => {
  return useQuery({
    queryFn: () => fetchDetailsPost(id),
    queryKey: ['post', id],
  })
}
