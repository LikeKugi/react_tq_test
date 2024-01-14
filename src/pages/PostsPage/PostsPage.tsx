import { JSX, useEffect, useState } from 'react';
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

  const [page, setPage] = useState(currentPage);
  const [per_page] = useState(currentPerPage);
  const [like, setLike] = useState(currentLike || '');


  useEffect(() => {
    const pageParams: { [T: string]: string | number } = {
      page,
      per_page,
    };

    if (like) {
      pageParams['like'] = like;
    }

    setSearchParams(prev => ({
      ...prev,
      ...pageParams,
    }));
  }, [setSearchParams, page, per_page, like]);

  const { data } = usePostsQuery({
    page,
    per_page,
    queryString: like,
  });

  const handlePagination = (page: number) => {
    if (page < 1) return;
    setPage(page);
  };

  const handleSearch = (query: string) => {
    setLike(query);
    setPage(1);
  };

  return (
    <Container>
      <Search submitHandler={handleSearch}
              value={like}/>
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
