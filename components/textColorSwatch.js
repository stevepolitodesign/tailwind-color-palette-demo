import React from "react";
import PropTypes from "prop-types";

const TextColorSwatch = (props) => {
  return (
    <div className={`p-5 text-center`}>
      <code
        className={`h1 p-2 rounded tw-text-${props.name}-${
          props.shadeNumber
        }  ${props.shadeNumber <= 500 ? `tw-bg-gray-900` : ``}`}
      >{`.tw-text-${props.name}-${props.shadeNumber}`}</code>
    </div>
  );
};

export default TextColorSwatch;

TextColorSwatch.propTypes = {
  name: PropTypes.string.isRequired,
  shadeNumber: PropTypes.number.isRequired,
};
