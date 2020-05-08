import "./Season.css";
import React from "react";

// Set up an object with all options: info for summer and winter.
const seasonConfig = {
  summer: { text: "To the beach", iconName: "sun" },
  winter: { text: "Brrr, it's cold!", iconName: "snowflake" },
};

// Fx: Based on month & latitude, determine the user's season.
// Returns "summer" or "winter"
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

// Fx: Takes two args - lat & month.  Takes run get season fx to determine season
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());

  // Find the object info for that season.  Pick out text & iconName so I can use it in render
  const { text, iconName } = seasonConfig[season];

  return (
    <div className="ui raised centered card ">
      <div class="ui top attached label">Current Latitude: {props.lat}</div>
      <div class="weather-season">
        <h2>{season}</h2>
      </div>
      <div className="weather-alert">
        <i className={`icon icon-right big ${iconName}`} />
        <h3 className="weather-activity">{text}</h3>
        <i className={`icon icon-right big ${iconName}`} />
      </div>
    </div>
  );
};

export default SeasonDisplay;
