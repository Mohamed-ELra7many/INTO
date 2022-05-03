import React, { useRef, useState } from 'react'
import "./Home.css"
import { DataHome } from '../Data'  // to get data from "DataHome"
import Company from '../COMPANY/Company'
import Team from '../Team/Team'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
const Home = () => {
  const [slide, setSlide] = useState(1)
  const divRif = useRef()

  const HandleSlide = (dir) => {    // This is a function in order to prepare the slider so that it is either greater than 1 or equal to 0
    if (dir === "left") {
      setSlide(slide > 0 ? slide - 1 : (DataHome.length - 1))
    } else {
      setSlide(slide < (DataHome.length - 1) ? slide + 1 : 0)
    }
    divRif.current.style.transform = `translateX(${slide * -100}vw)`   // to add transform element got divRif
  }
  return (
    <>
      <div className="home">
        <div className="container">
          <div ref={divRif} className="slider">
            {DataHome.map((item) => (
              <div key={item.id} className='slider-container'>
                <h3>{item.heading} <span>{item.descHead}</span></h3>
                <div className="info">
                  <div className="info-text">
                    <p>{item.description}</p>
                    <button>{item.btn}</button>
                  </div>
                  <div className="info-img">
                    <img src={item.image} alt="kwdhdhb" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div onClick={() => HandleSlide("left")} className="Arrow" style={{ left: "40%" }}>
            <i className="fa fa-arrow-left"></i>
          </div>
          <div onClick={() => HandleSlide("right")} className="Arrow">
            <i className="fa fa-arrow-right"></i>
          </div>
        </div>
      </div>
      <Company />
      <Team />
      <Portfolio />
      <Contact />
    </>
  )
}

export default Home