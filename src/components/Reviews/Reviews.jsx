import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import { HTTP_ERROR_MSG } from 'services/constants';
import { AvailableInfo, H2Autor, H2TitleReviews, LiReviev, UlReviews } from './Reviews.styled';

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
          <H2TitleReviews>Reviews</H2TitleReviews>
          <UlReviews>
            {reviews?.map(({ id, author, content }) => (
              <LiReviev key={id}>
                <H2Autor>Author: {author}</H2Autor>
                <p>{content}</p>
              </LiReviev>
            ))}
          </UlReviews>
        </div>
      )}
      {reviews.length < 1 && (
        <AvailableInfo>Unfortunately, there are no reviews available for this movie.</AvailableInfo>
      )}
      {error && <div>{error}</div>}
    </>
  );
};

export default Reviews;
