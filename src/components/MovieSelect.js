
export default function MovieSelect ({ movies }) {
  return (
    <div>
      <label>Select a Movie:
      <div>
      <select>
        {movies.map(movie => <option key={movie.id}>{movie.name}</option>)}
      </select>
      </div>
      </label>
    </div>
  )
}
