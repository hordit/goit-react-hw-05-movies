import { nanoid } from 'nanoid';
import { Link, useLocation } from 'react-router-dom';
import normalizeMoviesData from 'services/normalizedDataMovies';
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
  const location = useLocation();
  const data = normalizeMoviesData(movies);

  return (
    <ul>
      {data.map(({ id, movieTitle, poster }) => (
        <li key={nanoid()}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <div>
              <img src={poster} alt={movieTitle} />
              <div>
                <h3>{movieTitle}</h3>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      movieTitle: PropTypes.string,
      poster: PropTypes.string,
    }),
  ).isRequired
};

export default MovieList;
