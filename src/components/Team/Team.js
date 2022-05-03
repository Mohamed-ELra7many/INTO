import React from 'react'
import { DataTeam } from '../Data'   // to get data from "DataTeam"
import "./Team.css"                   // file "css"
const Team = () => {
    return (
        <div className="team">
            <div className="container">
                <div className="text">
                    <h3 className="head">OUR TEAM</h3>
                    <p className="desc-sec">It is a long established fact that a reader will be distracted by the readable</p>
                </div>
                <div className="cards">
                    {DataTeam.map((item) => (
                        <div id={item.id} className="card">
                            <div className="info-img">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="info-text">
                                <h4>{item.name}</h4>
                                <p>CEO - DESIGNER</p>
                                <span>Follow On</span>
                            </div>
                            <div className="social">
                                <i className="fa fa-facebook-official"></i>
                                <i className="fa fa-twitter"></i>
                                <i className="fa fa-linkedin-square"></i>
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Team