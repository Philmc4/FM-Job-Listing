import "./index.css";
import JobListings from "./Components/JobListings";
import Header from "./Components/Header";
import JobDescription from "./data.json";
import { useState } from "react";
import Filter from "./Components/Filter";

function App() {
  const [filterKeywords, setFilterKeywords] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState([]);

  const addFilterKeywords = (word) => {
    if (!filterKeywords.includes(word)) {
      setFilterKeywords([...filterKeywords, word]);
    }
  };

  const deleteKeywords = (data) => {
    const newKeywords = filterKeywords.filter((key) => key != data);
    setFilterKeywords(newKeywords);
  };

  const clearAll = () => {
    setFilterKeywords([]);
  };

  return (
    <main>
      <Header />
      {filterKeywords.length > 0 && (
        <Filter
          keyWords={filterKeywords}
          setKeywords={setFilterKeywords}
          removeKeywords={deleteKeywords}
          handleClear={clearAll}
          setFilteredInfo={setFilteredInfo}
          jobDescription={JobDescription}
        />
      )}
      <JobListings
        keywords={filterKeywords}
        jobDescription={JobDescription}
        setKeywords={addFilterKeywords}
        filteredInfo={filteredInfo}
        setFilteredInfo={setFilteredInfo}
      />
    </main>
  );
}

export default App;
