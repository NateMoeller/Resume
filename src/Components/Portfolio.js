import React, { Component } from 'react';
import '../styles/Projects.scss';

class Portfolio extends Component {
  render() {
    const projects = this.props.data.map(project => (
      <div key={project.name}>
        <h3><a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a></h3>
        <div>
          <p className="info"><span>&bull;</span> <em className="date">{project.years}</em></p>
          <p>{project.description}</p>
        </div>
      </div>
    ));

    return (
      <section id="projects" className="projects">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1><span>Projects</span></h1>
            <p>Below are some of the projects I've created outside of work or during school.</p>
            {projects}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
