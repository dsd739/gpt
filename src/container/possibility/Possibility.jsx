import React from "react";
import "./possibility.css";
import image from "../../assets/possibility.png";

export default function Possibility() {
  return (
    <div className="possibility">
      <div className="possibility_image">
        <img src={image} alt="possibility" />
      </div>
      <div className="possibility_contant">
        <p className="possibility_contant_1">
          Request Early Access to Get Started
        </p>
        <h1 className="possibility_contant_2 gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p className="possibility_contant_3">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p className="possibility_contant_4">
          Request Early Access to Get Started
        </p>
      </div>
    </div>
  );
}
