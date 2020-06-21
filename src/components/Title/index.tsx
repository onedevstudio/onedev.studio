import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  children?: React.ReactNode;
}

const StyledTitle = styled.main`
  color: #434546;
  font-size: 42px;
`;

export const Title: React.FC<TitleProps> = ({ children }: TitleProps) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
