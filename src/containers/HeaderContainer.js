// =============================================================================
// Import
// =============================================================================

// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import {
  Header,
  Navbar,
  NavbarBlock,
  NavbarToggle,
  NavLink,
} from '../components/Navigation';
import { Subtitle } from '../components/Typography';
import { Container } from '../components/Layout';
import { Logo } from '../components/Icons';
import { Reveal, Wiggle } from '../components/Effects';

// Styles
import { color } from '../utils/styles';

// =============================================================================
// Component
// =============================================================================

export default class HeaderContainer extends Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
    history: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    isCollapsed: true,
  };

  toggleMenu = () => {
    this.setState({
      isCollapsed: !this.state.isCollapsed,
    });
  };

  render() {
    return (
      <Header isFixed>
        <Container>
          <Navbar>
            <Wiggle>
              {this.props.location.pathname === '/'
                ? <Logo />
                : <Reveal>
                  <Subtitle
                    color={color.brand.primary}
                    onClick={() => this.props.history.goBack()}
                    cursor="pointer"
                  >
                      ←
                    </Subtitle>
                </Reveal>}
            </Wiggle>
            <NavbarBlock isCollapsed={this.state.isCollapsed}>
              <NavLink
                to="/work"
                onClick={
                  this.state.isCollapsed === false ? this.toggleMenu : null
                }
              >
                <Wiggle>
                  <Reveal delay="100ms">work</Reveal>
                </Wiggle>
              </NavLink>
              <NavLink
                to="/lab"
                onClick={
                  this.state.isCollapsed === false ? this.toggleMenu : null
                }
              >
                <Wiggle>
                  <Reveal delay="200ms">lab</Reveal>
                </Wiggle>
              </NavLink>
              <NavLink to="https://medium.com/mrozilla/" target="_blank">
                <Wiggle>
                  <Reveal delay="300ms">blog</Reveal>
                </Wiggle>
              </NavLink>
              <NavLink
                to="/about"
                onClick={
                  this.state.isCollapsed === false ? this.toggleMenu : null
                }
              >
                <Wiggle>
                  <Reveal delay="400ms">about</Reveal>
                </Wiggle>
              </NavLink>
            </NavbarBlock>
            <NavbarToggle
              isCollapsed={this.state.isCollapsed}
              onClick={this.toggleMenu}
            />
          </Navbar>
        </Container>
      </Header>
    );
  }
}
