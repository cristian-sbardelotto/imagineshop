import React, { useContext, useEffect } from 'react';

import { ShoppingCartContext } from '@/contexts/ShoppingCartContext';

const ShoppingCart = () => {
  const { getProducts } = useContext(ShoppingCartContext);

  useEffect(() => {
    const products = getProducts();
    console.log(products);
  }, []);

  return <div>ShoppingCart</div>;
};

export default ShoppingCart;
