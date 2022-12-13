import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const linkedin = this.props.data.linkedin;
    const github = this.props.data.github;
    const medium = this.props.data.medium;
    const youcanbookme = this.props.data.youcanbookme;
    const name = this.props.data.name;
    const data = this.props.data;

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <nav id="nav-wrap-bottom">
          <Fade bottom duration={2000}>
              <ul className="social">
              <li><a href={linkedin} target="_blank" rel="noopener noreferrer" >
                  <i className="fa fa-linkedin"></i>
                </a></li>
                <li><a href={github} target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github"></i>
                </a></li>
                <li><a href={medium} target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-keyboard-o"></i>
                </a></li>
                <li><a href={youcanbookme} target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-calendar"></i>
                </a></li>
              </ul>
            </Fade>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom duration={1200}>
              <h3 className="">
                {data.description2}
                </h3>
            </Fade>
            <hr />
            <Fade bottom>
              <h1 className="responsive-headline">{data.name}</h1>
            </Fade>
          </div>
        </div>

      </header>
    );
  }
}

export default Header;
