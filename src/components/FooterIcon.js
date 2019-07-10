import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FooterIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      color: "black",
      size: "sm"
    })
  }

  mouseEnter = () => {
    this.setState({
      color: "#9a7f53",
      size: "lg"
    });
  }

  mouseLeave = () => {
    this.setState({
      color: "black",
      size: "sm"
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