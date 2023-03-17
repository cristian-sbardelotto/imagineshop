import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { MenuItem, MenuList, Navbar, StyledHeader } from './styles';

import logo from '../../../public/images/logo.png';
import shoppingCart from '../../../public/images/carrinho.jpg';

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Navbar>
          <Link href='/'>
            <Image
              src={logo}
              alt='Imagineshop Logo'
              width={200}
              height={100}
              priority
            />
          </Link>
          <MenuList>
            <MenuItem>
              <Link href='/'>Home</Link>
            </MenuItem>

            <MenuItem>
              <Link href='/about'>Sobre</Link>
            </MenuItem>

            <MenuItem>
              <Link href='/shopping-cart'>
                <Image
                  src={shoppingCart}
                  alt='Shopping Cart Icon'
                  width={52}
                  height={52}
                />
              </Link>
            </MenuItem>
          </MenuList>
        </Navbar>
      </StyledHeader>
    </>
  );
};

export default Header;
