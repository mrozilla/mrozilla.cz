// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';

// Components
import HeroContainer from '../containers/HeroContainer';

import { Link } from '../components/Navigation';

import { Section } from '../components/Layout';

// =============================================================================
// Component
// =============================================================================

export default function FourOhFourScreen() {
  return (
    <main>
      <Section>
        <HeroContainer
          key="404"
          content={{
            title:    '404.',
            subtitle: "the page you're looking for \n doesn't seem to exist.",
            text:     (
              <span>
                Everybody stay calm. We can get out of this.<br />Use the links in the top menu to
                navigate back into safe waters.<br />Or, just go back to <Link to="/">home</Link>.
              </span>
            ),
          }}
        />
      </Section>
    </main>
  );
}
