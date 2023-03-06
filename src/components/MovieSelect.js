import { useMovieContext } from "../context/MovieContext"


export default function MovieSelect ({ movies }) {
  const { movieId, setMovie } = useMovieContext();

  function selectedMovieURL(movies, movieId) {
    return movies.find(movie => movie.id === movieId).url
  }

  return (
    <>
      <div className="movie-select">
      <label id="movie-label">Select a Movie:
      <div>
      <select
        value={movieId}
        onChange={(e) => setMovie(e.target.value)}
      >
        {movies.map(movie => <option key={movie.id} value={movie.id}>{movie.name}</option>)}
      </select>
      </div>
      </label>
      </div>
      {<div className="movie-class" style={{backgroundImage:`url(${selectedMovieURL(movies, movieId)})`}}></div>}
    </>
  )
}
