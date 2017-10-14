// =============================================================================
// Import
// =============================================================================

// react
import React from 'react';

// components
import { Section, Container, Row, Column } from '../components/Layout';
import { Reveal } from '../components/Effects';
import HeroContainer from '../containers/HeroContainer';

// helpers
import { traverseList } from '../utils/helpers';

// content
import content from '../utils/content';

// =============================================================================
// Component
// =============================================================================

export default function LegalScreen() {
  return (
    <main>
      <Section>
        <HeroContainer content={content.pages.legal.top} />
      </Section>
      <Section marginTop="-25vh" id="below">
        <Container>
          <Row>
            <Column lg="9">
              <Reveal delay="1000ms">
                {traverseList(content.pages.legal.text, 'ol')}
              </Reveal>
            </Column>
          </Row>
        </Container>
      </Section>
    </main>
  );
}
