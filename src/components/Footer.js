import React from 'react';
import {Container} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

import '../Presentational/Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer >
        <hr className="my-2" />
        <h4 style={{marginTop: '20px'}}>
          Connect With Me!
        </h4>
        <Container className="links">
          <a target="_blank" href="https://www.linkedin.com/in/jeffreybarrospena/"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a target="_blank" href="https://github.com/barros"><FontAwesomeIcon icon={faGithub}  /></a>
          <a href="mailto:jeff@barrospena.com"><FontAwesomeIcon icon={faEnvelope} /></a>
        </Container>
      </footer>
    )
  }
}

export default Footer;