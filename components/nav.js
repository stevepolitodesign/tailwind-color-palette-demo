import React from "react";
import PropTypes from "prop-types";

const Nav = (props) => {
  return (
    <section className="fixed-top w-100">
      <div className="container">
        <nav
          className="bg--gradient navbar navbar-dark navbar-expand-lg justify-content-end rounded shadow my-3"
          id="nav"
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navToggle"
            aria-controls="navToggle"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navToggle"
          >
            <ul className="nav nav-pills justify-content-center">
              {props.names.map((name, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <a
                      href={`#${name}`}
                      className="nav-link text-capitalize text-white"
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Nav;

Nav.propTypes = {
  names: PropTypes.array.isRequired,
};
