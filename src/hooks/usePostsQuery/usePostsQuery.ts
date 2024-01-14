import { IGetDataQuery } from '@/types/models';
import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '@/services/query.services';

export const usePostsQuery = ({queryString, page, per_page}: Omit<IGetDataQuery, 'endpoint'>) => {
  return useQuery({
    queryFn: () => fetchPosts({per_page, page, queryString}),
    queryKey: ['posts', page, per_page, queryString],
  })
}
