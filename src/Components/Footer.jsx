import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 left text-white text-center">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4 middle text-center text-white">
              <h3>AROUND THE WEB</h3>
              <div className="icons">
                <div className=" d-flex justify-content-center align-items-center">
                  <span>
                    <i className="fa-brands fa-facebook-f" />
                  </span>
                  <span>
                    <i className="fa-brands fa-x-twitter" />
                  </span>
                  <span>
                    <i className="fa-brands fa-linkedin-in" />
                  </span>
                  <span>
                    <i className="fa-solid fa-globe" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center text-white">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </footer>
      <footer className="copy-rights d-flex align-items-center justify-content-center py-3">
        <p className=" text-white text-center">Copyright © Your Website 2021</p>
      </footer>
    </>
  );
}
