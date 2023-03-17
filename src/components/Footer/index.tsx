import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {
  faFacebookSquare,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import {
  Contact,
  FooterContainer,
  SocialNetworkIcon,
  SocialNetworksList,
  StyledFooter,
} from './styles';

import logo from '../../../public/images/logo.png';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <div>
          <Link href='/'>
            <Image
              src={logo}
              alt='ImagineSchool Logo'
              width={130}
              height={60}
            />
          </Link>
        </div>

        <Contact>
          Imagine Shop - +55 (48) 3771 - 1703 3771 - 1823-
          imagine@imagineschool.com.br - Rua Miguel Daux, 129, Coqueiros -
          Florianópolis/SC
        </Contact>

        <SocialNetworksList>
          <li>
            <a href='https://facebook.com/'>
              <SocialNetworkIcon icon={faFacebookSquare} />
            </a>
          </li>

          <li>
            <a href='https://instagram.com/'>
              <SocialNetworkIcon icon={faInstagram} />
            </a>
          </li>

          <li>
            <a href='https://youtube.com/'>
              <SocialNetworkIcon icon={faYoutube} />
            </a>
          </li>
        </SocialNetworksList>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
