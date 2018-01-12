import React from 'react';

const Image = props => {
  return(
    <li className="image-wrap">
      <img scr={props.url} alt="" />
    </li>
  );
}

export default Image;
