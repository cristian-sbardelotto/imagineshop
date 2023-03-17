import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { productsList } from '@/data/mock';

import styled from 'styled-components';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Banner from '@/components/Banner';
import bannerImage from '../../../public/images/BANNER 02.png';
import { Container } from '@/styles/utils';

import { IProduct } from '@/types';

import { ShoppingCartContext } from '@/contexts/ShoppingCartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const ProductId = () => {
  const router = useRouter();
  const productId = Number(router.query.productId);

  if (isNaN(productId)) {
    return;
  }

  const productData = productsList[productId - 1];

  const { addProduct } = useContext(ShoppingCartContext);

  const addProductInShoppingCart = (product: IProduct) => {
    toast.success('Produto adicionado no carrinho!', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    addProduct(product);
  };

  return (
    <>
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

            <Button onClick={() => addProductInShoppingCart(productData)}>
              <div>
                <FontAwesomeIcon icon={faCartShopping} size={'xl'} />
                Adicionar ao carrinho
              </div>
            </Button>

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
      <ToastContainer />
    </>
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

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

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
