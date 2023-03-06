import MovieSelect from "./components/MovieSelect";
import movies from "./tempData/moviedata.json"
function App() {
  return (
    <>
    <h1>Ghibli App</h1>
    <MovieSelect movies={movies}/>
    </>
  );
}

export default App;
