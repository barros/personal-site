import React from 'react';
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import memoji from '../images/memoji.jpg';


class TopBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle = (tab) => {
    if (!tab) {
      this.setState({ isOpen: true });
    } else {
      this.setState({ isOpen: !this.state.isOpen });
      this.props.toggleTab(tab);
    }
  }

  memojiStyle = {
    height: '35px',
    width: '35px',
    marginRight: '10px',
    borderRadius: '55px'
  }

  render() {
		return (
			<Navbar style={{backgroundColor: "#6A8A82"}} dark expand="md">
        <Container>
          <NavbarBrand href="/">
          <img src={memoji} className="profile-pic" style={this.memojiStyle} alt="jbp"/>
            <span>jbp</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={() => this.toggle('1')} style={{cursor: "pointer"}}>Experience</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => this.toggle('2')} style={{cursor: "pointer"}}>Education</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => this.toggle('3')} style={{cursor: "pointer"}}>Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => this.toggle('4')} style={{cursor: "pointer"}}>Skills</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
		);
  }
}

export default TopBar;