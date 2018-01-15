import React from 'react';
import Image from './Image';
import NoImage from './NoImage';

const ImageList = props => {

  const results = props.data;
  let images;
  if (results.length > 0) {
    images = results.map(image =>
      <Image url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
      key={image.id} />
    );
  } else {
    images = <NoImage />;
  }

  return(
    <ul className="image-list">
      {images}
    </ul>
  );
}

export default ImageList;
