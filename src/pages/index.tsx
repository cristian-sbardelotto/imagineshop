import React from 'react';

import Banner from '@/components/Banner';
import bannerImage from '../../public/images/BANNER 01.png';

import { Main } from './styles';
import Products from '@/components/Products';

import { productsList } from '@/data/mock';

productsList.forEach(product => {
  product.formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(product.price));

  product.splitPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(product.price) / 10);

  product.times = `${product.times}x`;
});

const Home = () => {
  return (
    <Main>
      <Banner image={bannerImage} width={1140} height={325} />
      <Products products={productsList} />
    </Main>
  );
};

export default Home;
