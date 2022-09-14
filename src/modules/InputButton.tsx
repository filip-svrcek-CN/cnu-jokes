import { useState } from "react";

import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { InputButtonProps } from "../types";

export function InputButton({ text, setJokesToDisplay }: InputButtonProps) {
  const [inputValue, setInputValue] = useState<number>();
  return (
    <div>
      <Input setInputValue={setInputValue} />
      <Button
        text={text}
        setJokesToDisplay={setJokesToDisplay}
        inputValue={inputValue}
      />
    </div>
  );
}
