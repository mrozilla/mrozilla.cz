// =============================================================================
// Import
// =============================================================================

// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import { Header, Navbar, NavbarBlock, NavbarToggle, Link, NavLink } from '../components/Navigation';
import { Subtitle } from '../components/Typography';
import { Flex, Container } from '../components/Layout';
import { Logo } from '../components/Iconography';
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
              <Flex alignItems="center" height="100%">
                {this.props.location.pathname === '/'
                  ? <Link to="/" isBare>
                    <Logo />
                  </Link>
                  : <Reveal>
                    <Subtitle
                      color={color.brand.primary}
                      onClick={() => this.props.history.goBack()}
                      cursor="pointer"
                    >
                        ⟵
                      </Subtitle>
                  </Reveal>}
              </Flex>
            </Wiggle>
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
            <NavbarToggle isCollapsed={this.state.isCollapsed} onClick={this.toggleMenu} />
          </Navbar>
        </Container>
      </Header>
    );
  }
}
