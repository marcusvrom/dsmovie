import { Link } from "react-router-dom";
import { Movie } from "types/movie";
import MovieScore from "../MovieScore";
import './styles.css'

type Props = {
    movie: Movie;
}

function MovieCard( { movie } : Props ) {

    return (
        <div className="movie-card">
            <img draggable="false" className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore count={movie.count} score={movie.score} />
                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>
            </div>
        </div>
    );
}

export default MovieCard;