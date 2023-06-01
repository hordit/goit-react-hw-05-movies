import { POSTER_URL } from 'services/constants';
import noPoster from '../../image/no-poster.jpg';
import PropTypes from 'prop-types';

const DetailsOfMovie = ({
  vote_average,
  title,
  overview,
  genres,
  poster_path,
  release_date,
  backdrop_path,
}) => {
  const releaseDate = new Date(release_date).getFullYear().toString();
  const score = Math.round(vote_average * 10);
  const poster = poster_path ? `${POSTER_URL}${poster_path}` : noPoster;
  const genredGenres = () => {
    return genres
      ? genres.map(({ name }) => name).join(', ')
      : 'No specific genre';
  };

  return (
    <>
      <div backdrop={backdrop_path}>

        <img src={poster} alt={title} />

        <div>
          <h1>
            {title} ({releaseDate})
          </h1>
          <p>User score: {score}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genredGenres()}</p>
        </div>

      </div>
    </>
  );
};

DetailsOfMovie.propTypes = {
  vote_average: PropTypes.number,
  title: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  backdrop_path: PropTypes.string,
};

export default DetailsOfMovie;