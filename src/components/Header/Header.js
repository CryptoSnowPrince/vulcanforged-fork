import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from 'react-scroll';
import {
  FaInstagram,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
import { BsJustify } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

import "./Header.css";

const menu = [
  { name: "HOME", href: "home", current: false },
  { name: "GAMES", href: "games", current: false },
  { name: "MARKETPLACE", href: "marketplace", current: false },
  { name: "VULCANYAULT", href: "vulcandex", current: false },
  { name: "MY FORCE", href: "myForce", current: false },
  { name: "PYR", href: "pyr", current: false },
  { name: "VULCANVAULT", href: "vulcanvault", current: false },
  { name: "LAVA BANK", href: "lavaBank", current: false },
];


export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 920px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  const connectWallet = async () => {

  };

  const disconnect = async () => {

  };

  return (
    <header className="Header align-items-center fixed-top">
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav justify-content-between d-flex align-items-center">
          <div>
            <Link to="home">
              <svg className="me-1" width="33.557" height="28.234" viewBox="0 0 33.557 28.234">
                <defs>
                  <linearGradient id="linear-gradient-marketplace" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#7d0753"></stop>
                    <stop offset="1" stopColor="#f55d0e"></stop>
                  </linearGradient>
                </defs>
                <path id="Path_2416" data-name="Path 2416" d="M-16726.125,9506.411h9.461l6.346,10.17,5.3-10.17h10.258s-4.088,7.385-6.4,11.52a13.893,13.893,0,0,1-6.166-2.395s3.291,3.98,14.758,7.336c-11.9-.418-20.814-7.535-24.5-11.324a10.753,10.753,0,0,0,2.65,5.152C-16720.555,9513.05-16726.125,9506.411-16726.125,9506.411Z" transform="translate(16726.125 -9506.411)" fill="url(#linear-gradient-marketplace)"></path>
                <path id="Path_2417" data-name="Path 2417" d="M-16703.492,9521.981l-6.832,12.41s-4.68-8.312-6.93-12.482a18.112,18.112,0,0,0,5.414,1.906c-4.539-1.783-9.09-5.623-13.875-10.924,5.309,4.063,9.82,6.416,16.793,9.3a15.508,15.508,0,0,1-3.242-4.117A56.212,56.212,0,0,0-16703.492,9521.981Z" transform="translate(16726.148 -9506.157)" fill="url(#linear-gradient-marketplace)"></path>
              </svg>
              VulcanForged
            </Link>
            {menu.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                spy={true}
                smooth={true}
                duration={50}
                activeClass='active'
                className={
                  "px-3 py-2 rounded-md text-base font-medium "
                }
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div>
            <button
              onClick={disconnect}
              className=" "
            >
              Register
            </button>
            <button
              onClick={disconnect}
              className=" "
            >
              Log In
            </button>
          </div>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        {isNavVisible ? <AiOutlineClose color="#4a4e57" /> : <BsJustify color="#4a4e57" />}
      </button>
    </header>
  );
}

