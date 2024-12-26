import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const ImageList = (props) => {
  const images = props.images;

  return (
    images && images.length > 0 ? (
      <Grid columns={3}>
        {
          images.map((image) => (
            <Grid.Column key={image.id} mobile={16} tablet={8} computer={4}>
              <Image src={image.webformatURL} alt={image.description} style={{height: "200px"}}/>
            </Grid.Column>
          ))
        }
      </Grid>
    ) : (
      <span>No images to show</span>
    )
  )
};

export default ImageList;