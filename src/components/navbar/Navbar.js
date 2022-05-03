import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    const difref = useRef()
    const Right = (dirction) => {   // This is to move the list of links left or right
        if (dirction === "right") {
            difref.current.style.transform = "translateX(0vw)"
        } else {
            difref.current.style.transform = "translateX(-110vw)"
        }
    }

    const toogle = (e) => {
        console.log(e.target)
        difref.current.style.transform = "translateX(-110vw)"

    }
    return (
        <nav>
            <div className="container">
                <div className="logo">
                    <a href="/">INTO</a>
                </div>
                <div className="links-log">
                    <div className="log">
                        <div className="log-in">
                            <i className="fa fa-sign-in"></i>
                            Login
                        </div>
                        <div className="sing-in">
                            <i className="fa fa-user-plus"></i>
                            Sign Up
                        </div>
                        <div className="search">
                            <i className="fa fa-search"></i>
                        </div>
                    </div>
                    <div onClick={() => Right("right")} className="menu">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
                <div ref={difref} className="black-links">
                    <ul>
                        <li> <NavLink onClick={(e) => toogle(e)} className="link" to="/">HOME</NavLink> </li>
                        <li> <NavLink onClick={(e) => toogle(e)} className="link" to="/team">TEAM</NavLink> </li>
                        <li> <NavLink onClick={(e) => toogle(e)} className="link" to="/portfolio">PORTFOLIO</NavLink> </li>
                        <li> <NavLink onClick={(e) => toogle(e)} className="link" to="/contactUs">CONTACT US</NavLink> </li>
                    </ul>
                    <div onClick={() => Right("left")} className="close">
                        <i className="fa fa-times"></i>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar