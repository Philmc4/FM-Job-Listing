import { useEffect } from "react";
import Job from "./Job";

function JobListings({
  jobDescription,
  setKeywords,
  keywords,
  filteredInfo,
  setFilteredInfo,
}) {
  const modifiedData = () => {
    if (keywords.length > 0) {
      const newData = filteredInfo.filter((d) => {
        return keywords.every((key) => {
          return (
            d.role == key ||
            d.level == key ||
            d.languages.includes(key) ||
            d.tools.includes(key)
          );
        });
      });
      setFilteredInfo(newData);
    } else {
      setFilteredInfo(jobDescription);
    }
  };

  useEffect(() => {
    modifiedData();
  }, [keywords]);

  return (
    <div className="main-job-listings-container">
      {filteredInfo.map((job) => (
        <Job key={job.id} listing={job} setKeywords={setKeywords} />
      ))}
    </div>
  );
}

export default JobListings;
