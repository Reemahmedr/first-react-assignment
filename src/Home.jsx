import React from "react";
import homeImg from "../src/assets/avataaars.svg";

export default function Home() {
  return (
    <>
      <div className="home-section py-5">
        <div className="img-item m-auto pb-5">
          <img className="w-100" src={homeImg} alt="home image" />
        </div>
        <div className="caption">
          <h2 className="text-white text-uppercase text-center">
            start Framework
          </h2>
        </div>
        <div className="icon text-white text-center position-relative">
          <span className="inner-icon">
            <i className="fa-solid fa-star" />
          </span>
        </div>
        <div className="decription text-center py-4">
          <span className=" text-white">Graphic Artist - Web Designer - Illustrator</span>
        </div>
      </div>
    </>
  );
}
