import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
<h2>About me</h2>
<p>hello there my name is mohamad aghi and i am a full stack web developer</p>
<img src={image} alt="I made this"></img>
  </div>;
}

export default About;
