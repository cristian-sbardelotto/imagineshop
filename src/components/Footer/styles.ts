import styled from 'styled-components';

import { Container } from '@/styles/utils';

export const StyledFooter = styled.footer`
  height: 12.5rem;

  background-color: #f4f4f4;
`;

export const FooterContainer = styled.div`
  ${Container};

  display: grid;
  grid-template-columns: 130px auto 130px;

  padding-top: 2.5rem;
`;

export const Contact = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.secondary};

  margin: 0;
  margin-top: 8.125rem;

  text-align: center;
`;

export const SocialNetworksList = styled.ul`
  list-style: none;

  padding: 0;

  display: flex;
  gap: 1.5rem;
`;


