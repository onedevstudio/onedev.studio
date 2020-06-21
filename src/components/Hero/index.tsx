import React from 'react';
import styled from 'styled-components';

interface HeroProps {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
}

const StyledHero = styled.section`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  min-height: 360px;
  text-align: center;
  width: 100%;

  @media (min-width: 460px) {
    width: 100vw;
  }

  > div {
    padding: 0 30px;
    max-width: 1400px;
    margin: 0 auto;
  }
`;

const StyledTitle = styled.h1`
  color: #434546;
  font-weight: 800;
  font-size: 2.6rem;

  @media (min-width: 460px) {
    font-size: 3.8rem;
  }

  @media (min-width: 720px) {
    font-size: 6.4rem;
  }

  @media (min-width: 1200px) {
    font-size: 7.8rem;
  }

  small {
    font-weight: 500;
    opacity: 0.65;
  }
`;

const StyledDesc = styled.p`
  color: #434546;
  font-weight: 300;
  opacity: 0.65;
  font-size: 1rem;

  @media (min-width: 720px) {
    font-size: 1.6rem;
  }

  @media (min-width: 1200px) {
    font-size: 2rem;
  }

  &::before {
    content: '{{';
    margin-right: 10px;
  }

  &::after {
    content: '}}';
    margin-left: 10px;
  }

  &::before,
  &::after {
    display: inline-block;
  }
`;

export const Hero: React.FC<HeroProps> = ({ title, description }: HeroProps) => {
  return (
    <StyledHero>
      <div>
        {title && <StyledTitle>{title}</StyledTitle>}
        {description && <StyledDesc>{description}</StyledDesc>}
      </div>
    </StyledHero>
  );
};

export default Hero;
