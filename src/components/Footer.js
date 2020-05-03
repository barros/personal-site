import React from 'react';
import { Container } from 'reactstrap';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import FooterIcon from './FooterIcon';

import '../Presentational/Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black',
      size: 'xl'
    };
  }

  mouseEnter = () => {
    this.setState({
      color: 'red',
      size: 'lg'
    });
  };

  mouseLeave = () => {
    this.setState({
      color: 'black',
      size: 'md'
    });
  };

  render() {
    return (
      <footer>
        <hr className="my-2" />
        <h4 style={{ marginTop: '20px' }}>Connect With Me!</h4>
        <Container className="links">
          <FooterIcon link="https://www.linkedin.com/in/jeffreybarrospena/" icon={faLinkedin} />
          <FooterIcon link="https://github.com/barros" icon={faGithub} />
          <FooterIcon link="mailto:jeff@barrospena.com" icon={faEnvelope} />
        </Container>
      </footer>
    );
  }
}

export default Footer;
