import React from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import memoji from '../images/memoji.jpg';

class TopBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle = tab => {
    // add "tab==='4'" to conditional when new tab is added
    if (tab === '1' || tab === '2' || tab === '3' || tab === '4') {
      if (this.state.isOpen) {
        this.setState({ isOpen: false });
      }
      this.props.toggleTab(tab);
    } else {
      this.setState({ isOpen: !this.state.isOpen });
    }
  };

  memojiStyle = {
    height: '40px',
    width: '38.5px',
    marginRight: '10px',
    borderRadius: '50px'
  };

  render() {
    return (
      <Navbar style={{ backgroundColor: '#6A8A82' }} dark expand="md">
        <Container>
          <NavbarBrand href="/">
            <img src={memoji} className="profile-pic" style={this.memojiStyle} alt="jbp" />
            <span>jbp</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={() => this.toggle('1')} style={{ cursor: 'pointer' }}>
                  Experience
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => this.toggle('2')} style={{ cursor: 'pointer' }}>
                  Education
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => this.toggle('3')} style={{ cursor: 'pointer' }}>
                  Projects
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default TopBar;
