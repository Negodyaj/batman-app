import { Movie } from "../../models/movie";
import "./MovieCard.scss";

type MovieCardProps = {
  secretNumber: number;
  movie: Movie;
};

export function MovieCard(props: MovieCardProps) {
  const movie = props.movie;

  return (
    <div className="movie-card">
      {props.secretNumber}
      <img src="${movie.imageUrl}" alt="" />
      <div className="card-content">
        <div className="movie-details">
          <div className="tags">{movie.tags.join(", ")}</div>
          <h2>{movie.name}</h2>
          <div className="rating">
            IMDB:<span>{movie.imdb}</span>
          </div>
          <div className="movie-about">{movie.description}</div>
        </div>
        <div className="movie-links">
          <a href="${movie.watchLink}" className="link-button small">
            Watch
          </a>
          <a
            href="${movie.detailsLink}"
            className="link-button small with-border"
          >
            Details
          </a>
        </div>
      </div>
    </div>
  );
}
