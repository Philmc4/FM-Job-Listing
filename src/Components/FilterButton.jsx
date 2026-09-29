import { IoClose } from "react-icons/io5";

function FilterButton({ word, removeKeywords }) {
  return (
    <div className="filter-button-main-container">
      <p className="text-3-bold text-my-green-400">{word}</p>
      <button
        value={word}
        onClick={() => removeKeywords(word)}
        className="btn-remove-filter"
      >
        <IoClose className="close-icon" />
      </button>
    </div>
  );
}

export default FilterButton;
