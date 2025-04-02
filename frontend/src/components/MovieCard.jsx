import '../Css/MovieCard.css'
import { useMovieContext } from '../context/MovieContext'

function MovieCard({movie}) {

    const {isFavorite, addToFavorite, removeFromFavorite} = useMovieContext()
    const favorite = isFavorite(movie.id)

    function onfavouriteClick(e) {
        e.preventDefault()
        if(favorite) removeFromFavorite(movie.id)
        else addToFavorite(movie.id)
    }
    return( 
        <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie.title"/>
            <div className="movie-overlay">
                <button className={`favouirte-btn ${favorite ? "active" : ""}`} onClick={{onfavouriteClick}}>
                🤍
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h1>{movie.title}</h1>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
    )
    
}

export default MovieCard