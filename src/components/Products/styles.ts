import styled from 'styled-components';
import { Container } from '@/styles/utils';

export const ProductContainer = styled.section`
  ${Container}
`;

export const Title = styled.p`
  margin: 3.125rem 0 2.8rem 0;

  font-size: 1.875rem;
  font-weight: 700;

  span {
    font-size: 1.875rem;
    text-decoration: underline ${({ theme }) => theme.colors.primary};
  }
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.875rem;

  margin-bottom: 11.25rem;
`;

export const ProductItem = styled.div`
  height: 23.125rem;
  padding: 1rem;

  border: 1px solid #eaeaea;
  border-radius: 4px;
  box-shadow: 5px 0px 10px #d9d9d9;

  cursor: pointer;

  transition: 0.2s all ease;

  & * {
    transition: 0.2s all ease;
  }

  &:hover {
    box-shadow: 5px 10px 10px #d9d9d9;

    img {
      scale: 1.1;
    }

    p {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;

export const ProductName = styled.p`
  font-size: 0.875rem;
`;

export const ProductPrice = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
`;

export const ProductSplitPrice = styled.small`
  font-size: 0.75rem;
  font-weight: 700;
  color: #999;
`;
