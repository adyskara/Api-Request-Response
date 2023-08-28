import "./App.css";
import SearchHeader from "./SearchHeader";
import searchImages from "./Api.jsx";
import { useState } from "react";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (x) => {
    const result = await searchImages(x);
    setImages(result);
  };
  return (
    <div>
      <SearchHeader search={handleSubmit} />
      <ImageList imagesPlaceHolder={images} />
    </div>
  );
}

export default App;
