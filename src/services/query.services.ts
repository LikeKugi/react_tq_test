import axios from 'axios';
import { IGetDataQuery } from '@/types/models';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

export const getData = async ({endpoint, page, per_page, queryString}: IGetDataQuery) => {
  const queryParams: string[] = [];
  if (page) {
    queryParams.push(`_page=${page}`)
  }
  if (per_page) {
    queryParams.push(`_per_page=${per_page}`)
  }
  if (queryString) {
    queryParams.push(queryString)
  }

  const result = await instance.get(`${endpoint}${queryParams.length ? '?'+queryParams.join('&'): ''}`)
  return await result.data
}

export const getPosts = async ({page, per_page, queryString}: Omit<IGetDataQuery, 'endpoint'>) => {
  const currentPage = !page ? 1 : page > 1 ? page : 1;
  const currentPerPage = per_page || 10;
  return await getData({endpoint: '/posts', page: currentPage, per_page: currentPerPage, queryString})
}
