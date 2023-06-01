import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import SearchBar from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/api';
import { HTTP_ERROR_MSG } from 'services/constants';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showBegin, setShowBegin] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery) return;

    const fetchMovies = async () => {
      setLoading(true);

      try {
        const { results, total_results } = await getMoviesByQuery(
          searchQuery,
          page
        );

        if (!results.length) {
          setShowBegin(false);
          return toast.error('No movies found. Please enter another keyword');
        }

        setMovies(prevResults => [...prevResults, ...results]);
        setShowBegin(page < Math.ceil(total_results / 20));
      } catch (error) {
        setError(HTTP_ERROR_MSG);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery, page]);

  const handleFormSubmit = query => {
    setSearchParams({ query, page });
    setMovies([]);
    setError('');
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <section>
      <div>
        <SearchBar onSubmit={handleFormSubmit} />
        {error && <div>{error}</div>}
        {movies && <MovieList movies={movies} />}
        {loading && <Loader />}
        {showBegin && <Button onClick={handleLoadMore} />}
        <Toaster position="top-center" reverseOrder={true} />
      </div>
    </section>
  );
};

export default Movies;
