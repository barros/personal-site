import React from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import '../../../Presentational/ProjectCard.css';

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Row>
        <Col sm='6' style={{paddingBottom: '5'}}>
          <Card className="cardBody" body>
            <div className="cardTitle">
              <CardTitle>{this.props.title}</CardTitle>
            </div>
            <CardText>{this.props.description}</CardText>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default ProjectCard;