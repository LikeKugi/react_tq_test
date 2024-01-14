import { JSX, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { usePostsQuery } from '@/hooks/usePostsQuery/usePostsQuery';
import { Container } from '@/components/Container/Container';
import Post from '@/components/Post/Post';
import Pagination from '@/components/Pagination/Pagination';
import Search from '@/components/Search/Search';

const PostsPage = (): JSX.Element => {

  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || 1;
  const currentPerPage = Number(searchParams.get('per_page')) || 10;
  const currentLike = searchParams.get('like');

  useEffect(() => {
    const pageParams: {[T: string]: string | number} = {
      page: currentPage,
      per_page: currentPerPage,
    };

    if (currentLike) {
      pageParams['like'] = currentLike;
    }

    setSearchParams(prev => ({
      ...prev,
      ...pageParams,
    }));
  }, [currentPage, currentPerPage, currentLike, setSearchParams]);

  const { data } = usePostsQuery({
    page: currentPage,
    per_page: currentPerPage,
    queryString: currentLike,
  });

  const handlePagination = (page: number) => {
    if (page < 1) return;
    setSearchParams(prev => ({
      ...prev,
      page,
    }));
  };

  const handleSearch = (query: string) => {
    if (!query) {
      setSearchParams(prev => {
        const newParams = prev;
        newParams.delete('like');
        return {
          ...newParams,
          page: 1,
        }
      })
      return;
    }

    setSearchParams(prev => ({
      ...prev,
      page: 1,
      like: query,
    }))
  }

  return (
    <Container>
      <Search submitHandler={handleSearch} />
      {data && data.map(post => (
        <Post key={post.id} {...post} />
      ))}
      <Pagination firstDisabled={currentPage <= 1}
                  lastDisabled={false}
                  currentPage={currentPage}
                  clickHandler={handlePagination}/>
    </Container>
  );
};
export default PostsPage;
