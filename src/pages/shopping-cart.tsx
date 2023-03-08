import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';

import styled from 'styled-components';

import { ShoppingCartContext } from '@/contexts/ShoppingCartContext';
import { IProduct } from '@/types';
import { Container } from '@/styles/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const ShoppingCart = () => {
  const { getProducts, deleteProduct, getTotalValue, getTotalProducts, getShippingValue } =
    useContext(ShoppingCartContext);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [refresh, setRefresh] = useState<number>(0);

  useEffect(() => {
    const values = getProducts();
    setProducts(values);
  }, [refresh]);

  const isPlural = () => {
    // checks if the products in the shopping cart are in the plural
    if (products.length > 1) {
      return 'produtos';
    }

    return 'produto';
  };

  const handleDeleteProduct = (id: number) => {
    deleteProduct(id);
    setRefresh(oldValue => oldValue + 1);
  };

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
                  <button onClick={() => handleDeleteProduct(product.__id)}>
                    <DeleteIcon icon={faX} />
                  </button>
                </ButtonContainer>

                <Product>
                  <div>
                    <Image
                      src={product.image}
                      alt='Product Image'
                      width={180}
                      height={180}
                    />
                  </div>

                  <ProductName>{product.name}</ProductName>

                  <ProductPrice>{product.formattedPrice}</ProductPrice>
                </Product>

                <Separator />
              </div>
            ))}
        </ShoppingCartProducts>

        <section>
          <ShoppingCartPayment>
            <PaymentTitle>1. Resumo do pedido</PaymentTitle>
            <PaymentValue>
              <span>
                {products.length} {isPlural()}
              </span>{' '}
              <span>{getTotalProducts()}</span>
            </PaymentValue>

            <PaymentShipping>
              <span>Frete</span> <span>{getShippingValue()}</span>
            </PaymentShipping>

            <PaymentTotal>
              <span>Total</span> <span>{getTotalValue()}</span>
            </PaymentTotal>

            <Separator />

            <LoginTitle></LoginTitle>

            <InputGroup>
              <span>E-MAIL:</span>
              <input type='text' />
            </InputGroup>

            <InputGroup>
              <span>SENHA</span>
              <input type='password' />
            </InputGroup>

            <Button>Continuar</Button>
          </ShoppingCartPayment>
        </section>
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
  padding: 0;
  margin: 0;

  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
`;

const ProductPrice = styled.p`
  padding: 0;
  margin: 0;

  place-self: start end;

  font-size: 1rem;
  font-weight: 700;
`;

const ShoppingCartPayment = styled.div`
  padding: 1rem;

  background-color: #f0f1ef;
  border-radius: 4px;
`;

const PaymentTitle = styled.p`
  margin: 0;

  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
`;

const PaymentValue = styled.div`
  margin: 5rem 0 0 0;
  display: flex;
  justify-content: space-between;

  font-size: 1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.secondary};

  span {
    display: block;
  }
`;

const PaymentShipping = styled.div`
  margin: 1.5rem 0 0 0;
  display: flex;
  justify-content: space-between;

  font-size: 1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.secondary};

  span {
    display: block;
  }
`;

const PaymentTotal = styled.div`
  margin: 3.125rem 0 5rem 0;
  display: flex;
  justify-content: space-between;

  font-size: 1.125rem;
  font-weight: 700;
  text-transform: uppercase;

  span {
    display: block;
  }
`;

const LoginTitle = styled.p`
  margin: 2rem 0;

  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
`;

const InputGroup = styled.div`
  margin-bottom: 1.3rem;

  span {
    margin-bottom: 0.625rem;
    display: block;

    text-transform: uppercase;
  }

  input {
    width: 100%;
    height: 1.25rem;

    border: unset;
  }
`;

const Button = styled.button`
  display: block;
  margin: 0 auto;
  width: 240px;
  height: 60px;

  border: unset;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-weight: 700;
  font-size: 1.5rem;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;

  cursor: pointer;

  &:hover {
    filter: brightness(0.85);
  }
`;

export default ShoppingCart;
