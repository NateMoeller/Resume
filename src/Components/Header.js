import React, { Component } from 'react';
import cx from 'classnames';
import '../styles/Header.scss';

class Header extends Component {
   constructor(props) {
      super(props);

      this.state = {
         headerVisible: false,
      };
   }
   
   componentDidMount() {
      this.observer = new IntersectionObserver(entries => {
         entries.forEach(entry => this.setState({ headerVisible: entry.isIntersecting }));
      });
      this.observer.observe(this.header);
   }

   render() {
      const name = this.props.data.name;
      const description = this.props.data.description;
      const networks = this.props.data.social.map((network) => (
         <li key={network.name}><a href={network.url} target="_blank" rel="noopener noreferrer"><i className={network.className}></i></a></li>
      ));
      const animation = this.state.headerVisible ? 'scale-up-bottom' : null;

      return (
         <header id="home">
            <div id="stars1" />
            <div id="stars2" />
            <div id="stars3" />
            <nav id="nav-wrap">
               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#resume">Resume</a></li>
                  <li><a className="smoothscroll" href="#projects">projects</a></li>
               </ul>
            </nav>
            <div className="row banner welcome">
               <div id="header" ref={header => this.header = header} className={cx('banner-text', animation)}>
                  <h1 className="responsive-headline">Hi! I'm {name}.</h1>
                  <h3>{description}</h3>
                  <hr />
                  <ul className="social">
                     {networks}
                  </ul>
               </div>
            </div>
            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>
         </header>
      );
   }
}

export default Header;
