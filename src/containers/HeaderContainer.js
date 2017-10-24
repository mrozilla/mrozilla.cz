// =============================================================================
// import
// =============================================================================

// react
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import {
  Header,
  Navbar,
  NavbarBlock,
  NavbarToggle,
  NavLink,
  BareLink,
} from '../components/Navigation';
import { Text } from '../components/Typography';
import { Container } from '../components/Layout';
import { Logo } from '../components/Icons';
import { Reveal, Wiggle } from '../components/Effects';

// styles
import { color } from '../utils/styles';

// content
import { menu } from '../utils/content';

// =============================================================================
// component
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
              {location.pathname === '/' ? (
                <BareLink to="/">
                  <Logo />
                </BareLink>
              ) : (
                <Reveal>
                  <Text
                    fontSize="4rem"
                    color={color.brand.primary}
                    onClick={() => history.goBack()}
                    cursor="pointer"
                  >
                    ←
                  </Text>
                </Reveal>
              )}
            </Wiggle>
            <NavbarBlock isCollapsed={isCollapsed}>
              {menu.map(({ to, name, target }) => (
                <NavLink
                  key={name}
                  to={to}
                  target={target}
                  onClick={isCollapsed === false ? this.toggleMenu : null}
                >
                  <Wiggle>{name}</Wiggle>
                </NavLink>
              ))}
            </NavbarBlock>
            <NavbarToggle isCollapsed={isCollapsed} onClick={this.toggleMenu} />
          </Navbar>
        </Container>
      </Header>
    );
  }
}
