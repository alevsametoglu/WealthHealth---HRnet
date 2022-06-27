import { useAsyncDebounce } from 'react-table';
import './SearchInput.scss';

const SearchInput = ({ onSearch }) => {
  const handleChange = useAsyncDebounce(value => {
    onSearch(value || undefined);
  }, 500);

  return (
    <div className="search-form" aria-labelledby="search input">
      <i className="fas fa-search"></i>
      <input
        className="search-input"
        type="search"
        placeholder="Search an employee"
        onChange={e => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
