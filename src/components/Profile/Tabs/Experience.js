import React from "react";
import { Container, Row, Col } from "reactstrap";
import profile from "../../../data/profile";
import ExperienceCard from './ExperienceCard.js';

import '../../../Presentational/Experience.css';

class Experience extends React.Component {
  render() {
    return <Container>
      <Row>
        <Col>
          {profile.experiences.map(function (experience, i) {
            return <ExperienceCard experience={experience}/>
          })}
        </Col>
      </Row>
    </Container>
  }
}

export default Experience;