import { createContext, useContext, useState } from "react";

export const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export default function MovieContextProvider(props) {
  const [ movieId, setMovie ] = useState('1');

  return (
    <MovieContext.Provider
      value={{
        movieId,
        setMovie
      }}
    >
      {props.children}
    </MovieContext.Provider>
  )
}
