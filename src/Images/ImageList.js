import React from 'react';
import Image from './Image';

const ImageList = props => {

  const results = props.data;
  let images = results.map(image =>
    <Image url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
    key={image.id} />
  );

  return(
    <ul className="image-list">
      {images}
    </ul>
  );
}

export default ImageList;
