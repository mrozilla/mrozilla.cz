// =============================================================================
// Imports
// =============================================================================

// React
import React, { Component } from 'react';

// Components
import { Header, Navbar, NavbarBlock, NavbarToggle } from '../components/Navbar';
import Logo from '../utils/icons';
import { Container } from '../components/Grid';
import Link, { NavLink } from '../components/Link';

// =============================================================================
// Component
// =============================================================================

export default class HeaderContainer extends Component {
  state = {
    collapsed: true
  };

  showMenu = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Header fixed>
        <Container>
          <Navbar>
            <Link to="/">
              <Logo/>
            </Link>
            <NavbarBlock collapsed={this.state.collapsed}>
              <NavLink to="/work">Work</NavLink>
              <NavLink to="/lab">Lab</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/about">About</NavLink>
            </NavbarBlock>
            <NavbarToggle collapsed={this.state.collapsed} onClick={this.showMenu} />
          </Navbar>
        </Container>
      </Header>
    );
  }
}

// =============================================================================
// Export
// =============================================================================

