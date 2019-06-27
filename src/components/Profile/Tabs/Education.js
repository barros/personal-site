import React from 'react';
import {Container, Row, Col, Media} from 'reactstrap';
import profile from '../../../data/profile.json';

import '../../../Presentational/Education.css'

class Education extends React.Component {
  render() {
    return (
      <div>
        <div style={{height: '15px'}}>
          <hr className="my-2" /> 
        </div>
        <div>
          {profile.studies.map(function (study, i) {
            return <Media key={i}>
              <Media left top href={study.url}>
                <Media className="eduLogo" object src={study.logo} alt={study.institute}/>
              </Media>
              <Media body>
                <Media heading>
                  <a href={study.url} style={{color:"black"}}>{study.institute}</a>
                  <h6 style={{color: '#343a40'}}>Computer Science, B.A.</h6>
                </Media>
                {
                  [
                    {
                      "key": "Graduation Year",
                      "value": study.graduationYear
                    },
                    {
                      "key": "Duration",
                      "value": study.durationInYears + " years"
                    }
                  ].map(function (object, i) {
                    return <div>
                      <Row>
                        <Col className="formLabel" style={{fontSize: 20, color: "#444444"}}>{object.key}:</Col>
                      </Row>
                      <Row>
                        <Col style={{color: "black"}}>{object.value}</Col>
                      </Row>
                    </div>
                  })
                }
              </Media>
            </Media>
          })}
        </div>
      </div>
    );
  }
}

export default Education;