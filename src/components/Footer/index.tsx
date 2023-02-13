import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import styled from 'styled-components';

import {
  Contact,
  FooterContainer,
  SocialNetworksList,
  StyledFooter,
} from './styles';

import logo from '../../assets/logo.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <div>
          <Image src={logo} alt='ImagineSchool Logo' width={130} height={60} />
        </div>
        
        <Contact>
          Imagine Shop - +55 (48) 3771 - 1703 3771 - 1823-
          imagine@imagineschool.com.br - Rua Miguel Daux, 129, Coqueiros -
          Florianópolis/SC
        </Contact>

        <SocialNetworksList>
          <li>
            <SocialNetworkIcon icon={faFacebookSquare} />
          </li>

          <li>
            <SocialNetworkIcon icon={faInstagram} />
          </li>

          <li>
            <SocialNetworkIcon icon={faYoutube} />
          </li>
        </SocialNetworksList>
      </FooterContainer>
    </StyledFooter>
  );
};

const SocialNetworkIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.875rem;
`;

export default Footer;
