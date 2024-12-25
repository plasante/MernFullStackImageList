import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const ImageList = (props) => {
  const images = props.images;

  return (
    <Grid columns={3}>
      {
        images.map((image) => (
          <Grid.Column key={image.id}>
            <Image src={image.webformatURL} alt={image.description} style={{height: "200px"}}/>
          </Grid.Column>
        ))
      }
    </Grid>
  );
};

export default ImageList;