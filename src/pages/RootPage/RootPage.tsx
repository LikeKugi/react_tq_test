import { JSX } from 'react';
import styled from 'styled-components';
import { Header } from '@/components/Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = styled.div`
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex-grow: 1;
`;

const RootPage = (): JSX.Element => {
  return (
    <Layout>
      <Header></Header>
      <Content>
        <Outlet/>
      </Content>
    </Layout>
  );
};
export default RootPage;
