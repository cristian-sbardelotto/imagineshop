import { IProduct } from '@/types';
import React, { createContext, PropsWithChildren } from 'react';

interface ShoppingCart {
  addProduct: (product: IProduct) => void;
  getProducts: () => IProduct[];
  deleteProduct: (id: number) => void;
  getTotalValue: () => string;
  getTotalProducts: () => string;
  getShippingValue: () => string;
  deleteAllProducts: () => void;
}

export const ShoppingCartContext = createContext({} as ShoppingCart);

const ShoppingCartProvider = ({ children }: PropsWithChildren) => {
  const isBrowser = typeof window !== 'undefined';
  const SESSION_STORAGE = 'products';
  const ShippingValue = '100';

  const addProduct = (product: IProduct) => {
    const products = getProducts();

    products.push(product);

    if (isBrowser) {
      sessionStorage.setItem(SESSION_STORAGE, JSON.stringify(products));
    }
  };

  const getProducts = (): IProduct[] => {
    if (isBrowser) {
      const products = sessionStorage.getItem(SESSION_STORAGE);
      return products ? JSON.parse(products) : [];
    }

    return [];
  };

  const deleteProduct = (id: number): void => {
    const products = getProducts();
    const newProducts = products.filter(product => product.__id != id);
    console.log(newProducts);

    if (isBrowser) {
      sessionStorage.setItem(SESSION_STORAGE, JSON.stringify(newProducts));
    }
  };

  const deleteAllProducts = () => sessionStorage.removeItem(SESSION_STORAGE);

  const getTotalProducts = (): string => {
    const products = getProducts();
    const total = products.reduce((acc, cur) => Number(acc) + Number(cur.price), 0);
    return (new Intl.NumberFormat('pt-BR', { style: 'currency',currency: 'BRL', }).format(Number(total)));
  };

  const getTotalValue = (): string => {
    const products = getProducts();
    const total = products.reduce((acc, cur) => Number(acc) + Number(cur.price), 0);
    return (new Intl.NumberFormat('pt-BR', { style: 'currency',currency: 'BRL', }).format(Number(total + ShippingValue)));
  };

  const getShippingValue = (): string => {
    return (new Intl.NumberFormat('pt-BR', { style: 'currency',currency: 'BRL', }).format(Number(ShippingValue)));
  };


  return (
    <ShoppingCartContext.Provider
      value={{
        addProduct,
        getProducts,
        deleteProduct,
        getTotalValue,
        getTotalProducts,
        getShippingValue,
        deleteAllProducts
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
