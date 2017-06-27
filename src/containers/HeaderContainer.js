// =============================================================================
// Imports
// =============================================================================

// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import { Header, Navbar, NavbarBlock, NavbarToggle } from '../components/Navigation';
import { Subtitle } from '../components/Typography';
import { Container } from '../components/Layout/Grid';
import { Link, NavLink } from '../components/Navigation';
import { Logo } from '../components/Iconography';
import { Reveal, Wiggle } from '../components/Effects';

// Styles
import { colour } from '../utils/styles';

// =============================================================================
// Component
// =============================================================================

export default class HeaderContainer extends Component {
  state = {
    isCollapsed: true
  };

  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  showMenu = () => {
    this.setState({
      isCollapsed: !this.state.isCollapsed,
    });
  };

  render() {
    return (
      <Header fixed>
        <Container>
          <Navbar>
            <Link to="/" bare venter>
              <Wiggle>{this.props.location.pathname === '/'
                ? <Logo />
                : <Reveal><Subtitle color={colour.brand.primary}>⟵</Subtitle></Reveal>}
              </Wiggle>
            </Link>
            <NavbarBlock isCollapsed={this.state.isCollapsed}>
              <NavLink to="/work">
                <Wiggle>
                  <Reveal delay="100ms">work</Reveal>
                </Wiggle>
              </NavLink>
              <NavLink to="/lab">
                <Wiggle>
                  <Reveal delay="200ms">lab</Reveal>
                </Wiggle>
              </NavLink>
              <NavLink to="https://medium.com/mrozilla/">
                <Wiggle>
                  <Reveal delay="300ms">blog</Reveal>
                </Wiggle>
              </NavLink>
              <NavLink to="/about">
                <Wiggle>
                  <Reveal delay="400ms">about</Reveal>
                </Wiggle>
              </NavLink>
            </NavbarBlock>
            <NavbarToggle isCollapsed={this.state.isCollapsed} onClick={this.showMenu} />
          </Navbar>
        </Container>
      </Header>
    );
  }
}
