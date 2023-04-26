import React from "react";

interface Props {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  handleSearch: () => void;
}

const SearchBar: React.FC<Props> = ({
  searchTerm,
  setSearchTerm,
  handleSearch
}) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
