import { IMG_CDN_URL } from "../utils/Constants";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-[300px] pr-4">
      <img className="rounded-xl" alt="movie poster" src={IMG_CDN_URL+poster_path} />
    </div>
  );
};

export default MovieCard;
