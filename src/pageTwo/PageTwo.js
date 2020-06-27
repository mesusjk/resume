import React from "react";
import data from "../data.json";
import DownIcon from "../downIcon/DownIcon";
import { Link, Element } from 'react-scroll'
import "./PageTwo";

function PageTwo() {
  return (
    <div>
      <div className="fullpage about">
        <h1> {data.sections[0].title} </h1>
        <div className="fullscreen around-text">
          <h2>Who am I?</h2>
          <p> {data.sections[0].items[0].content} </p>
        </div>

        <div class="medium-circle2"></div>
        <div class="small-circle1"></div>
        <div class="small-circle2"></div>

        <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} delay={0}>
            <DownIcon onClick={() => {console.log("Clicked")}} />
        </Link>

        <Element name="about" className="element" />
      </div>
    </div>
  );
}

export default PageTwo;
