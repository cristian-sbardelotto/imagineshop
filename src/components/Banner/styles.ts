import { Container } from '@/styles/utils';
import styled from 'styled-components';


export const BannerContainer = styled.section`
  ${Container};
  border-top: 3px solid ${({ theme }) => theme.colors.primary};
  border-bottom: 3px solid ${({ theme }) => theme.colors.primary}
`;
