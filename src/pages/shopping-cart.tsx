import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';

import styled from 'styled-components';

import { ShoppingCartContext } from '@/contexts/ShoppingCartContext';
import { IProduct } from '@/types';
import { Container } from '@/styles/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const ShoppingCart = () => {
  const { getProducts } = useContext(ShoppingCartContext);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const values = getProducts();
    setProducts(values);
  }, []);

  return products && products.length > 0 ? (
    <Main>
      <Title>Meu carrinho</Title>

      <SubTitle>Produtos</SubTitle>

      <ShoppingCartContainer>
        <ShoppingCartProducts>
          <Separator />

          {products &&
            products.map((product, index) => (
              <div key={index}>
                <ButtonContainer>
                  <button>
                    <DeleteIcon icon={faX} />
                  </button>
                </ButtonContainer>

                <Product>
                  <div>
                    <Image
                      src={product.image}
                      alt='Product Image'
                      width={200}
                      height={200}
                    />
                  </div>

                  <ProductName>{product.name}</ProductName>

                  <ProductPrice>{product.formattedPrice}</ProductPrice>
                </Product>

                <Separator />
              </div>
            ))}
        </ShoppingCartProducts>
      </ShoppingCartContainer>
    </Main>
  ) : (
    <Main>
      <Title>nao tem produto</Title>
    </Main>
  );
};

const Main = styled.main`
  ${Container};
`;

const Title = styled.p`
  margin: 5.625rem 0;

  font-size: 1.875rem;
  font-weight: 700;
`;

const SubTitle = styled.p`
  margin: 0 0 1rem 0;

  font-size: 1rem;
  font-weight: 700;
`;

const ShoppingCartContainer = styled.div`
  display: grid;
  grid-template-columns: 780px auto;
  gap: 1.5rem;

  min-height: 800px;
`;

const ShoppingCartProducts = styled.section``;

const Separator = styled.hr`
  border: 1px solid #c8c9c3;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  margin: 0.8rem 0;

  button {
    border: unset;
    background: unset;

    cursor: pointer;
  }
`;

const DeleteIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1rem;
`;

const Product = styled.div`
  display: grid;
  grid-template-columns: auto 350px auto;
`;

const ProductName = styled.p`
  padding: 1rem;

  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
`;

const ProductPrice = styled.p`
  padding: 1.125rem;
  margin-top: 1rem;

  place-self: start end;

  font-size: 1rem;
  font-weight: 700;
`;

export default ShoppingCart;
