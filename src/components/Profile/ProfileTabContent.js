import React from 'react';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import Experience from './Tabs/Experience';
import Education from './Tabs/Education';
import ProjectCard from './Tabs/ProjectCard';

class ProfileTabContent extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.getTabStyle = this.getTabStyle.bind(this);
    this.isSelected = this.isSelected.bind(this);
    this.state = {
      activeTab: '1'
    };
  }
  activeTabColor = "white"
  inactiveTabColor = "#c4dad4"

  getTabStyle(tab) {
    if (this.state.activeTab === tab) {
      return {backgroundColor: this.activeTabColor, borderTopRightRadius: '5px', borderTopLeftRadius: '5px', width: '250px', textAlign: 'center'}
    }
    return {backgroundColor: this.inactiveTabColor, borderTopRightRadius: '5px', borderTopLeftRadius: '5px', width: '258px', textAlign: 'center'}
  }

  isSelected(tab) {
    if (this.state.activeTab === tab) {
      return {backgroundColor: '#9a7f53', width: '7px', borderTopRightRadius: '10px'}
    }
    return
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  
  render() {
    return (
      <Container>
        <Nav style={{fontFamily: 'Josefin Sans', fontSize: '14pt', }} tabs>
          <NavItem style={this.getTabStyle('1')}>
            <NavLink className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}
                    style={{cursor: "pointer"}}>
              Experience
            </NavLink>
          </NavItem>
          <span style={this.isSelected('1')} />
          <NavItem style={this.getTabStyle('2')}>
            <NavLink className={classnames({ active: this.state.activeTab === '2' })}
                     onClick={() => { this.toggle('2'); }}
                     style={{cursor: "pointer"}}>
              Education
            </NavLink>
          </NavItem>
          <span style={this.isSelected('2')} />
          <NavItem style={this.getTabStyle('3')}>
            <NavLink className={classnames({ active: this.state.activeTab === '3' })}
                     onClick={() => { this.toggle('3'); }}
                     style={{cursor: "pointer"}}>
              Projects
            </NavLink>
          </NavItem>
          <span style={this.isSelected('3')} />
          <NavItem style={this.getTabStyle('4')}>
            <NavLink className={classnames({ active: this.state.activeTab === '4' })}
                     onClick={() => { this.toggle('4'); }}
                     style={{cursor: "pointer"}}>
              Skills
            </NavLink>
          </NavItem>
          <span style={this.isSelected('4')} />
        </Nav>
        <TabContent activeTab={this.state.activeTab} style={{paddingTop: 20, paddingBottom: 20}}>
          <TabPane tabId="1">
            <Experience/>
          </TabPane>
          <TabPane tabId="2">
            <Education/>
          </TabPane>
          <TabPane tabId="3"> 
            <ProjectCard title="test" description="test 2"/>
          </TabPane>
          <TabPane tabId="4"> 
            <Education/>
          </TabPane>
        </TabContent>
      </Container>
    );
  }
}

export default ProfileTabContent;