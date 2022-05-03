/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./Contact.css"  // file "css"

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="text">
          <p className="desc-sec" style={{ color: "#787877" }}>Don’t Hesitate To Ask</p>
          <h3 className="head">FREE CONSULTATION</h3>
        </div>
        <div className="form-img">
          <form>
            <div className="labels">
              <div>
                <label>Name
                  <input type="text" placeholder="Your-Name" required />
                </label>
              </div>
              <div>
                <label>Email
                  <input type="email" placeholder="Your-Email" required />
                </label>
              </div>
              <div>
                <label>Phone Number
                  <input type="text" placeholder="Phone-Number" />
                </label>
              </div>
              <div>
                <label>Message
                  <input className="message" type="text" placeholder="write your message" />
                </label>
              </div>
              <button>send</button>
            </div>
          </form>
          <div className="contact-img">
            <img src="form-img.png" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact