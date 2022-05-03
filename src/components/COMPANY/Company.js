import React from 'react'
import { DataCompany } from '../Data'   // to get data from "DataCompany"
import "./Company.css"                  // file "css"

const Company = () => {
    return (
        <div className="Company">
            <div className="container">
                <div className="text">
                    <h3 className="head">WHY INITIATIVE COMPANY</h3>
                    <p className="desc-sec">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                </div>
                <div className="cards">
                    {/*start get data */}
                    {DataCompany.map((item) => (
                        <div id={item.id} className="card">
                            <div className="info-img">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="info-text">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                            <button>Read More</button>
                        </div>
                    ))}
                    {/*end get data */}
                </div>
            </div>
        </div>
    )
}

export default Company