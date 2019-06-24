import React from 'react';
import {Container} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <h4>
          Connect With Me!
        </h4>
        <Container>
          <a href="https://www.linkedin.com/in/jeffreybarrospena/"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://github.com/barros"><FontAwesomeIcon icon={faGithub}  /></a>
        </Container>
      </footer>
    )
  }
}

export default Footer;