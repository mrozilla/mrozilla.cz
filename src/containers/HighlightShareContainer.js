// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useEffect } from 'react';
import { FaTwitter, FaFacebook, FaFacebookMessenger } from 'react-icons/fa';

import { Aside, Icon, Button, Ul, Li } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function HighlightShareContainer({ location }) {
  const [highlightedText, setHighlightedText] = useState('');
  const [position, setPosition] = useState({});

  const handleMouseUp = () => {
    const selection = document.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      if (range) {
        setPosition(range.getBoundingClientRect());
        setHighlightedText(document.getSelection().toString());
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, []);

  const handleShare = (service) => {
    const text = encodeURIComponent(highlightedText);
    const url = encodeURIComponent(location.href);

    if (service === 'twitter') {
      return window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_newtab');
    }

    if (service === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?quote=${text}&u=${url}`, '_newtab');
    }

    if (service === 'messenger') {
      window.open(
        `https://www.facebook.com/dialog/send?app_id=${
          process.env.GATSBY_FB_APP_ID
        }&link=${url}&redirect_uri=${url}`,
        '_newtab',
      );
    }

    return null;
  };

  return (
    highlightedText && (
      <Aside
        display="flex"
        justifyContent="center"
        position="absolute"
        top={`calc(${position.top + window.pageYOffset}px - 5rem)`}
        left={position.left}
        width={position.width}
      >
        <Ul
          position="relative"
          gridAutoFlow="column"
          borderRadius="0.5rem"
          padding="0 0.5rem"
          backgroundColor="var(--color-brand-primary)"
          boxShadow="0 0.5rem 1rem hsla(var(--hsl-text), 0.25)"
          after={{
            content:     "''",
            position:    'absolute',
            borderStyle: 'solid',
            borderWidth: '0.5rem',
            marginLeft:  '-0.5rem',
            top:         '100%',
            left:        '50%',

            borderColor: 'var(--color-brand-primary) transparent transparent transparent',
          }}
        >
          <Li lineHeight="3rem">
            <Button look="inverse" padding="0.5rem" onClick={() => handleShare('twitter')}>
              <Icon as={FaTwitter} fontSize="2.5rem" />
            </Button>
          </Li>
          <Li lineHeight="3rem">
            <Button look="inverse" padding="0.5rem" onClick={() => handleShare('facebook')}>
              <Icon as={FaFacebook} fontSize="2.5rem" />
            </Button>
          </Li>
          <Li lineHeight="3rem">
            <Button look="inverse" padding="0.5rem" onClick={() => handleShare('messenger')}>
              <Icon as={FaFacebookMessenger} fontSize="2.5rem" />
            </Button>
          </Li>
        </Ul>
      </Aside>
    )
  );
}
