// =============================================================================
// import
// =============================================================================

// react
import React from 'react';

// components
import { OrganisedList, ListItem } from '../../components/Lists';

// =============================================================================
// export
// =============================================================================

export default function traverseList(arr, type, level = 0) {
  const levels = ['1', 'a', 'i'];
  if (type === 'ul') {
    return null; // TODO add unorganised list
  }

  return (
    <OrganisedList key={arr[0]} type={levels[level]}>
      {arr.map((item) => {
        if (Array.isArray(item)) {
          return traverseList(item, type, level === 2 ? 0 : level + 1);
        }

        return <ListItem key={item}>{item}</ListItem>;
      })}
    </OrganisedList>
  );
}
