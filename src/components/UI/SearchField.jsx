import { useState } from 'react';
import { SearchResult } from './SearchResult';

const SearchField = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    setSearchValue(inputValue.trim()); // update only when button clicked
  };

  return (
    <section className="w-[80%] mx-auto text-center my-5">
      <div className="join">
        <div>
          <label className="input rounded-l">
            <input
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              placeholder="Search here..."
              className="focus:outline-0"
            />
          </label>
        </div>
        <button onClick={handleSearch} className="btn btn-neutral rounded-r">
          Search
        </button>
      </div>
      <div className=" mt-5">
        {searchValue && <SearchResult inputValue={searchValue} />}
      </div>
    </section>
  );
};

export { SearchField };
