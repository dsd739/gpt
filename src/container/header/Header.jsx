import React from "react";
import "./header.css";
import image_2 from "../../assets/people.png";
import image_1 from '../../assets/ai.png'

export default function Header() {
  return (
    <div id="home" className="header1">
      <div className="header">
        <div className="header__heading gradient__text">
          <p>Let’s Build Something amazing with GPT-3 OpenAI</p>
        </div>
        <div className="header__discription">
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
        </div>
        <div className="header__email">
          <input
            className="header__email-inpt"
            type="email"
            placeholder="Your Email Address"
          />
          <button className="header__email-btn" type="submit">
            Get Started
          </button>
        </div>
        <div className="header__email-request_forms">
          <img src={image_2} alt='header_img' />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header_image">
        <img src={image_1} alt="header_image" />
      </div>
    </div>
  );
}
