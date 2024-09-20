import React, { useState } from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  // State to track how many works are visible
  const [visibleWorks, setVisibleWorks] = useState(3); // Show 3 projects initially

  // Function to load more projects
  const loadMoreWorks = () => {
    setVisibleWorks((prevCount) => prevCount + 3); // Load 3 more projects
  };

  // Function to show fewer projects (collapse)
  const showLessWorks = () => {
    setVisibleWorks(3); // Reset to showing only 3 projects
  };

  return (
    <div className="mywork">
      <div className="mywork-title">
        <h1>My work</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>

      {/* Display only the visible projects */}
      <div className="mywork-container">
        {mywork_data.slice(0, visibleWorks).map((work) => {
          return (
            <a
              key={work.w_no}
              href={work.w_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={work.w_img} alt={work.w_name} />
            </a>
          );
        })}
      </div>

      {/* Show/Hide Buttons Section */}
      <div className="mywork-buttons">
        {visibleWorks < mywork_data.length && (
          <div
            className="mywork-button mywork-showmore"
            onClick={loadMoreWorks}
          >
            <p>Show More</p>
            <img src={arrow_icon} alt="Show more arrow" />
          </div>
        )}

        {visibleWorks > 3 && (
          <div
            className="mywork-button mywork-showless"
            onClick={showLessWorks}
          >
            <p>Show Less</p>
            <img
              src={arrow_icon}
              alt="Show less arrow"
              style={{ transform: "scaleX(-1)" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyWork;
