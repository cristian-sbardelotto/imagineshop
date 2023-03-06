import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { productsList } from '@/data/mock';

import styled from 'styled-components';

import Banner from '@/components/Banner';
import bannerImage from '../../../public/images/BANNER 02.png';
import { Container } from '@/styles/utils';

import { IProduct } from '@/types';

import { ShoppingCartContext } from '@/contexts/ShoppingCartContext';
import Link from 'next/link';

const ProductId = () => {
  const router = useRouter();
  const productId = Number(router.query.productId);

  if (isNaN(productId)) {
    return;
  }

  const productData = productsList[productId - 1];

  const { addProduct } = useContext(ShoppingCartContext);

  const addProductInShoppingCart = (product: IProduct) => {
    addProduct(product);
  };

  return (
    <ProductContainer>
      <Banner image={bannerImage} width={1140} height={145} />
      <ProductDetail>
        <ImageContainer>
          <Image
            src={productData.image}
            alt='Product Image'
            width={200}
            height={200}
          />
        </ImageContainer>

        <div>
          <ProductName>{productData.name}</ProductName>

          <ProductPrice>{productData.formattedPrice}</ProductPrice>

          <ProductSplitPrice>
            {productData.times} de {productData.splitPrice}
          </ProductSplitPrice>

          <Link href='/shopping-cart' style={{ textDecoration: 'none' }}>
            <Button onClick={() => addProductInShoppingCart(productData)}>
              Adicionar ao carrinho
            </Button>
          </Link>

          <ProductDescription>{productData.description}</ProductDescription>
        </div>

        <SummaryTitle>
          <span>Inf</span>ormações do Produto
        </SummaryTitle>
      </ProductDetail>

      <div>
        {productData.description}

        <p>Imagens Meramente Ilustrativas.</p>

        <p>
          Todas as Informações divulgadas são de responsabilidade do
          Fabricante/Fornecedor. Verifique com os fabricantes do produto e de
          seus componentes eventuais limitações à utilização de todos os
          recursos e funcionalidades.
        </p>
      </div>
    </ProductContainer>
  );
};

const ProductContainer = styled.main`
  ${Container};
`;

const ProductDetail = styled.div`
  display: grid;
  grid-template-columns: 31.25rem auto;
  gap: 1rem;
  margin: 3.125rem 0;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 4px;
`;

const ProductName = styled.p`
  margin: 0;

  font-size: 1.875rem;
  font-weight: 700;
`;

const ProductPrice = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.125rem;
  font-weight: 700;

  margin: 2.8125rem 0 0 0;
`;

const ProductSplitPrice = styled.small`
  font-size: 1rem;
  color: #999;
`;

const Button = styled.button`
  display: block;

  width: 290px;
  height: 60px;
  margin: 2.25rem 0;

  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;

  border: unset;
  border-radius: 4px;

  cursor: pointer;

  &:hover {
    filter: brightness(0.85);
  }
`;

const ProductDescription = styled.small`
  font-size: 0.875rem;
`;

const SummaryTitle = styled.p`
  margin: 2.8rem 0 0 0;

  font-size: 1.875rem;
  font-weight: 700;

  span {
    font-size: 1.875rem;
    text-decoration: underline ${({ theme }) => theme.colors.primary};
  }
`;

export default ProductId;
