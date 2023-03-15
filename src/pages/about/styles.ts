import styled from 'styled-components';

import { Container } from '@/styles/utils';
import Image from 'next/image';

export const Main = styled.main`
  ${Container};
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

export const Article = styled.article`
  text-align: center;
  margin-bottom: 2rem;

  font-size: 1.1rem;

  a {
    text-decoration: none;
    font-size: 1.25rem;

    transition: 0.1s all ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const ImageGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-top: 5rem;

  img:hover {
    filter: brightness(0.9);
  }
`;

export const CreatorImage = styled(Image)`
  border-radius: 50%;
`;
