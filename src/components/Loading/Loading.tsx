import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../../images/lottie/animation_lnedqce0.json';
const Loading = () => {
  return (
    <main className='w-full h-full flex justify-center align-middle'>
      <Lottie animationData={loadingAnimation} loop />
    </main>
  );
};

export default Loading;