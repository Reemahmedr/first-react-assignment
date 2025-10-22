import React from "react";

export default function About() {
  return (
    <>
      <div className="about py-5 d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="title pb-2">
            <h2 className="text-uppercase text-center text-white">
              about component
            </h2>
          </div>
          <div className="icon text-white text-center position-relative">
            <span className="inner-icon">
              <i className="fa-solid fa-star" />
            </span>
          </div>
          <div className="row text-white pt-4">
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
