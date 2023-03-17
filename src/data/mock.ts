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
    description:
      'O Galaxy J8 oferece uma ótima reprodução de cores e contrastes profundos, para que o usuário tenha uma experiência única de visualização, além de contar com fotos nítidas ao dia e a noite, e um leitor de impressão digital, que permite fácil acesso a sites e aplicativos para execução de multitarefas com perfeição.',
  },
  {
    __id: 2,
    name: 'Smart TV LED 55" Samsung Ultra HD 4k 55NU7100',
    image: image2,
    price: ' 2944.99',
    formattedPrice: '32.5',
    splitPrice: '129.9',
    times: '10',
    description:
      'O Smart TV LED 55" Samsung Ultra HD 4K é uma excelente escolha para quem procura uma TV de alta qualidade com recursos inteligentes. Assim, este modelo oferece uma imagem de qualidade 4K, com quatro vezes mais detalhes do que uma TV Full HD padrão. Além disso, a tecnologia LED proporciona uma melhor reprodução de cores e um contraste mais nítido.',
  },
  {
    __id: 3,
    name: 'Notebook Samsung Expert VF3BR  Intel Core i7 8GB',
    image: image3,
    price: '2699.99',
    formattedPrice: '32.5',
    splitPrice: '299.99',
    times: '10',
    description:
      'O Samsung Expert é o notebook voltado para pessoas dinâmicas que buscam um computador que ofereça alto desempenho aliado a um design moderno e elegante, e que conta com avançadas características de segurança. A placa de vídeo NVIDIA GeForce oferece alto desempenho gráfico para aplicações como jogos e softwares 3D.',
  },
  {
    __id: 4,
    name: 'Lava E Seca Samsung 11kg Com  12 Programas De Lavagem',
    image: image4,
    price: '2949.9',
    formattedPrice: '32.5',
    splitPrice: ' 294.99',
    times: '10',
    description:
      'A Lava e Seca Samsung 11kg com 12 programas de lavagem é uma opção conveniente para quem precisa de uma máquina que combine as funções de lavar e secar roupas em um único equipamento. Com capacidade de lavagem de até 11kg, essa máquina é ideal para famílias de tamanho médio.',
  },
  {
    __id: 5,
    name: 'iPhone 7 Plus 32GB Ouro Rosa Tela Retina HD 5,5"',
    image: image5,
    price: '3299',
    formattedPrice: '634',
    splitPrice: '329.9',
    times: '10',
    description:
      'O iPhone 7 Plus 32GB Ouro Rosa é um smartphone de alta qualidade da Apple, que oferece uma tela Retina HD de 5,5 polegadas, proporcionando uma excelente experiência de visualização. Com uma resolução de 1920x1080 pixels, a tela oferece uma imagem nítida e vibrante, com excelente reprodução de cores.',
  },
  {
    __id: 6,
    name: 'Liquidificador Philips Walita Problend Preto RI2134/9',
    image: image6,
    price: '139.99',
    formattedPrice: '32.5',
    splitPrice: '23.33',
    times: '6',
    description:
      'O Liquidificador Philips Walita Problend Preto RI2134/9 é um equipamento de alta qualidade para preparar bebidas, sopas, cremes e outros alimentos. Com motor potente de 600 watts e lâminas ProBlend 4, ele é capaz de triturar e misturar alimentos com eficiência, garantindo uma textura suave e homogênea.',
  },
  {
    __id: 7,
    name: 'Monitor Gamer LED 49" Curvo  1ms 144hz Double Full HD',
    image: image7,
    price: '5999.99',
    formattedPrice: '32.5',
    splitPrice: '599.99',
    times: '10',
    description:
      'O Monitor Gamer LED 49" Curvo 1ms 144hz Double Full HD é uma excelente escolha para quem busca um monitor de alta qualidade para jogos e outras atividades que exigem alta performance. Com uma tela curva de 49 polegadas, ele oferece uma experiência imersiva e envolvente, proporcionando maior conforto visual durante longas sessões de uso.',
  },
  {
    __id: 8,
    name: 'PC Gamer EasyPC FPS Intel Core i3 8GB 1TB',
    image: image8,
    price: '1899',
    formattedPrice: '32.5',
    splitPrice: '271.28',
    times: '7',
    description:
      'O PC Gamer EasyPC FPS Intel Core i3 8GB 1TB é uma excelente opção para quem deseja um computador com alto desempenho para jogos. Equipado com processador Intel Core i3, 8GB de memória RAM e 1TB de armazenamento, ele oferece excelente desempenho em jogos e outras atividades que exigem um processamento mais intenso.',
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
