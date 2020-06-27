import React, {useState, useEffect} from "react";
import { Link, Element } from 'react-scroll'
import "./Navbar.css";

function Navbar() {

    const [scrollTop, setScrollTop] = useState(0)

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100;

        setScrollTop(scrolled);
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

  return (
    <div className="navbar">

        <div className="progress-container">
                <div className="progress-bar" id="my-bar" style={{ width: `${scrollTop}%` }}></div>
        </div>

        <ul>

            <li>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500} delay={0}>
                    <a>About</a>
                </Link>
                <Element name="skills" className="element" />

            </li>

            <li>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} delay={0}>
                    <a>Skills</a>
                </Link>
                <Element name="about" className="element" />

            </li>

        </ul>

    </div>
  )
}

export default Navbar;