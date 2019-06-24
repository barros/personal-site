import React from 'react';
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


class TopBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
		return (
			<Navbar style={{backgroundColor: "#6A8A82"}} dark expand="md">
        <Container>
          <NavbarBrand href="/">
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