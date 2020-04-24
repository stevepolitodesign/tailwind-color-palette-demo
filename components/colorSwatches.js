import React from "react";
import PropTypes from "prop-types";

import ColorSwatch from "./colorSwatch";
import TextColorSwatch from "./textColorSwatch";

const ColorSwatches = (props) => {
  return props.names.map((name, index) => {
    return (
      <section key={index} id={name} className="pt-5">
        <h2
          className={`display-1 text-center p-5 text-capitalize tw-text-${name}-600`}
        >
          {name}
        </h2>
        <h3
          className={`display-4 text-center p-5 text-capitalize tw-text-${name}-600`}
        >
          {name} Background Color Utility Classes
        </h3>
        {props.shadeNumbers.map((shadeNumber, index) => {
          return (
            <ColorSwatch key={index} name={name} shadeNumber={shadeNumber} />
          );
        })}
        <h3
          className={`display-4 text-center p-5 text-capitalize tw-text-${name}-600`}
        >
          {name} Text Color Utility Classes
        </h3>
        {props.shadeNumbers.map((shadeNumber, index) => {
          return (
            <TextColorSwatch
              key={index}
              name={name}
              shadeNumber={shadeNumber}
            />
          );
        })}
      </section>
    );
  });
};

export default ColorSwatches;

ColorSwatches.propTypes = {
  names: PropTypes.array.isRequired,
  shadeNumbers: PropTypes.array.isRequired,
};
