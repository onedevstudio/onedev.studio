import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import { Hero } from '@src/components';

interface HomePageProps {}

const StyledMain = styled.main`
  @media (min-width: 460px) {
    height: 100vh;
    width: 100vw;
  }
`;

const HomePage: NextPage<HomePageProps> = () => {
  return (
    <StyledMain>
      <Hero
        title={
          <>
            Onedev<small>.studio</small>
          </>
        }
        description="We coding digital products with creative technologies"
      />
    </StyledMain>
  );
};

export default HomePage;
