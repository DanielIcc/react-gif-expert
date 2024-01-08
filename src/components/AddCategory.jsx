import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const onFormSumbmit = (event) => {
    event.preventDefault();
    const valueSanitized = inputValue.trim();
    if (valueSanitized.length <= 1) return;
    onNewCategory(valueSanitized);
    setInputValue("");
  };

  return (
    <form onSubmit={onFormSumbmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
