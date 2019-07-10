import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FooterIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      color: "black",
      size: "xl"
    })
  }

  mouseEnter = () => {
    this.setState({
      color: "red",
      size: "lg"
    });
  }

  mouseLeave = () => {
    this.setState({
      color: "black",
      size: "md"
    });
  }

  render() {
    let target;
    if (this.props.link.startsWith("mailto")) {
      target = ""
    } else {
      target = "_blank"
    }
    return <a target={target}
              href={this.props.link}
              onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave}>
                <FontAwesomeIcon color={this.state.color} size={this.state.size} icon={this.props.icon} />
            </a>
  }
}

export default FooterIcon;