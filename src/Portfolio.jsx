import React, { useState } from "react";
import firstImg from "../src/assets/portfolio1.png";
import secondImg from "../src/assets/portfolio2.png";
import thirdImg from "../src/assets/portfolio3.png";
export default function Portfolio() {
  const [imgItem, setImgItem] = useState(null);
  const images = [firstImg, secondImg, thirdImg, firstImg, secondImg, thirdImg];

  return (
    <>
      <div className="portfolio">
        <div className="container">
          <div className="title py-3">
            <h2 className="text-uppercase text-center">portfolio component</h2>
          </div>
          <div className="icon text-center">
            <span className="inner-icon">
              <i className="fa-solid fa-star" />
            </span>
          </div>
          <div className="row g-5 img-items py-5">
            {images.map((imgSrc, index) => (
              <div className="col-md-4" key={index}>
                <div className="inner rounded-3">
                  <img
                    onClick={()=>
                      {console.log("clicked", imgSrc)
                      setImgItem(imgSrc)}}
                    className="w-100 rounded-3"
                    src={imgSrc}
                    alt="first image in the portfolio"
                  />
                  <span>
                    <i className="fa-solid fa-plus" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {imgItem && (
        <div className="popup" onClick={() => setImgItem(null)}>
          <img src={imgItem} alt="enlarged view" />
        </div>
      )}
    </>
  );
}
