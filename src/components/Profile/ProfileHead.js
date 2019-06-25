import React from 'react';
import { Jumbotron, Container, Media } from 'reactstrap';
import profile from '../../data/profile.json';
import selfie from '../../images/jeff-selfie.jpg';

import '../../Presentational/Profile.css'

class ProfileHead extends React.Component {
  render() {
    return (
      <Jumbotron className="jumbotron">
        <Container>
          <h1 className="display-3" >{profile.title}</h1>
          <div style={{display: 'flex'}}>
            <Media>
              <Media className="selfie" object src={selfie} alt="Generic placeholder image" />
            </Media>
            <div>
              <h5>{profile.location}</h5>
            </div>
          </div>
          <h4>test</h4>
          <hr className="my-2" />
          <p className="lead">{profile.summary}</p>
        </Container>
      </Jumbotron>
    );
  }
}

export default ProfileHead;