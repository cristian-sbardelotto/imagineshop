import React from 'react';

import Banner from '@/components/Banner';
import bannerImage from '../../public/images/BANNER 01.png';

import { Main } from './styles';

const Home = () => {
  return (
    <Main>
      <Banner image={bannerImage} width={1140} height={325} />
    </Main>
  );
};

export default Home;
