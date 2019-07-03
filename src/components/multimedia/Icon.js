// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { string } from 'prop-types';

import { Text } from '~components/primitives/Text';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export function Icon({ icon, ...rest }) {
  const iconImport = require('react-icons/fa')[icon]; // eslint-disable-line global-require

  return <Text as={iconImport} {...rest} />;
}

Icon.propTypes = {
  icon: string.isRequired,
};
