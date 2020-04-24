import React from "react";
import PropTypes from "prop-types";

const ColorSwatch = (props) => {
  return (
    <div className={`tw-bg-${props.name}-${props.shadeNumber} p-5 text-center`}>
      {props.shadeNumber <= 500 && (
        <code className="text-dark h1">{`.tw-bg-${props.name}-${props.shadeNumber}`}</code>
      )}
      {props.shadeNumber > 500 && (
        <code className="text-light h1">{`.tw-bg-${props.name}-${props.shadeNumber}`}</code>
      )}
    </div>
  );
};

export default ColorSwatch;

ColorSwatch.propTypes = {
  name: PropTypes.string.isRequired,
  shadeNumber: PropTypes.number.isRequired,
};
