// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { instanceOf } from 'prop-types';

import { P, Link } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function AvailabilityContainer({
  nowDate = new Date(),
  availabilityDate = new Date(),
}) {
  const availableDate = new Date(
    Math.max(new Date(nowDate.getFullYear(), nowDate.getMonth() + 1), availabilityDate),
  );

  return (
    <P fontSize="3rem">
      <Link to="/contact" look="secondary">
        {availableDate.toLocaleString('en-GB', {
          month: 'long',
          year:  'numeric',
        })}
      </Link>
    </P>
  );
}

AvailabilityContainer.propTypes = {
  nowDate:          instanceOf(Date),
  availabilityDate: instanceOf(Date),
};

AvailabilityContainer.defaultProps = {
  nowDate:          new Date(),
  availabilityDate: new Date(),
};
