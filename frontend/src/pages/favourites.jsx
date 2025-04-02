import "../Css/Favorites.css"
import { useMovieContext } from "../context/MovieContext"
import MovieCard from "../components/MovieCard";


function Favorite() {

    const {favorites} = useMovieContext()

    if(favorites) {
        return <div>
            <h2>Your Favotites</h2>
        <div className="movies-grid">
        {favorites.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
      </div>
    }
    return <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to your favorite and they will appear here</p>
    </div>
    
}

export default Favorite