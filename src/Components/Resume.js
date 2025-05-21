import React, { Component } from 'react';

class Resume extends Component {
  getSplunkSection() {
    return (
      <div className="workItem" key='Splunk'>
        <div className="companyLogo">
          <img src={`images/ibm_logo_2.jpeg`} alt="logo" width="56" height="56" />
        </div>
        <div>
          <h3>Splunk</h3>
        </div>
      </div>
    );
  }

  getIBMSection() {
    return (
      <div className="workItem" key='IBM'>
        <div className="companyLogo">
          <img src={`images/ibm_logo_2.jpeg`} alt="logo" width="56" height="56" />
        </div>
        <div>
          <h3>IBM</h3>
          <div>
            <p className="info">Advisory software engineer<span>&bull;</span> <em className="date">April 2019 - Present</em></p>
            <p>Currently working on <a href="https://www.ibm.com/products/cloud-pak-for-data" target="_blank" rel="noopener noreferrer">IBM Cloud Pak for Data</a>. 
            As a full stack engineer, my responsibilities include designing and developing core features of the platform for internal and external services to consume. 
            These core features include service provisioning, service lifecycle management, and service extensions. These features are used by over 50 internal and external services on the platform. Our technology stack includes React/Redux for the front end, and go for the backend. 
            Cloud Pak for data is built on Red Hat Openshift Container platform, so we frequently use Docker and Kubernetes for deployments.</p>
          </div>
          <div>
            <p className="info">Staff software engineer<span>&bull;</span> <em className="date">Feburary 2017 - April 2019</em></p>
            <p>Began working at IBM by working on two desktop products, DSX Desktop and <a href="https://www.ibm.com/products/spss-statistics" target="_blank" rel="noopener noreferrer">IBM SPSS Statistics</a>. 
            Both of these applications are React based electron applications where I developed many key features. 
            For SPSS Statistics, I developed the data editor, variable editor, application updater and the framework for analyze procedures. This work increased the product's NPS score by over 50 points. 
            For the data editor, we developed a REST API server in Java to execute many of the user actions that interacted with the SPSS engine. 
            In September of 2018 I switched teams and began working on IBM Cloud Pak for Data.</p>
          </div>
        </div>
      </div>
    );
  }

  getUMNSection() {
    return (
      <div className="workItem" key='UMN'>
        <div className="companyLogo">
          <img src={`images/umn_logo.jpg`} alt="logo" width="56" height="56" />
        </div>
        <div>
          <h3>University of Minnesota - Institute of Health Informatics</h3>
          <div>
            <p className="info">Research assistant<span>&bull;</span> <em className="date">Feburary 2015 - May 2016</em></p>
            <p>While receiving my graduate degree at the University of Minnesota, I worked as a research assistent to Professor <a href="https://healthinformatics.umn.edu/bio/ihi-faculty-staff/genevieve-melton-meaux" target="_blank" rel="noopener noreferrer">Genevieve Melton-Meaux</a>. I worked on a team of graduate students and surgeons to develop machine learning methods to detect post-surgical complications. 
              My main responsibilities were to work with surgeons to understand what data we could use to predict a post-surgical complication (Ex: UTI), 
              and then use this information to extract, clean, and format the EHR data to use for machine learning purposes. 
              I also worked on developing the penalized regression algorithm we used to predict the surgical complication.</p>
          </div>
          <p>Publication: <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5333220/">Accelerating Chart Review Using Automated Methods on Electronic Health Record Data for Postoperative Complications</a></p>
        </div>
      </div>
    );
  }

  getFlowSection() {
    return (
      <div className="workItem" key='Flow'>
        <div className="companyLogo">
          <img src={`images/flow_logo_2.png`} alt="logo" width="56" height="56" />
        </div>
        <div>
          <h3>Flow Enterprises</h3>
          <div>
            <p className="info">Junior software developer<span>&bull;</span> <em className="date">May 2014 - September 2014</em></p>
            <p>In the summer of 2014 I worked part time as a devloper on various web applications for clients of Flow Enterprises. 
              These applications were developed in PHP, javascript, and C#.</p>
          </div>
        </div>
      </div>
    );
  }

  getUWSection() {
    return (
      <div className="workItem" key='UW'>
        <div className="companyLogo">
          <img src={`images/uw_logo.png`} alt="logo" width="56" height="56" />
        </div>
        <div>
          <h3>University of Wisconsin - Madison</h3>
          <div>
            <p className="info">Research assistant<span>&bull;</span> <em className="date">July 2012 - June 2014</em></p>
            <p>While receiving my undergraduate degree at the University of Wisconsin - Madison, I worked as a research assistant to <a href="http://pages.cs.wisc.edu/~suman/">Professor Suman Banerjee</a>. 
              I worked on a research project called Wireless@Home, which focused on researching factors that that degrade WiFi network performance in home environments. 
              I developed a web based console in javascript and python which displayed the data we collected in dynamic charts and heat maps.</p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const education = this.props.data?.education.map(education => (
      <div className="workItem" key={education.school}>
        <div className="companyLogo">
          <img src={`images/${education.image}`} alt="logo" width="56" height="56" />
        </div>
        <div>
          <h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p>
        </div>
      </div>
    ));

    return (
      <section id="resume">
        <div className="row work">
          <h1><span>Work</span></h1>
          <div className="main-col">
            {this.getIBMSection()}
            {this.getUMNSection()}
            {this.getFlowSection()}
            {this.getUWSection()}
          </div>
        </div>
        <div className="row education">
          <h1><span>Education</span></h1>
          <div className="main-col">
            {education}
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
