import FilterButton from "./FilterButton";

function Filter({ keyWords, removeKeywords, handleClear }) {
  return (
    <div className="filter-main-container">
      <div className="all-filters-container">
        {keyWords.map((word, id) => (
          <FilterButton removeKeywords={removeKeywords} key={id} word={word} />
        ))}
      </div>
      <button
        onClick={handleClear}
        className="clear-filters-button text-3-bold"
      >
        Clear
      </button>
    </div>
  );
}

export default Filter;
