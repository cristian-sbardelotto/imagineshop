import React from 'react';

import Image, { StaticImageData } from 'next/image';

import { BannerContainer } from './styles';

interface BannerProps {
  image: StaticImageData;
  width: number;
  height: number;
}

const Banner = ({ image , width, height }: BannerProps) => {
  return (
    <BannerContainer>
      <Image
        src={image}
        alt='Banner Image'
        width={width}
        height={height}
        priority={true}
      />
    </BannerContainer>
  );
};

export default Banner;
