import axios from "axios";
const searchImages = async (x) => {
  const response = await axios.get(
    "https://api.unsplash.com/search/photos",

    {
      headers: {
        Authorization: "Client-ID Y0Bb58OZIUoEYNZDl60G9aK2RdpB6kdSUo5d8vHDxLs",
      },
      params: {
        query: x,
      },
    }
  );

  return response.data.results;
};
export default searchImages;
