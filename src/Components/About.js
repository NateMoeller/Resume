import React, { Component } from 'react';
import '../styles/About.scss';

class About extends Component {
   render() {
      const profilepic = "images/" + this.props.data.image;
      const bio = this.props.data.bio;
      const email = this.props.data.email;
      const resumeDownload = this.props.data.resumedownload;

      return (
         <section id="about">
         <div className="row">
            <div className="three columns">
               <img ref={pic => this.pic = pic} className="profile-pic tilt-in-top-1"  src={profilepic} alt="Nathan Moeller Profile Pic" />
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>
               <p>{bio}</p>
               <div className="row">
                  <div className="columns contact-details">
                     <h2>Contact Details</h2>
                     <p className="address">
                        <span>{email}</span>
                     </p>
                  </div>
                  <div className="columns download">
                     <p>
                        <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                     </p>
                  </div>
               </div>
            </div>
         </div>

      </section>
      );
   }
}

export default About;
