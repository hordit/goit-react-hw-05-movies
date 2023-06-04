import { useSearchParams } from 'react-router-dom';
import { HiOutlineSearch } from 'react-icons/hi';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';
import { ButtonSubmit, Input, SearchForm } from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  const handleSubmit = event => {
    event.preventDefault();
    const inputValue = event.target.elements.searchQuery.value;

    if (inputValue.length === 0) {
      return toast.error('Please, enter search name!');
    }

    setSearchParams({
      query: inputValue,
    });
    onSubmit();
  };

  return (
      <SearchForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="searchQuery"
          defaultValue={searchQuery}
          autoComplete="off"
          autoFocus
        />
        <ButtonSubmit type="submit">
          <HiOutlineSearch />
        </ButtonSubmit>
      </SearchForm>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
