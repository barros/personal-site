import React from 'react';
import {Jumbotron, Container, TabContent, TabPane, Nav, NavItem, NavLink, Media } from "reactstrap";
import classnames from 'classnames';
import Experience from "./Experience";
import Education from './Education';
import profile from '../data/profile.json';
import bgimage from '../images/welcome-mural-jackson-square.jpg';
import selfie from '../images/jeff-selfie.jpg';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.getTabColor = this.getTabColor.bind(this);
    this.state = {
      activeTab: '1'
    };
  }
  activeTabColor = "white"
  inactiveTabColor = "#c4dad4"

  getTabColor(tab) {
    if (this.state.activeTab === tab) {
      return this.activeTabColor
    }
    return this.inactiveTabColor
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }


  render() {
    return <div className="profileBg">
      <Jumbotron style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}>
        <Container>
          <h1 className="display-3" style={{fontWeight: 'bold', fontFamily: 'Josefin Sans'}}>{profile.title}</h1>
          <Media>
            <Media className="selfie" object src={selfie} alt="Generic placeholder image" />
          </Media>
          <hr className="my-2" />
          <p className="lead" style={{color: 'white', fontWeight: 'bold'}}>{profile.summary}</p>
        </Container>
      </Jumbotron>

      <Container>
        <Nav className="tabs" style={{width: '100%'}} tabs>
          <NavItem style={{backgroundColor: this.getTabColor('1')}}>
            <NavLink className={classnames({ active: this.state.activeTab === '1' })}
                     onClick={() => { this.toggle('1'); }}
                     style={{cursor: "pointer"}}>
              Experience
            </NavLink>
          </NavItem>
          <NavItem style={{backgroundColor: this.getTabColor('2')}}>
            <NavLink className={classnames({ active: this.state.activeTab === '2' })}
                     onClick={() => { this.toggle('2'); }}
                     style={{cursor: "pointer"}}>
              Education
            </NavLink>
          </NavItem>
          <NavItem style={{backgroundColor: this.getTabColor('3')}}>
            <NavLink className={classnames({ active: this.state.activeTab === '3' })}
                     onClick={() => { this.toggle('3'); }}
                     style={{cursor: "pointer"}}>
              Projects
            </NavLink>
          </NavItem>
          <NavItem style={{backgroundColor: this.getTabColor('4')}}>
            <NavLink className={classnames({ active: this.state.activeTab === '4' })}
                     onClick={() => { this.toggle('4'); }}
                     style={{cursor: "pointer"}}>
              Skills
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} style={{paddingTop: 20}}>
          <TabPane tabId="1">
            <Experience/>
          </TabPane>
          <TabPane tabId="2">
            <Education/>
          </TabPane>
          <TabPane tabId="3"> 
            <Education/>
          </TabPane>
          <TabPane tabId="4"> 
            <Education/>
          </TabPane>
        </TabContent>
      </Container>
    </div>;
  }
}

export default Profile;