import React from 'react';

import Banner from '@/components/Banner';
import bannerImage from '../../public/images/BANNER 01.png';

import Products from '@/components/Products';

import { productsList } from '@/data/mock';
import styled from 'styled-components';

const Home = () => {
  return (
    <Main>
      <Banner image={bannerImage} width={1140} height={325} />
      <Products products={productsList} />
    </Main>
  );
};

const Main = styled.div`
  min-height: 62vw;
`;

export default Home;
