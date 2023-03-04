import React from 'react';

import Banner from '@/components/Banner';
import bannerImage from '../../public/images/BANNER 01.png';

import { Main } from './styles';
import Products from '@/components/Products';

import { productsList } from '@/data/mock';

const Home = () => {
  return (
    <Main>
      <Banner image={bannerImage} width={1140} height={325} />
      <Products products={productsList} />
    </Main>
  );
};

export default Home;
