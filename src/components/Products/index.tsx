import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import {
  ProductContainer,
  ProductItem,
  ProductList,
  ProductName,
  ProductPrice,
  ProductSplitPrice,
  Title,
} from './styles';

interface Product {
  name: string;
}

interface ProductsProps {
  products: unknown[];
}

const Products = ({ products }: ProductsProps) => {
  return (
    <ProductContainer>
      <Title>
        <span>Des</span>taques
      </Title>

      <ProductList>
        <ProductItem>
          <Link href='/'>
            <Image src='' alt='asdasd' width={230} height={230} />
            <ProductName>Nome</ProductName>
            <ProductPrice>preco</ProductPrice>
            <ProductSplitPrice>preco parcelado</ProductSplitPrice>
          </Link>
        </ProductItem>
        <ProductItem>b</ProductItem>
        <ProductItem>c</ProductItem>
        <ProductItem>d</ProductItem>
        <ProductItem>e</ProductItem>
        <ProductItem>f</ProductItem>
        <ProductItem>g</ProductItem>
        <ProductItem>h</ProductItem>
      </ProductList>
    </ProductContainer>
  );
};

export default Products;
