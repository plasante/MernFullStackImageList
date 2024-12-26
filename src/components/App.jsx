import React, {useState} from 'react';
import SearchInput from "./SearchInput";
import ImageList from "./ImageList";
import axios from "axios";
import 'semantic-ui-css/semantic.min.css';
import '../index.css';

const App = () => {

  const [images, setImages] = useState([]);

  const onSearchSubmit = async (entry) => {
    if (entry) {
      const url = 'https://pixabay.com/api/';
      const key = '20097528-ae2b1e12b09b18859fecab28c';
      const imageType = 'photo';
      const response = await axios.get(`${url}?key=${key}&q=${entry}&image_type=${imageType}`)
      setImages(response.data.hits);
    } else {
      setImages([])
    }
  }


  return (
    <div className={'ui container custom-container'} style={{marginTop:'30px'}}>
      <SearchInput onSearchSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;