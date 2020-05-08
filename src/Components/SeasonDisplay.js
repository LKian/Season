import React from "react";

// Set up an object with the info for summer and winter.
const seasonConfig = {
  summer: { text: "Let's hit the beach", iconName: "sun" },
  winter: { text: "Brrr it's cold!", iconName: "snowflake" },
};

// Based on month & latitude, determine the user's season.
// Returns "summer" or "winter"
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

// Take in two args - lat & month.  run get season fx to determine season
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  console.log("season ", season);
  // Find the object info for that season.  Pick out text & iconName so I can use it in render
  const { text, iconName } = seasonConfig[season];

  return (
    <div>
      <i className={`icon ${iconName}`} />
      <h1>{text}</h1>
      <i className={`icon ${iconName}`} />
    </div>
  );
};

export default SeasonDisplay;
