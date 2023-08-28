import ImageItem from "./ImageItem";

function ImageList({ imagesPlaceHolder }) {
  return (
    <div className="ImageCSS">
      {imagesPlaceHolder.map((image, index) => {
        return <ImageItem key={index} image={image} />;
      })}
    </div>
  );
}

export default ImageList;
