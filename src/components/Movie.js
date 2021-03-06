import React from "react";
import PropTypes from 'prop-types';
import {Link} from  "react-router-dom"
import "./Movie.css"

// Why is this work!!!!!
function Movie(movie) {
  return (
    <Link
      to = {{
        pathname: `/movie/${movie.id}`,
        state: {
          year: movie.year,
          title: movie.title,
          summary: movie.summary,
          poster: movie.poster,
          genres: movie.genres
        }
      }}
    >
      <div className="movie">
        <img src={movie.poster} alt={movie.title} title={movie.title}></img>
        <div className="movie__data">
          <h3 className="movie__title">{movie.title}</h3>
          <h5 className="movie__year">{movie.year}</h5>
          <ul className = "movie__genres"> {movie.genres.map((genre, index) => (
            <li key = {index} className = "genres__genre">{genre}</li>
          ))} </ul>  
          <p className="movie__summary">{movie.summary.slice(0, 140)}...</p>
          
        </div>
      </div>
    </Link>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;