import React from 'react';
import { Jumbotron, Container, Media, Alert } from 'reactstrap';
import profile from '../../data/profile.json';
import moment from 'moment';
import selfie from '../../images/jeff-selfie.jpg';

import '../../Presentational/Profile.css'

class ProfileHead extends React.Component {
  getBday = () => {
    const bday = moment(profile.birthdate);
    const today = moment(new Date());
    const age = today.diff(bday, 'years');
    return (`${age} years old`)
  }
  render() {
    return (
      <Jumbotron className="jumbotron">
        <Container>
          <h1 className="display-3" >{profile.title}</h1>
          <div style={{display: 'flex'}}>
            <Media>
              <Media className="selfie" object src={selfie} alt="Generic placeholder image" />
            </Media>
            <div style={{marginLeft: 30}}>
              <div id="location">{profile.location}</div>
              <div id="age">{this.getBday()}</div>
            </div>
          </div>
          <Alert color="primary" style={{textAlign: 'center', fontWeight: 'bold', boxShadow: '5px 5px 15px black'}}>{profile.jobSearch}</Alert>
          <hr className="my-2" />
          <p className="lead">{profile.summary}</p>
        </Container>
      </Jumbotron>
    );
  }
}

export default ProfileHead;