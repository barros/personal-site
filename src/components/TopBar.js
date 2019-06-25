import React from 'react';
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import memoji from '../images/memoji.jpg';


class TopBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    // this.memojiStyle = this.memojiStyle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
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
                <NavLink href="/profile/">Profile</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
		);
  }
}

export default TopBar;