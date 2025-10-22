import React from "react";

export default function Contact() {
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="title pb-2">
            <h2 className="text-uppercase text-center pt-4">
              conatct section
            </h2>
          </div>
          <div className="icon text-center position-relative">
            <span className="inner-icon">
              <i className="fa-solid fa-star" />
            </span>
          </div>
          <div className="inputs py-4">
            <input type="text" name="userName" className="form-control border-bottom w-75 mx-auto mb-5" placeholder="username" />
            <input type="text" name="userName" className="form-control border-bottom w-75 mx-auto mb-5" placeholder="userage" />
            <input type="email" name="userName" className="form-control border-bottom w-75 mx-auto mb-5" placeholder="useremail" />
            <input type="password" name="userName" className="form-control border-bottom w-75 mx-auto mb-4" placeholder="userpassword" />
          </div>
          <div className="button text w-75 mx-auto py-4">
            <button className="btn btn-success">Send message</button>
          </div>
        </div>
      </div>
    </>
  );
}
