import React from 'react';
import { Button } from 'reactstrap';

class ResumeButton extends React.Component {
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
    let color;
    if (this.state.hover) {
      buttonColor = '#cce5fd'
      color = '#044185'
    } else {
      buttonColor = '#6a8a82'
      color = 'white'
    }
    const buttonStyle = {backgroundColor: buttonColor, color: color, fontWeight: 'bold'}

    return (
      <Button href='https://drive.google.com/file/d/1TyErxrtPH3xjY3XuCEz2SThEQTHVOsl4/view?usp=sharing'
              target='_blank'
              onMouseEnter={this.onHover}
              onMouseLeave={this.onHover}
              style={buttonStyle}
              block>
        Download my resume here
      </Button>
    );
  }
}

export default ResumeButton;