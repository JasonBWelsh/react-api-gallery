import React from 'react';

const Image = props => {
  return(
    <li className="image-wrap">
      <img src={props.url} alt={props.alt} />
    </li>
  );
}

export default Image;
