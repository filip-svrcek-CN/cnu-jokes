import styled from "styled-components";
import { getJokesBySearch } from "../api";
import { SearchInputProps } from "../types";

const StyledInput = styled.input``;
export function SearchInput({
  setSearchQuery,
  setJokesToDisplay,
  setCount,
  setSelectedCategory,
  searchQuery,
}: SearchInputProps) {
  const handleChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleSearch = () => {
    setSelectedCategory("");
    getJokesBySearch(searchQuery).then((res) => {
      setCount(res.total);
      setJokesToDisplay(res.result);
    });
  };

  return (
    <div>
      <StyledInput
        type="text"
        value={searchQuery}
        onChange={(event) => handleChange(event.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
