import { useEffect, useState } from "react";
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

const StyledSearchTotalText = styled.span`
  font-family: Tahoma;
`;

export function Controls({
  jokesToDisplay,
  setJokesToDisplay,
  isLoading,
  setIsLoading,
}: ControlsProps) {
  const [count, setCount] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState<FetchedJoke[]>([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (selectedCategory !== "") {
      handleShowRandom();
    }
  }, [selectedCategory]);

  const handleShowRandom = (newSet?: boolean) => {
    setIsDisabled(true);
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
        setIsDisabled(false);
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
            isDisabled={isDisabled}
          />

          <Button
            text="New random jokes!"
            onClick={() => handleShowRandom(true)}
            isDisabled={isDisabled}
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
            setIsLoading={setIsLoading}
            searchResult={searchResult}
            isSearchActive={isSearchActive}
            isDisabled={isDisabled}
            setIsDisabled={setIsDisabled}
          />
        </FlexItemCounter>
        <FlexItem>
          <SearchInput
            setJokesToDisplay={setJokesToDisplay}
            setSelectedCategory={setSelectedCategory}
            setCount={setCount}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setIsLoading={setIsLoading}
            setSearchResult={setSearchResult}
            setIsSearchActive={setIsSearchActive}
            isDisabled={isDisabled}
            setIsDisabled={setIsDisabled}
          />
        </FlexItem>
      </StyledControls>
      <SpinnerContainer>
        {isLoading ? (
          <Spinner />
        ) : isSearchActive ? (
          <StyledSearchTotalText>
            of {searchResult.length} search results
          </StyledSearchTotalText>
        ) : null}
      </SpinnerContainer>
    </div>
  );
}
