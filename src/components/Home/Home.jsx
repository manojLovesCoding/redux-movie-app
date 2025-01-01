import { useEffect } from "react"
import MovieListing from "../MovieListing/MovieListing.jsx"
import movieApi from "../../common/apis/movieApi.js";
import { APIKey } from "../../common/apis/MovieApiKey.js";
const Home = () => {
  useEffect(() => {
    const movieText = "Harry";
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Err :",err);
        });
      console.log("The response from API ",response);
    };
    fetchMovies()
  },[]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing/>
    </div>
  )
}

export default Home