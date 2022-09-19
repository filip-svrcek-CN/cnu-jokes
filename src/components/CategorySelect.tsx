import { useEffect, useState } from "react";
import styled from "styled-components";

import { getCategories } from "../api";
import { CategorySelectProps } from "../types";

const StyledSelect = styled.select``;

export function CategorySelect({ setSelectedCategory }: CategorySelectProps) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <StyledSelect
      name="cars"
      id="cars"
      onChange={(event) => handleSelect(event)}
      defaultValue={""}
    >
      <option value="">All categories</option>
      {categories.map((category, index) => {
        return (
          <option key={index} value={category}>
            {category}
          </option>
        );
      })}
    </StyledSelect>
  );
}
