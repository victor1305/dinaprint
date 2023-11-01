import React from 'react';

import {
  firstMainSwiper,
  secondMainSwiper,
  thirdMainSwiper
} from '@/lib/constants';

import { MainSwiperImages, MainSwiperText } from '@/components/atoms';

const MainSwiper: React.FC = () => (
  <div className="md:flex md:flex-wrap">
    <div className='md:w-1/2'>
      <MainSwiperText />
    </div>
    <div className='md:w-1/2'>
      <MainSwiperImages slides={firstMainSwiper} />
    </div>
    <div className='md:w-1/2'>
      <MainSwiperImages slides={secondMainSwiper} />
    </div>
    <div className='md:w-1/2'>
      <MainSwiperImages slides={thirdMainSwiper} />
    </div>
  </div>
);

export default MainSwiper;
