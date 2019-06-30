import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class GHProjectButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = ({
      hover: false
    });
  }

  onHover = () => {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    let buttonColor;
    if (this.state.hover) {
      buttonColor = '#c4dad4'
    } else {
      buttonColor = '#f8f8f8'
    }
    const buttonStyle = {backgroundColor: buttonColor, color: 'black', boxShadow: '2px 2px 5px #888888'}

    return (
      <div>
        <Button href={this.props.link} target='_blank' style={buttonStyle}  onMouseEnter={this.onHover} onMouseLeave={this.onHover} block>
          View GitHub Repo 
          <FontAwesomeIcon style={{marginLeft:'10px'}} icon={faGithub} size='lg'/>
        </Button>
      </div>
      );
  }
}

export default GHProjectButton;