import React from 'react';

const OptimizedImage = ({
  src,
  alt,
  className = "",
  loading = "lazy",
  width,
  height,
  sizes,
  ...props
}) => {
  // Extract filename without extension to create WebP version
  const pngSrc = src.startsWith('/') ? src : `/${src}`;
  const webpSrc = pngSrc.replace(/\.png$/, '.webp');

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <source srcSet={pngSrc} type="image/png" />
      <img
        src={pngSrc}
        alt={alt}
        className={className}
        loading={loading}
        width={width}
        height={height}
        sizes={sizes}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;