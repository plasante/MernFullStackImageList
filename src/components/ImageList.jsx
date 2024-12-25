import React from 'react';

const ImageList = (props) => {

  const images = props.images.hits;

  return (
    <div>
      {images  ?
        (images.map((image) => (
          <img key={image.id} src={image.webformatURL} alt={image.description}/>))
        ) : (
          <p>No images available</p>
        )
      }
    </div>
  );
};

export default ImageList;