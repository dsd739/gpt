import React from "react";
import Features from "../features/Features";
import "./whatGPT3.css";

export default function WhatGPT3() {
  return (
    <div className="container">
      <div className="whatisgpt">
        <div className="firts_porsion">
          <Features data="What is GPT-3" />
          <p>
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
            <Features data="Chatbots" />
            <p>
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought.{" "}
            </p>
          </div>
          <div className="third__porsion2">
            <Features data="Knowledgebase" />
            <p>
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own apartments b
            </p>
          </div>
          <div className="third__porsion3">
            <Features data="Education" />
            <p>
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own apartments b
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
