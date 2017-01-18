import React from 'react';

export const ImageList = (props) => {
    console.log("image list", props.images);
    const imageThumbnails = props.images.map(image => (<img className="thumbnail" src={image.url} />))
    return(
      <div className="img-list">{imageThumbnails}</div>

    );
  };
