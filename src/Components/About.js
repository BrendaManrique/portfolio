import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row  main-col">
            <div className="row">
                <div className="">
                    <img
                    className="profile-pic"
                    src={profilepic}
                    alt="Brenda Manrique Profile Pic"
                  />
                </div>
              </div> 
              <p>{bio}</p>
            </div>
        </Fade>
      </section>
    );
  }
}

export default About;
