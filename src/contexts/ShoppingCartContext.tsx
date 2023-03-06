import { IProduct } from '@/types';
import React, { createContext, PropsWithChildren } from 'react';

interface ShoppingCart {
  addProduct: (product: IProduct) => void;
  getProducts: () => IProduct[];
}

export const ShoppingCartContext = createContext({} as ShoppingCart);

const ShoppingCartProvider = ({ children }: PropsWithChildren) => {
  const isBrowser = typeof window !== 'undefined';

  const SESSION_STORAGE = 'products';

  const addProduct = (product: IProduct) => {
    const products = getProducts();
    products.push(product);

    if (isBrowser) {
      sessionStorage.setItem(SESSION_STORAGE, JSON.stringify(products));
    }
  };

  const getProducts = () => {
    if (isBrowser) {
      const products = sessionStorage.getItem(SESSION_STORAGE);
      return products ? JSON.parse(products) : [];
    }

    return [];
  };

  return (
    <ShoppingCartContext.Provider value={{ addProduct, getProducts }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
