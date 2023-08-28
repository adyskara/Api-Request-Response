function ImageItem({ image }) {
  console.log(image);
  return (
    <div>
      <img
        className="ImageListCSS"
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}

export default ImageItem;
