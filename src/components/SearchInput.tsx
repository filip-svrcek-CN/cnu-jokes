import { toast } from "react-toastify";
import styled from "styled-components";

import { getJokesBySearch } from "../api";
import { SearchInputProps } from "../types";
import { Button } from "./Button";

const StyledInput = styled.input``;
export function SearchInput({
  setJokesToDisplay,
  setSelectedCategory,
  setCount,
  searchQuery,
  setSearchQuery,
  setIsLoading,
}: SearchInputProps) {
  const handleChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleSearch = () => {
    setIsLoading(true);
    setSelectedCategory("");
    getJokesBySearch(searchQuery)
      .then((res) => {
        setCount(res.total);
        setJokesToDisplay(res.result);
      })
      .catch(() => {
        toast.error("There has been an error fetching the jokes!", {
          autoClose: false,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <StyledInput
        type="text"
        value={searchQuery}
        onChange={(event) => handleChange(event.target.value)}
        onKeyDown={(event) => (event.key === "Enter" ? handleSearch() : null)}
      />
      <Button text="Search" onClick={handleSearch} />
    </div>
  );
}
