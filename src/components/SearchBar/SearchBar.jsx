import { useState } from 'react';
import {HiOutlineSearch} from 'react-icons/hi';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';

const SearchBar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchNameChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      return toast.error('Please, enter search name!');
    }

    onSubmit(searchQuery);
    setSearchQuery('');
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchQuery"
        value={searchQuery}
        onChange={handleSearchNameChange}
        autoComplete="off"
        autoFocus
      />
      <button type='submit'>
        <HiOutlineSearch />
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;