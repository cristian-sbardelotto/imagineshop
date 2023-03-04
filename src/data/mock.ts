import image1 from '../../public/images/image1.png';
import image2 from '../../public/images/image2.png';
import image3 from '../../public/images/image3.png';
import image4 from '../../public/images/image4.png';
import image5 from '../../public/images/image5.png';
import image6 from '../../public/images/image6.png';
import image7 from '../../public/images/image7.png';
import image8 from '../../public/images/image8.png';

export const productsList = [
  {
    __id: 1,
    name: 'Smartphone Samsung Galaxy J8 64GB Dual Chip Android 8.0',
    image: image1,
    price: '1299',
    formattedPrice: '32.5',
    splitPrice: '129.9',
    times: '10',
  },
  {
    __id: 2,
    name: 'Smart TV LED 55" Samsung Ultra HD 4k 55NU7100',
    image: image2,
    price: ' 2944.99',
    formattedPrice: '32.5',
    splitPrice: '129.9',
    times: '10',
  },
  {
    __id: 3,
    name: 'Notebook Samsung Expert VF3BR  Intel Core i7 8GB',
    image: image3,
    price: '2699.99',
    formattedPrice: '32.5',
    splitPrice: '299.99',
    times: '10',
  },
  {
    __id: 4,
    name: 'Lava E Seca Samsung 11kg Com  12 Programas De Lavagem',
    image: image4,
    price: '2949.9',
    formattedPrice: '32.5',
    splitPrice: ' 294.99',
    times: '10',
  },
  {
    __id: 5,
    name: 'iPhone 7 Plus 32GB Ouro Rosa Tela Retina HD 5,5"',
    image: image5,
    price: '3299',
    formattedPrice: '634',
    splitPrice: '329.9',
    times: '10',
  },
  {
    __id: 6,
    name: 'Liquidificador Philips Walita Problend Preto RI2134/9',
    image: image6,
    price: '139.99',
    formattedPrice: '32.5',
    splitPrice: '23.33',
    times: '6',
  },
  {
    __id: 7,
    name: 'Monitor Gamer LED 49" Curvo  1ms 144hz Double Full HD',
    image: image7,
    price: '5999.99',
    formattedPrice: '32.5',
    splitPrice: '599.99',
    times: '10',
  },
  {
    __id: 8,
    name: 'PC Gamer EasyPC FPS Intel Core i3 8GB 1TB',
    image: image8,
    price: '1899',
    formattedPrice: '32.5',
    splitPrice: '271.28',
    times: '7',
  },
];

// Formatting the data
productsList.forEach(product => {
  product.formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(product.price));

  product.splitPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(product.price) / 10);

  product.times = `${product.times}x`;
});
