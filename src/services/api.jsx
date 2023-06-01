import axios from 'axios';
import {
  BASE_URL,
  API_KEY,
  TRENDING_ENDPOINT,
  SEARCH_MOVIES_ENDPOINT,
  MOVIE_ENDPOINT,
} from './constants';

axios.defaults.baseURL = BASE_URL;

export const getTrending = async () => {
  const response = await axios.get(TRENDING_ENDPOINT, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const getMoviesByQuery = async (query, page) => {
  const response = await axios.get(SEARCH_MOVIES_ENDPOINT, {
    params: {
      api_key: API_KEY,
      query: query,
      page: page,
    },
  });
  return response.data;
};

export const getMovieDetails = async (movieId, details) => {
  const response = await axios.get(`${MOVIE_ENDPOINT}/${movieId}${details}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};
