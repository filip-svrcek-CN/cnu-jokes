import { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

import { getRandomJokes } from "../api";
import { Button } from "../components/Button";
import { CategorySelect } from "../components/CategorySelect";
import { CountInput } from "../components/CountInput";
import { SearchInput } from "../components/SearchInput";
import { ControlsProps } from "../types";
import { Spinner } from "../components/Spinner";

const StyledControls = styled.div`
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Col = styled.div`
  width: 50%;
`;
const SpinnerContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 40px;
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

  useEffect(() => {
    if (selectedCategory !== "") {
      handleShowRandom();
    }
  }, [selectedCategory]);

  const handleShowRandom = () => {
    setIsLoading(true);
    getRandomJokes(count, jokesToDisplay, selectedCategory)
      .then((res) => {
        setSearchQuery("");
        setJokesToDisplay(res);
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
      <StyledControls>
        <Col>
          <CategorySelect
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <CountInput
            jokesToDisplay={jokesToDisplay}
            setJokesToDisplay={setJokesToDisplay}
            selectedCategory={selectedCategory}
            count={count}
            setCount={setCount}
            searchQuery={searchQuery}
            setIsLoading={setIsLoading}
          />
          <Button text="New set of random jokes!" onClick={handleShowRandom} />
        </Col>
        <Col>
          <SearchInput
            setJokesToDisplay={setJokesToDisplay}
            setSelectedCategory={setSelectedCategory}
            setCount={setCount}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setIsLoading={setIsLoading}
          />
        </Col>
      </StyledControls>
      <SpinnerContainer>{isLoading && <Spinner />}</SpinnerContainer>
    </div>
  );
}
