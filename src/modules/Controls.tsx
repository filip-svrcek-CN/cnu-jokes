import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

import { getRandomJokes } from "../api";
import { Button } from "../components/Button";
import { CategorySelect } from "../components/CategorySelect";
import { CountInput } from "../components/CountInput";
import { SearchInput } from "../components/SearchInput";
import { ControlsProps, FetchedJoke } from "../types";
import { Spinner } from "../components/Spinner";
import { breakPoint } from "../styles";
import { LoadingStateContext } from "../utils/LoadingContext";

const StyledControls = styled.div`
  height: 100%;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${breakPoint}) {
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
  }
`;
const FlexItem = styled.div`
  white-space: nowrap;
  width: 40%;
  @media (max-width: ${breakPoint}) {
    width: 100%;
  }
`;

const FlexItemCounter = styled.div`
  margin: 0 2rem 0 2rem;
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

export function Controls({ jokesToDisplay, setJokesToDisplay }: ControlsProps) {
  const [count, setCount] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState<FetchedJoke[]>([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const { isLoading, setIsLoading } = useContext(LoadingStateContext);

  useEffect(() => {
    if (selectedCategory !== "") {
      handleShowRandom();
    }
  }, [selectedCategory]);

  const handleShowRandom = (newSet?: boolean) => {
    setIsLoading(true);
    getRandomJokes
      .apply(
        null,
        newSet === true
          ? [count, selectedCategory]
          : [count, selectedCategory, jokesToDisplay]
      )
      .then((res) => {
        setJokesToDisplay(res);
      })
      .catch(() => {
        toast.error("There has been an error fetching the jokes!", {
          autoClose: false,
        });
      })
      .finally(() => {
        setSearchQuery("");
        setIsSearchActive(false);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <StyledControls>
        <FlexItem>
          <CategorySelect
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <Button
            text="New random jokes!"
            onClick={() => handleShowRandom(true)}
          />
        </FlexItem>
        <FlexItemCounter>
          <CountInput
            jokesToDisplay={jokesToDisplay}
            setJokesToDisplay={setJokesToDisplay}
            selectedCategory={selectedCategory}
            count={count}
            setCount={setCount}
            searchQuery={searchQuery}
            searchResult={searchResult}
            isSearchActive={isSearchActive}
          />
        </FlexItemCounter>
        <FlexItem>
          <SearchInput
            setJokesToDisplay={setJokesToDisplay}
            setSelectedCategory={setSelectedCategory}
            setCount={setCount}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setSearchResult={setSearchResult}
            setIsSearchActive={setIsSearchActive}
          />
        </FlexItem>
      </StyledControls>
      <SpinnerContainer>
        {isLoading ? (
          <Spinner />
        ) : isSearchActive ? (
          <span>{searchResult.length} search results</span>
        ) : null}
      </SpinnerContainer>
    </div>
  );
}
