// =============================================================================
// Import
// =============================================================================

// React
import React, { Component } from 'react';

// Components
import { Section, Container, Flex } from '../components/Layout';
import { Heading, Text } from '../components/Typography';
import { Button } from '../components/Buttons';

// =============================================================================
// Component
// =============================================================================

export default class CountOnMeScreen extends Component {
  state = {
    count: 0,
  };

  handleCount = (e, type) => {
    e.stopPropagation();
    this.setState({
      count:
        type !== undefined
          ? type === 'add' ? this.state.count + 1 : this.state.count - 1
          : 0,
    });

    if ('vibrate' in navigator) {
      type !== undefined
        ? type === 'add'
          ? navigator.vibrate(100)
          : navigator.vibrate([100, 100, 100])
        : navigator.vibrate(500);
    }
  };

  render() {
    return (
      <main
        style={{
          MozUserSelect:    'none',
          WebkitUserSelect: 'none',
          MSUserSelect:     'none',
          UserSelect:       'none',
        }}
      >
        <Section onClick={e => this.handleCount(e, 'add')}>
          <Container>
            <Heading textAlign="center">
              {this.state.count}
            </Heading>
            <Text textAlign="center" marginBottom="1rem">
              Click anywhere to add
            </Text>
            <Flex justifyContent="center">
              <Button
                type="primary"
                onClick={e => this.handleCount(e, 'subtract')}
              >
                Subtract
              </Button>
              <Button type="primary" onClick={e => this.handleCount(e)}>
                Reset
              </Button>
            </Flex>
          </Container>
        </Section>
      </main>
    );
  }
}
