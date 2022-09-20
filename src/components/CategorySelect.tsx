import { useEffect, useState } from "react";
import styled from "styled-components";

import { getCategories } from "../api";
import { CategorySelectProps } from "../types";

const StyledSelect = styled.select``;

export function CategorySelect({
  selectedCategory,
  setSelectedCategory,
}: CategorySelectProps) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  const handleSelect = (value: string) => {
    setSelectedCategory(value);
  };

  return (
    <StyledSelect
      onChange={(event) => handleSelect(event.target.value)}
      value={selectedCategory}
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
