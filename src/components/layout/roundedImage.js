import React, { useState } from 'react';

/**
 * Handle rounded avatar
 * @param {Object} props
 */
function RoundedImage(props) {
  const { src, alt, className, imageClass, ...rest } = props;

  const expandedClassName = (className || '') + ' rounded-image-container';

  const [imgClass, setImgClass] = useState('');

  const onImageLoaded = (e) => {
    let extendImageClass = '';
    if (imageClass) {
      extendImageClass = imageClass;
    } else {
      extendImageClass = '';
    }
    let img = e.target;
    if (img.width > img.height) {
      setImgClass('pro-width ' + extendImageClass);
    }
    if (img.height > img.width) {
      setImgClass('pro-height ' + extendImageClass);
    }
  };

  return (
    <div {...rest} className={expandedClassName}>
      <img src={src} alt={alt} onLoad={onImageLoaded} className={imgClass} />
    </div>
  );
}

export default RoundedImage;
