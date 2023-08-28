import { useState } from "react";
import "./SearchHeader.css";

function SearchHeader({ search }) {
  const [valueInput, setValueInput] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(valueInput);
  };

  const handleChange = (event) => {
    setValueInput(event.target.value);
  };

  return (
    <div className="SearchHeader">
      <form onSubmit={handleFormSubmit}>
        <label>Ne Arıyorsunuz?</label>
        <input value={valueInput} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchHeader;
