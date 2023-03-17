import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import { IProduct } from '@/types';

import {
  ProductContainer,
  ProductItem,
  ProductList,
  ProductName,
  ProductPrice,
  ProductSplitPrice,
  Title,
} from './styles';

interface ProductsProps {
  products: IProduct[];
}

const Products = ({ products }: ProductsProps) => {
  return (
    <ProductContainer>
      <Title>
        <span>Des</span>taques
      </Title>

      <ProductList>
        {products &&
          products.map(product => (
            <ProductItem key={product.__id}>
              <Link href={`/products/${product.__id}`}>
                <Image
                  src={product.image}
                  alt='Product image'
                  width={230}
                  height={230}
                />
                <ProductName>{product.name}</ProductName>
              </Link>

              <ProductPrice>{product.formattedPrice}</ProductPrice>
              <ProductSplitPrice>
                {product.times} de R$ {product.splitPrice} sem juros
              </ProductSplitPrice>
            </ProductItem>
          ))}
      </ProductList>
    </ProductContainer>
  );
};

export default Products;
