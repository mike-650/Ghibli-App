import MovieSelect from "./components/MovieSelect";
import movies from "./tempData/moviedata.json";
import { useMovieContext } from "./context/MovieContext";

function App() {
  const { movie, setMovie } = useMovieContext();
  return (
    <div >
    <h1 className="home-title">Ghibli App</h1>
    <MovieSelect movies={movies}/>
    </div>
  );
}

export default App;
