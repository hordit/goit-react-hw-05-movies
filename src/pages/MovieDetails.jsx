import { useState, useRef, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import { HTTP_ERROR_MSG } from 'services/constants';
import BackLink from 'components/BackLink/BackLink';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import Loader from 'components/Loader/Loader';
import DetailsOfMovie from 'components/DetailsOfMovie/DetailsOfMovie';
import { Arrow, DivButtonBack } from 'components/BackLink/BackLink.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location?.state?.from ?? '/');

  useEffect(() => {
    const controller = new AbortController();
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const data = await getMovieDetails(movieId, '', controller.signal);

        setMovie(data);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(HTTP_ERROR_MSG);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();

    return () => controller.abort();
  }, [movieId]);

  return (
    <section>
      {loading && <Loader />}
      <div>
        <DivButtonBack>
          <BackLink to={backLinkRef.current}>
            <Arrow>
            <HiArrowNarrowLeft size={20} />
            GO BACK
            </Arrow>
          </BackLink>
        </DivButtonBack>
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
