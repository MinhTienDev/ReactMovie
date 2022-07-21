import _ from "lodash";
import React, { useEffect, useState } from "react";
import { movieService } from "../../services/movieService";
import MovieCarousel from "./MovieCarousel/MovieCarousel";
import "./homePage.css";
import MovieTabs from "./MovieTabs/MovieTabs";
import MovieBanner from "./MovieBanner/MovieBanner";
import Footer from "../../components/Footer";
export default function HomePage() {
  const [movieList, setMovieList] = useState([]);
  const [movieBanner, setMovieBanner] = useState([]);
  useEffect(() => {
    let fetchMoviesList = async () => {
      let result = await movieService.getMovieList();

      let chunkedList = _.chunk(result.data.content, 8);
      setMovieList(chunkedList);
    };

    fetchMoviesList();
  }, []);
  useEffect(() => {
    let fetchMovieBanner = async () => {
      let result = await movieService.getBannerMovie();

      setMovieBanner(result.data.content);
    };
    fetchMovieBanner();
  }, []);

  return (
    <div>
      <div id="carousel__banner" className="w-full">
        <MovieBanner movieBanner={movieBanner} />
      </div>
      <div id="corousel_homepage" className="container mx-auto">
        <MovieCarousel chunkedList={movieList} />
      </div>
      <div className="container  mt-10 mx-auto">
        <MovieTabs />
      </div>
      <div className=" mt-10">
        <Footer />
      </div>
    </div>
  );
}
