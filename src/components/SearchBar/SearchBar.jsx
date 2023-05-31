import { useState } from 'react';
import { toast } from 'react-hot-toast';
import {HiOutlineSearch} from 'react-icons/hi';

export const SearchBar = ({ onSubmit }) => {
  const [searchName, setSearchName] = useState('');

  const handleSearchNameChange = event => {
    setSearchName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchName.trim() === '') {
      return toast.error('Please, enter search name!');
    }

    onSubmit(searchName);
    setSearchName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchName"
        value={searchName}
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
