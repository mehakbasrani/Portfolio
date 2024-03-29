import React from 'react'
import "./about.scss"

import html from "./logos/html.png"
import css from "./logos/css.png"
import javascript from "./logos/javascript.png"
import react from "./logos/react.png";
import cplusplus from "./logos/c++.png";
import java from "./logos/java.png"
import mySQL from "./logos/MySQL.png"
import mongodb from "./logos/MongoDB_Logo.png"
import express from "./logos/Expressjs.png"
import nodejs from "./logos/nodejs.jpg"

export default function Logo() {
  return (
    <>
      <img  className="logo" src={cplusplus} alt="" />
      <img  className="logo" src={java} alt="" /> 
      <img className="logo" src= {html} alt=""  />
      <img  className="logo" src={css} alt="" />
      <img  className="logo" src={javascript} alt="" /> 
      <img   className="logo" src={react} alt="" />
      <img  className="logo" src={nodejs} alt="" />
      <img  className="logo" src={express} alt="" />
      <img  className="logo" src={mySQL} alt="" />
      <img  className="logo" src={mongodb} alt="" />
    </>
  )
}
