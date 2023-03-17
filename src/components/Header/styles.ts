import styled from 'styled-components';
import { Container } from '@/styles/utils';

export const StyledHeader = styled.header`
  margin: 1.87rem 0 3.125rem 0;
`;

export const Navbar = styled.nav`
  ${Container};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

export const MenuItem = styled.li`
  font-size: 16px;
  font-weight: 700;

  a {
    text-decoration: none;
    color: #000;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
