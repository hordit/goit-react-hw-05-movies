import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import { HTTP_ERROR_MSG } from 'services/constants';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loging, setLoging] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      if (!movieId) return;
      setLoging(true);
      try {
        const data = await getMovieDetails(movieId, '/reviews');
        setReviews(data.results);
      } catch (error) {
        setError(HTTP_ERROR_MSG);
      } finally {
        setLoging(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <>
      {loging && <Loader />}
      {reviews.length > 0 && (
        <div>
          <h2>Reviews</h2>
          <ul>
            {reviews?.map(({ id, author, content }) => (
              <li key={id}>
                <h2>Author: {author}</h2>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {reviews.length < 1 && (
        <p>Unfortunately, there are no reviews available for this movie.</p>
      )}
      {error && <div>{error}</div>}
    </>
  );
};

export default Reviews;
