import React from "react";
import data from "../data.json";
import {SocialIcon} from "react-social-icons";
import DownIcon from "../downIcon/DownIcon";
import { Link, Element } from 'react-scroll'
import Navbar from "../navbar/Navbar";
import "./PageOne.css";


function PageOne() {
  return (
    <div>

      {/* <Navbar /> */}

      <div className="fullpage intro">
        <div className="center-text fullscreen">
          <h1 className="title"> {data.title} </h1>

          <div className="subtitle">
            <h2> {data.subtitle} </h2>
          </div>

          <div className="social-icons">
            {Object.keys(data.links).map((key) => {
              return <SocialIcon className="SI" url={data.links[key]} />;
            })}
          </div>
        </div>

          <Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500} delay={0}>
            <DownIcon />
          </Link>
          <Element name="skills" className="element" />
      </div>
    </div>
  );
}

export default PageOne;
