import { StaticImageData } from 'next/image';

export interface IProduct {
  __id: number;
  name: string;
  image: StaticImageData;
  price: string;
  formattedPrice: string;
  splitPrice: string;
  times: number | string;
  description: string;
}
