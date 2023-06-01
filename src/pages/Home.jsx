import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import { getTrending } from 'services/api';
import { HTTP_ERROR_MSG } from 'services/constants';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const fetchTrendingMovies = async () => {
      setLoading(true);
      try {
        const data = await getTrending({
          signal: controller.signal,
        });
        setMovies(data.results);
      } catch (error) {
        setError(HTTP_ERROR_MSG);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingMovies();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <main>
      {loading && <Loader />}
      <h1>Trending today</h1>
      <MovieList movies={movies} />
      {error && <div>{error}</div>}
    </main>
  );
};

export default Home;
