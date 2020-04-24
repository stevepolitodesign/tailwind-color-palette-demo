import React from "react";

const Intro = () => {
  return (
    <section className="py-5 tw-bg-gray-900">
      <div className="container p-5">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h1 className="display-2 font-weight-bold mb-5 text-white">
              Tailwind
              <br />
              <span className="tw-text-red-600">C</span>
              <span className="tw-text-orange-600">o</span>
              <span className="tw-text-yellow-600">l</span>
              <span className="tw-text-green-600">o</span>
              <span className="tw-text-teal-600">r</span> Palette
              <br />
              Demo
            </h1>
            <h3 className="font-weight-light text-white mb-5">
              Utility classes for assigning background color or text color based
              on the{" "}
              <a href="https://tailwindcss.com/docs/customizing-colors#default-color-palette">
                TailwindCSS
              </a>{" "}
              color palette. Pairs well with{" "}
              <a href="https://getbootstrap.com/">Bootstrap</a>.
            </h3>
            <a
              href="https://github.com/stevepolitodesign/tailwind-color-palette"
              className="btn btn-lg btn-outline-light"
            >
              View On GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
