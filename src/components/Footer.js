import React from 'react';
import {Container} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

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
          <a href="https://www.linkedin.com/in/jeffreybarrospena/"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://github.com/barros"><FontAwesomeIcon icon={faGithub}  /></a>
        </Container>
      </footer>
    )
  }
}

export default Footer;