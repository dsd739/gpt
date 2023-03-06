import React from "react";
import Features from "../features/Features";
import "./whatGPT3.css";

export default function WhatGPT3() {
  return (
    <div id="What_is_GPT" className="container">
      <div className="whatisgpt">
        <div className="firts_porsion">
        <div className="feature"><Features data="What is GPT-3" /></div>
          <p className="p_tg p_tages">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </div>
        <div className="second_porsion gradient__text">
          <h1>The possibilities are beyond your imagination</h1>
          <p>Explore The Library</p>
        </div>
        <div className="third__porsion">
          <div className="third__porsion1">
            <div className="feature"><Features data="Chatbots" /></div>
            <p className="p_tages">
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought.
            </p>
          </div>
          <div className="third__porsion2">
          <div className="feature"><Features data="Knowledgebase" /></div>
            <p className="p_tages">
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own apartments b
            </p>
          </div>
          <div className="third__porsion3">
          <div className="feature"><Features data="Education" /></div>
            <p className="p_tages">
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own apartments b
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
