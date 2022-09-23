import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

import { getCategories } from "../api";
import { borderRadius, ControlsElementStyle, FocusInputStyle } from "../styles";
import { CategorySelectProps } from "../types";

const StyledSelect = styled.select`
  ${ControlsElementStyle};
  border-radius: ${borderRadius} 0 0 ${borderRadius};
  cursor: pointer;
  padding: 0.25rem;
  ${FocusInputStyle};
`;

export function CategorySelect({
  selectedCategory,
  setSelectedCategory,
  isDisabled,
}: CategorySelectProps) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(res);
      })
      .catch(() => {
        toast.error("There has been an error fetching the categories!", {
          autoClose: false,
        });
      });
  }, []);

  const handleSelect = (value: string) => {
    setSelectedCategory(value);
  };

  return (
    <StyledSelect
      onChange={(event) => handleSelect(event.target.value)}
      value={selectedCategory}
      disabled={isDisabled}
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
