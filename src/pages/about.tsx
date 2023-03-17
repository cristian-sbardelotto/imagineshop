import React from 'react';

import styled from 'styled-components';
import { Container } from '@/styles/utils';

import Image from 'next/image';
import imagineSchoolLogo from '../../public/images/imagine-school-logo.png';
import creatorImage from '../../public/images/creator-image.png';

const About = () => {
  return (
    <Main>
      <Title>Sobre nós</Title>

      <Article>
        A ImagineShop é uma empresa fictícia criada por{' '}
        <a
          href='https://github.com/cristian-sbardelotto'
          target='_blank'
          rel='noreferrer'
        >
          Cristian Sbardelotto
        </a>{' '}
        para simular um e-commerce.
      </Article>

      <Article>
        O e-commerce, por sua vez, vende produtos de tecnologia, como
        periféricos para jogos, aparelhos eletrônicos ou eletrodomésticos.
      </Article>

      <Article>
        Todos os créditos por parte do Design do projeto e as instruções de como
        criar o mesmo são destinados à{' '}
        <a
          href='https://imagineschool.com.br/'
          target='_blank'
          rel='noreferrer'
        >
          Imagine School
        </a>
      </Article>

      <ImageGroup>
        <a
          href='https://imagineschool.com.br/'
          target='_blank'
          rel='noreferrer'
        >
          <Image
            src={imagineSchoolLogo}
            alt='Imagine School logo'
            height={120}
          />
        </a>

        <a
          href='https://github.com/cristian-sbardelotto'
          target='_blank'
          rel='noreferrer'
        >
          <CreatorImage src={creatorImage} alt='Creator Image' height={120} />
        </a>
      </ImageGroup>
    </Main>
  );
};


const Main = styled.main`
  ${Container};
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

const Article = styled.article`
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

const ImageGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-top: 5rem;

  img:hover {
    filter: brightness(0.9);
  }
`;

const CreatorImage = styled(Image)`
  border-radius: 50%;
`;

export default About;
