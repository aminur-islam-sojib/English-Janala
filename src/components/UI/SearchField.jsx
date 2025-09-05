import { useState } from 'react';

const SearchField = () => {
  const [searchValue, setSearchValue] = useState(null);
  return (
    <section className=" w-[80%] mx-auto text-center mb-10">
      <label className="input rounded-xl !focus:outline-none focus:ring-0">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          onChange={(e) => setSearchValue(e.target.value)}
          className="grow !focus:outline-none !focus:ring-0"
          placeholder="Search an word..."
        />
        <kbd className="kbd kbd-sm">⌘</kbd>
        <kbd className="kbd kbd-sm">K</kbd>
      </label>
    </section>
  );
};

export { SearchField };
