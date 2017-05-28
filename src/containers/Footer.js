// =============================================================================
// Imports
// =============================================================================

// React
import React, { Component } from 'react';

// Components
import Footer from '../components/Footer';
import Logo from '../utils/icons';
import { Container } from '../components/Grid';
import Link from '../components/Link';

// =============================================================================
// Component
// =============================================================================

export default class FooterContainer extends Component {
  render() {
    return (
      <Container>
        <Footer>
          <Link to="/">Twitter</Link>
          <span>Made with <span role="img" aria-label="beer">🍺</span></span>
          <Link to="/"><Logo/></Link>
        </Footer>
      </Container>
    );
  }
}

// =============================================================================
// Export
// =============================================================================

