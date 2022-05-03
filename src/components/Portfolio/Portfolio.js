/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./Portfolio.css"    // file "css"

const Portfolio = () => {
  return (
    <div className="port">
      <div className="container">
        <div className="text">
          <h3 className="head">OUR PORTFOLIO</h3>
          <p className="desc-sec">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
        </div>
        <div className="imgs">
          <img className="big" src="portfolio-img-1.png" />
          <img src="portfolio-img-2.jpg" />
        </div>
        <div className="imgs">
          <img src="portfolio-img-3.png" />
          <img className="big" src="portfolio-img-4.png" />
        </div>
      </div>
    </div>
  )
}

export default Portfolio