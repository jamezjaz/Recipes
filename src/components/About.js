import React from 'react';
import AboutStyles from '../styles/About.module.css';

const About = () => (
  <div className="container-fluid">
    <h2 className={AboutStyles.about}>About Us</h2>
    <p className={AboutStyles.para}>
      Catalogue of Recipes is the ultimate host for you to connect
      over a memorable, shared experience. We do this by providing
      unique entertainment in sophisticated, comfortable places to
      gather all served by our scratch kitchen. Our venue hosts a
      variety of events such as weddings, corporate events, and
      other social gatherings. We then host tailored combinations
      of dinning classic bowling, bocce, and events. All with amazing
      food and gracious service, so you can enjoy a genuine connecting
      with someone you care about.
    </p>
  </div>
);

export default About;
