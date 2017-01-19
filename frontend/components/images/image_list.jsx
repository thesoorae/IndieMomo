import React from 'react';

export const ImageList = (props) => {
    console.log("image list", props.images);
    const imageThumbnails = props.images.map((image, i) => (
      <div className="img-thumbnail-container"><img className="thumbnail" src={image.url} />
      <button className="clickable remove-image" onClick={props.removeImage(i)}>Remove</button></div>))
    return(
      <div className="img-list">{imageThumbnails}</div>

    );
  };
