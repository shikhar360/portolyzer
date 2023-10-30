/* eslint-disable @next/next/no-img-element */
"use client"
import { useState } from 'react';
import Image from 'next/image';

const ImageFallback = ({ src, fallbackSrc, ...props } : any) => {
  const [hasError, setHasError] = useState(false);

  return (
    <img
      {...props}
      src={hasError ? "https://media.npr.org/assets/img/2021/03/05/nyancat-still-6cda3c8e01b3b5db14f6db31ce262161985fb564.png" : src}
      onError={() => !hasError && setHasError(true)}
      // onerror="this.onerror=null;this.src='imagefound.gif';"
      alt='img'
    />
  );
};

export default ImageFallback