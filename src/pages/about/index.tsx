import React from 'react';

import { Article, CreatorImage, ImageGroup, Main, Title } from './styles';

import Image from 'next/image';
import imagineSchoolLogo from '../../../public/images/imagine-school-logo.png';
import creatorImage from '../../../public/images/creator-image.png';

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

export default About;
