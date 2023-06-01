import { useState, useRef, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import { HTTP_ERROR_MSG } from 'services/constants';
import BackLink from 'components/BackLink/BackLink';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import Loader from 'components/Loader/Loader';
import DetailsOfMovie from 'components/DetailsOfMovie/DetailsOfMovie';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location?.state?.from ?? '/');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const data = await getMovieDetails(movieId, '');
        setMovie(data);
      } catch (error) {
        setError(HTTP_ERROR_MSG);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <section>
      {loading && <Loader />}
      <div>
        <BackLink to={backLinkRef.current}>
          <HiArrowNarrowLeft size={20} />
          Go back
        </BackLink>
        {movie && (
          <>
            <DetailsOfMovie {...movie} />
            <AdditionalInfo state={{ from: location }} />
          </>
        )}
        {error && <div>{error}</div>}
      </div>
    </section>
  );
};

export default MovieDetails;
