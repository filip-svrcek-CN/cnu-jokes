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
  setSearchResult,
  isDisabled,
  setIsDisabled,
}: SearchInputProps) {
  const handleChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleSearch = () => {
    setIsDisabled(true);
    setIsLoading(true);
    setSelectedCategory("");
    getJokesBySearch(searchQuery)
      .then((res) => {
        setSearchResult(res.result);
        setCount(res.total);
        setJokesToDisplay(res.result);
      })
      .catch(() => {
        toast.error("There has been an error fetching the jokes!", {
          autoClose: false,
        });
      })
      .finally(() => {
        setIsDisabled(false);
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
        disabled={isDisabled}
      />
      <Button text="Search" onClick={handleSearch} isDisabled={isDisabled} />
    </div>
  );
}
