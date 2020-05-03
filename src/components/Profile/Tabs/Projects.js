import React from 'react';
import ProjectCard from './ProjectCard';
import profile from '../../../data/profile.json';

class Projects extends React.Component {
  render() {
    return (
      <div>
        <div style={{ height: '15px' }}>
          <hr className="my-2" />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {profile.projects.map(function (project, i) {
            return <ProjectCard project={project} />;
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
