import { useParams } from 'react-router-dom';
import noPoster from '../../image/no-poster.jpg';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'services/api';
import { HTTP_ERROR_MSG, POSTER_URL } from 'services/constants';
import Loader from 'components/Loader/Loader';
import PropTypes from 'prop-types';

const Cast = () => {
  const { movieId } = useParams();
  const [loging, setLoging] = useState(false);
  const [error, setError] = useState('');
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      if (!movieId) return;
      setLoging(true);
      try {
        const data = await getMovieDetails(movieId, '/credits');
        setCast(data.cast);
      } catch (error) {
        setError(HTTP_ERROR_MSG);
      } finally {
        setLoging(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {loging && <Loader />}
      {cast?.length > 0 && (
        <div>
          <h2>Cast</h2>
          <ul>
            {cast?.map(castData => {
              const { credit_id, profile_path, name, character } = castData;
              const poster = profile_path
                ? `${POSTER_URL}${profile_path}`
                : noPoster;
              return (
                <li key={credit_id}>
                  <img src={poster} alt={name} />
                  <p>{name}</p>
                  <p>{character}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {cast.length < 1 && (
        <p>Apologies, but no cast information is available.</p>
      )}
      {error && <div>{error}</div>}
    </>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string,
};

export default Cast;
