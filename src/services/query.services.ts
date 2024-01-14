import axios from 'axios';
import { IFetchDetailsPostResponse, IGetDataQuery, IPost, IUser } from '@/types/models';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

export const fetchData = async ({endpoint, page, per_page, queryString}: IGetDataQuery) => {
  const queryParams: string[] = [];
  if (page) {
    queryParams.push(`_page=${page}`)
  }
  if (per_page) {
    queryParams.push(`_per_page=${per_page}`)
  }
  if (queryString) {
    queryParams.push(`_embed=[body=${queryString}]`)
  }

  const result = await instance.get(`${endpoint}${queryParams.length ? '?'+queryParams.join('&'): ''}`)
  return await result.data
}

export const fetchPosts = async ({page, per_page, queryString}: Omit<IGetDataQuery, 'endpoint'>): Promise<IPost[]> => {
  const currentPage = !page ? 1 : page > 1 ? page : 1;
  const currentPerPage = per_page || 10;
  return await fetchData({
    endpoint: '/posts',
    page: currentPage,
    per_page: currentPerPage,
    queryString})
}

export const fetchDetailsPost = async (id: number | string): Promise<IFetchDetailsPostResponse> => {
  const postEndpoint = `/posts/${id}`;
  const postData: IPost = await fetchData({endpoint: postEndpoint});
  const userEndpoint = `/users/${postData.userId}`
  const userData: IUser = await fetchData({endpoint: userEndpoint});
  return {post: postData, user: userData}
}
