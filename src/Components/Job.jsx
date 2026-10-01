function Job({ listing, setKeywords }) {
  const keywords = [
    listing.role,
    listing.level,
    ...listing.languages,
    ...listing.tools,
  ];

  return (
    <li
      className={`job-main-container ${listing.featured ? "featured-border" : ""}`}
    >
      <div className="job-information-container">
        <img src={listing.logo} alt="" className="logo-image" />
        <div className="job-information">
          <div className="job-company-container">
            <p className="text-2-bold text-my-green-400">{listing.company}</p>
            <div className="job-listing-attributes">
              {listing.new && <p className="new-style">new!</p>}
              {listing.featured && <p className="featured-style">featured</p>}
            </div>
          </div>
          <h2 className="text-1 text-my-green-900 hover:text-my-green-400 cursor-pointer">
            {listing.position}
          </h2>
          <div className="role-description">
            <p className="text-2-medium text-my-gray-400">{listing.postedAt}</p>
            <div className="attribute-divider"></div>

            <p className="text-2-medium text-my-gray-400">{listing.contract}</p>
            <div className="attribute-divider"></div>

            <p className="text-2-medium text-my-gray-400">{listing.location}</p>
          </div>
        </div>
      </div>
      <div className="job-container-border"></div>
      <div className="job-attributes-container">
        {keywords.map((item, id) => (
          <button
            key={id}
            onClick={() => setKeywords(item)}
            className="attribute-button text-3-bold"
          >
            {item}
          </button>
        ))}
      </div>
    </li>
  );
}

export default Job;
