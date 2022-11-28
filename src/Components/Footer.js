import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;
    const resumeDownload = this.props.data.resumeDownload;

    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <footer>
        <div className="row">
        <Fade duration={1000}>
          <div className="row">
            <div >
              
              <div className="download">
                <a href={resumeDownload} className="button">
                  <i className="fa fa-download"></i> Download Resume
                </a>
              </div>
            </div>
            
          </div>
        </Fade>
         {/*<Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">{networks}</ul>

              <ul className="copyright">
                <li>&copy; Copyright 2021 Nordic Giant</li>
                <li>
                  Design by{" "}
                  <a title="Styleshout" href="http://www.styleshout.com/">
                    Styleshout
                  </a>
                </li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>*/}
        </div>
      </footer>
    );
  }
}

export default Footer;
