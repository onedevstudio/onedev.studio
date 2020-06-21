import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import { Title } from '@src/components';

interface HomePageProps {}

const StyledMain = styled.main`
  min-height: 360px;
  height: 100vh;
  width: 100vw;
`;

const HomePage: NextPage<HomePageProps> = () => {
  return (
    <StyledMain>
      <Title>HomePage</Title>
    </StyledMain>
  );
};

export default HomePage;
