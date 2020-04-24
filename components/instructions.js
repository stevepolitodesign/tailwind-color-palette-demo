import React from "react";

const Instructions = () => {
  return (
    <section className="tw-bg-gray-600">
      <div
        className="container bg-white shadow rounded text-center position-relative px-5 py-3"
        style={{ top: "-2rem" }}
      >
        <h2 className="display-4 font-weight-bold tw-text-gray-900">
          Installation
        </h2>
        <hr />
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/0J_e_7QQ-uU"
            allowFullScreen
          ></iframe>
        </div>
        <hr />
        <ol className="h3 font-weight-light list-unstyled">
          <li className="pb-3">
            Run{" "}
            <code className="text-primary tw-bg-gray-200 rounded-sm">
              npm i tailwind-color-palette
            </code>{" "}
            or{" "}
            <code className="text-primary tw-bg-gray-200 rounded-sm">
              yarn add tailwind-color-palette
            </code>
            .
          </li>
          <li className="pb-3">
            Add{" "}
            <code className="text-primary tw-bg-gray-200 rounded-sm">
              @import "~tailwind-color-palette/scss/tailwind-color-palette"
            </code>{" "}
            to any{" "}
            <code className="text-primary tw-bg-gray-200 rounded-sm">
              .scss
            </code>{" "}
            file.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Instructions;
