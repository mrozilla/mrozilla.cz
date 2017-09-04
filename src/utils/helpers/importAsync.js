// =============================================================================
// Import
// =============================================================================

// React
import React, { Component } from 'react';

// Components
import { Text } from '../../components/Typography';

// =============================================================================
// Component
// =============================================================================

export default function asyncComponent(importComponent) {
  return class AsyncComponent extends Component {
    state = {
      component: null,
    };

    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({
        component,
      });
    }

    render() {
      const C = this.state.component;
      return C
        ? <C {...this.props} />
        : <Text textAlign="center" fontSize="16px" lineHeight="100vh">
            This is a loader...
          </Text>;
    }
  };
}
