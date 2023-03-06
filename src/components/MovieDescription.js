import { useMovieContext } from "../context/MovieContext";

export default function MovieDescription({movies}) {
  const { movieId } = useMovieContext();

  const movieData = movies.find(movie => movie.id === movieId);

  return (
    <div className="movie-info">
      {
        <p className="movie-description">Description: {movieData.description}</p>
      }
    </div>
  );
}
