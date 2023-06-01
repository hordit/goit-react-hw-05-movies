import noPoster from '../image/no-poster.jpg';
import { POSTER_URL } from './constants';

const normalizeMoviesData = (data) => {
  return data.map(({
    id,
    title,
    original_title,
    name,
    original_name,
    poster_path
  }) => {
    const movieTitle = name || title || original_name || original_title;
    const poster = poster_path ? `${POSTER_URL}${poster_path}` : noPoster;

    return {
      id,
      movieTitle,
      poster
    };
  });
};

export default normalizeMoviesData;
