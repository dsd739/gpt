import React, { useState } from "react";
import "./navbar.css";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const Menu = () => {
 return <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#What is GPT">What is GPT</a>
    </p>
    <p>
      <a href="#Open AI">Open AI</a>
    </p>
    <p>
      <a href="#Case Studies">Case Studies</a>
    </p>
    <p>
      <a href="#Library">Library</a>
    </p>
  </>;
};

export default function Navbar() {
  const [togglemenu, settogglemenu] = useState(false);
  return (
    <div className="gpt3__navbar gradient__bg">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu/>
        </div>
        <div className="gpt3__navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
        <div className="gpt3__navbar-menu">
          {togglemenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => {
                settogglemenu(false);
              }}
            />
          ) : (
            <RiMenu2Line
              color="#fff"
              size={27}
              onClick={() => {
                settogglemenu(true);
              }}
            />
          )}
          {togglemenu && (
            <div className="gpt3__navbar-menu-container scale-up-center">
              <div className="gpt3__navbar-menu-container-links">
                <Menu/>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
