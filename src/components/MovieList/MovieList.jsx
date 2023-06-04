import { nanoid } from 'nanoid';
import { useLocation } from 'react-router-dom';
import normalizeMoviesData from 'services/normalizedDataMovies';
import PropTypes from 'prop-types';
import { DivTitle, ImgContainer, LiGridItem, MovieLink, MovieTitle, UlGrid } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  const data = normalizeMoviesData(movies);

  return (
    <UlGrid>
      {data.map(({ id, movieTitle, poster }) => (
        <LiGridItem key={nanoid()}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            <ImgContainer>
              <img src={poster} alt={movieTitle} />
              <DivTitle className="js-overlay">
                <MovieTitle>{movieTitle}</MovieTitle>
              </DivTitle>
            </ImgContainer>
          </MovieLink>
        </LiGridItem>
      ))}
    </UlGrid>
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
