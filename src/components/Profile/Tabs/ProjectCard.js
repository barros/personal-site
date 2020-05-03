import React from 'react';
import '../../../Presentational/ProjectCard.css';
import GithubButton from '../../../buttons/GHProjectButton';

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: '500px',
      hovered: false,
      cardPaddingTop: '25px',
      cardPaddingBottom: '25px',
      boxShadow: '10px 10px 15px #888888',
      backgroundColor: '#cddad6'
    };
    this.increaseCardSize = this.increaseCardSize.bind(this);
    this.decreaseLeftSize = this.decreaseLeftSize.bind(this);
    this.getCardStyle = this.getCardStyle.bind(this);
  }

  getCardStyle = () => {
    return {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: this.state.width,
      backgroundColor: this.state.backgroundColor,
      borderTopLeftRadius: '10px',
      borderBottomRightRadius: '10px',
      paddingLeft: '15px',
      paddingRight: '15px',
      paddingTop: this.state.cardPaddingTop,
      paddingBottom: this.state.cardPaddingBottom,
      marginBottom: '30px',
      boxShadow: this.state.boxShadow
    };
  };

  increaseCardSize() {
    this.setState({
      hovered: true,
      width: '600px',
      cardPaddingTop: '30px',
      cardPaddingBottom: '30px',
      boxShadow: '10px 10px 45px #888888',
      backgroundColor: 'white'
    });
  }

  decreaseLeftSize() {
    this.setState({
      hovered: false,
      width: '500px',
      cardPaddingTop: '25px',
      cardPaddingBottom: '25px',
      boxShadow: '10px 10px 15px #888888',
      backgroundColor: '#cddad6'
    });
  }

  render() {
    const project = this.props.project;
    const color = project.titleColor;
    const fontFamily = project.font;

    const techStack = project.techStack;
    let techStackDiv;
    if (techStack) {
      techStackDiv = (
        <div style={{ marginBottom: '10px' }}>
          <h5 style={{ fontFamily: 'Poppins', fontWeight: 'bold', color: '#44444' }}>Tech Stack</h5>
          {techStack.map(function (tech, i) {
            console.log(tech);
            return <div style={{ fontFamily: 'Poppins' }}>- {tech}</div>;
          })}
        </div>
      );
    }

    let titleHeader;
    if (this.state.hovered) {
      titleHeader = (
        <h1 style={{ color: color, fontFamily: fontFamily, textAlign: 'center' }}>
          {project.title}
        </h1>
      );
    } else {
      titleHeader = (
        <h3 style={{ color: color, fontFamily: fontFamily, textAlign: 'center' }}>
          {project.title}
        </h3>
      );
    }

    return (
      <div
        style={this.getCardStyle()}
        onMouseEnter={this.increaseCardSize}
        onMouseLeave={this.decreaseLeftSize}
      >
        {titleHeader}
        <div style={{ marginBottom: '9px', top: 0 }}>{project.description}</div>
        {techStackDiv}
        <GithubButton style={{ position: 'sticky', bottom: '0' }} link={project.githubLink} />
      </div>
    );
  }
}

export default ProjectCard;
