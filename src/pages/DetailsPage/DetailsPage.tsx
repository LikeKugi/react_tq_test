import { JSX } from 'react';
import { useDetailsPostsQuery } from '@/hooks/useDetailsPostsQuery/useDetailsPostsQuery';
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from '@/components/Container/Container';
import { Title } from '@/components/Title/Title';

const DetailsPage = (): JSX.Element => {

  const {postId} = useParams();

  const navigate = useNavigate();

  const {data} = useDetailsPostsQuery(postId || '')

  if (data) return (
    <Container>
      <Title>
        {data.post.title}
      </Title>
      <p>{data.post.body}</p>
      <p><strong>User:</strong> {data.user.username}</p>
      <p><button onClick={() => navigate(-1)}>Back</button></p>
    </Container>
  );

  return <></>
};
export default DetailsPage;
