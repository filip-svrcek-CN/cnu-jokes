import { useContext } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

import { getJokesBySearch } from "../api";
import { borderRadius, ControlsElementStyle, FocusInputStyle } from "../styles";
import { SearchInputProps } from "../types";
import { GlobalStatesContext } from "../utils/GlobalStatesContext";
import { Button } from "./Button";

const StyledInput = styled.input`
  ${ControlsElementStyle};
  border-radius: ${borderRadius} 0 0 ${borderRadius};
  ${FocusInputStyle};
`;

export function SearchInput({
  setSelectedCategory,
  setCount,
  searchQuery,
  setSearchQuery,
  setSearchResult,
  setIsSearchActive,
  handleShowRandom,
}: SearchInputProps) {
  const { isLoading, setIsLoading, setJokesToDisplay } =
    useContext(GlobalStatesContext);

  const handleChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleSearch = () => {
    if (searchQuery.length === 0) {
      return handleShowRandom();
    } else if (searchQuery.length < 3) {
      return toast.info("Search needs at least 3 characters");
    }
    setIsLoading(true);
    setSelectedCategory("");
    getJokesBySearch(searchQuery)
      .then((res) => {
        setIsSearchActive(true);
        setSearchResult(res.result);
        setJokesToDisplay(res.result.slice(0, 25));
        res.total > 25 ? setCount(25) : setCount(res.total);
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
        disabled={isLoading}
      />
      <Button text="Search" onClick={handleSearch} />
    </div>
  );
}
