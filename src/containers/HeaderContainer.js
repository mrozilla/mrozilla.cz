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
  Link,
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
    const { location, history } = this.props;
    const { isCollapsed } = this.state;

    return (
      <Header isFixed>
        <Container>
          <Navbar>
            <Wiggle>
              {location.pathname === '/'
                ? <Link to="/" isBare>
                  <Logo />
                </Link>
                : <Reveal>
                  <Subtitle
                    color={color.brand.primary}
                    onClick={() => history.goBack()}
                    cursor="pointer"
                  >
                    ←
                  </Subtitle>
                </Reveal>}
            </Wiggle>
            <NavbarBlock isCollapsed={isCollapsed}>
              <NavLink
                to="/work"
                onClick={isCollapsed === false ? this.toggleMenu : null}
              >
                <Wiggle>work</Wiggle>
              </NavLink>
              <NavLink
                to="/lab"
                onClick={isCollapsed === false ? this.toggleMenu : null}
              >
                <Wiggle>lab</Wiggle>
              </NavLink>
              <NavLink to="https://medium.com/mrozilla/" target="_blank">
                <Wiggle>blog</Wiggle>
              </NavLink>
              <NavLink
                to="/about"
                onClick={isCollapsed === false ? this.toggleMenu : null}
              >
                <Wiggle>about</Wiggle>
              </NavLink>
            </NavbarBlock>
            <NavbarToggle isCollapsed={isCollapsed} onClick={this.toggleMenu} />
          </Navbar>
        </Container>
      </Header>
    );
  }
}
