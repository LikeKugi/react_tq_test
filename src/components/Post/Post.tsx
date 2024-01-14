import { FC, JSX } from 'react';
import styled from 'styled-components';
import { IPost } from '@/types/models';
import { Link } from 'react-router-dom';

const PostContainer = styled.article`
  padding: 0.5rem 1rem;
  border: 1px solid ;
  border-radius: 0.5rem;
  
  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
`
const PostTitle = styled.h2`
  margin-bottom: 0.2rem;
`

const PostBody = styled.p`
  text-align: justify;
`

const PostActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Post: FC<IPost> = ({body, title, id}): JSX.Element => {
  return (
    <PostContainer>
      <PostTitle>
        {title}
      </PostTitle>
      <PostBody>
        {body}
      </PostBody>
      <PostActions>
        <Link to={`${id}`}>Read More...</Link>
      </PostActions>
    </PostContainer>
  );
};
export default Post;
