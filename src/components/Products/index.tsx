import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
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
  __id: number;
  name: string;
  image: StaticImageData;
  price: string;
  formattedPrice: string;
  splitPrice: string;
  times: number | string;
}

interface ProductsProps {
  products: Product[];
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
              <Link href='/'>
                <Image
                  src={product.image}
                  alt='Product image'
                  width={230}
                  height={230}
                />
              </Link>

              <ProductName>{product.name}</ProductName>
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
