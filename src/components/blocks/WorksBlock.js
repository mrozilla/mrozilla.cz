// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';

import { List, Title, Text, Link } from '../../components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function WorksBlock({ works }) {
  return (
    <List gridGap="2rem">
      {works.map(({
 node: {
 url, title, tagline, description, tags,
},
}) => (
  <List.Item>
    <Title fontSize="3rem" lineHeight="4rem" fontWeight="700" margin="0">
      <Link to={url} type="primary">
        {title}
      </Link>
    </Title>
    <Text
      opacity="0.75"
      fontSize="1.5rem"
      lineHeight="2rem"
      margin="0 0 1rem 0"
    >
      {tags.join(' • ')}
    </Text>
  </List.Item>
      ))}
    </List>
  );
}
