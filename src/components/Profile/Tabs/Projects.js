import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import ProjectCard from './ProjectCard';
import profile from '../../../data/profile.json';

class Projects extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            {profile.projects.map(function (project, i) {

            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Projects;