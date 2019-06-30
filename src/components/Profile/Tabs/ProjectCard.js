import React from 'react';
import '../../../Presentational/ProjectCard.css';
import GithubButton from '../../../buttons/GHProjectButton';

class ProjectCard extends React.Component {
  cardStyle = {
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '500px',
    backgroundColor: 'white',
    borderTopLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    paddingLeft: '15px',
    paddingRight: '15px',
    paddingTop: '25px',
    paddingBottom: '25px',
    marginBottom: '30px',
    boxShadow: '10px 10px 20px #888888'
  }

  render() {
    const project = this.props.project;
    const color = project.titleColor;
    const fontFamily = project.font;
    return (
      <div style={this.cardStyle}>
        <h3 style={{color: color, fontFamily: fontFamily, textAlign: 'center'}}>{project.title}</h3>
        <div style={{marginBottom: '9px', top: 0}}>{project.description}</div>
        <GithubButton style={{position:'sticky', bottom:'0'}} link={ project.githubLink}/>
      </div>
    );
  }
}

export default ProjectCard;