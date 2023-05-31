import { Link, useLocation } from 'react-router-dom';
import { normalizeMoviesData } from 'services/normalizedDataMovies';

export const MovieList = ({ movies }) => {
 const location = useLocation();
 const data = normalizeMoviesData(movies);

  return (
        <ul>
          {data.map(({ id, movieTitle, poster }) => (
            <li key={id}>
              <Link to={`movies/${id}`} state={{from: location}}>
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
