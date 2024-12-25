import React from 'react';
import SearchInput from "./SearchInput";
import ImageList from "./ImageList";
import axios from "axios";

const App = () => {

  const [images, setImages] = React.useState([]);

  // We pass this callback to the child SearchInput.jsx
  const onSearchSubmit = async (entry) => {
    const url = 'https://pixabay.com/api/';
    const key = '20097528-ae2b1e12b09b18859fecab28c';
    const imageType = 'photo';
    const response = await axios.get(`${url}?key=${key}&q=${entry}&image_type=${imageType}`)
    setImages(response.data);
  }

  return (
    <div className={'ui container'} style={{marginTop:'30px'}}>
      <SearchInput onSearchSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;