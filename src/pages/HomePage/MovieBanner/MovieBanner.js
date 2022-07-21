import { Carousel } from "antd";
import "../HomePage";
const MovieBanner = ({ movieBanner }) => {
  const onChange = (currentSlide) => {};

  return (
    <Carousel afterChange={onChange} autoplay dots={true}>
      {movieBanner.map((movies) => {
        return (
          <>
            <img className="w-full" src={movies.hinhAnh} alt="" />
          </>
        );
      })}
    </Carousel>
  );
};

export default MovieBanner;
