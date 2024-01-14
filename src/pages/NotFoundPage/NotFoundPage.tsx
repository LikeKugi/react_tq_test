import { JSX } from 'react';
import { Container } from '@/components/Container/Container';
import { Title } from '@/components/Title/Title';
import { Link } from 'react-router-dom';
import { RoutesPaths } from '@/constants';

const NotFoundPage = (): JSX.Element => {
  return (
    <Container>
      <Title>
        Oops... Not Found
      </Title>
      <Link to={RoutesPaths.INDEX}>Back to Main Page</Link>
    </Container>
  );
};
export default NotFoundPage;
