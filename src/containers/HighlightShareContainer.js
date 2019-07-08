// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';

import { Aside, Icon, Button, Ul, Li } from '~components';
import { useSocialShare, useSelection, animation } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function HighlightShareContainer({ location }) {
  const [selectedText, selectedTextPosition] = useSelection();
  const share = useSocialShare({ text: selectedText, url: location.href });

  return (
    selectedText && (
      <Aside
        css={`
          position: absolute;

          display: flex;
          justify-content: center;
          top: calc(${selectedTextPosition.top + window.pageYOffset}px - 5rem);
          left: ${selectedTextPosition.left}px;
          width: ${selectedTextPosition.width}px;
          animation: ${animation({
          from: {
            opacity:   '0',
            transform: 'translateY(-0.5rem)',
          },
          to: {
            opacity:   '1',
            transform: 'translateY(0)',
          },
          properties: '250ms',
        })};
        `}
      >
        <Ul
          css={`
            position: relative;

            grid-auto-flow: column;
            border-radius: 0.5rem;
            padding: 0 0.5rem;
            background-color: var(--color-brand-primary);
            box-shadow: 0 0.5rem 1rem hsla(-var(--hsl-text), 0.25);
            line-height: 3rem;

            &::after {
              content: '';
              position: absolute;
              border-style: solid;
              border-width: 0.5rem;
              margin-left: -0.5rem;
              top: 100%;
              left: 50%;
              border-color: var(--color-brand-primary) transparent transparent transparent;
            }
          `}
        >
          <Li>
            <Button
              look="inverse"
              css={`
                padding: 0.5rem;
              `}
              onClick={() => share('twitter')}
            >
              <Icon
                icon="FaTwitter"
                css={`
                  font-size: 2.5rem;
                `}
              />
            </Button>
          </Li>
          <Li>
            <Button
              look="inverse"
              css={`
                padding: 0.5rem;
              `}
              onClick={() => share('facebook')}
            >
              <Icon
                icon="FaFacebook"
                css={`
                  font-size: 2.5rem;
                `}
              />
            </Button>
          </Li>
          <Li>
            <Button
              look="inverse"
              css={`
                padding: 0.5rem;
              `}
              onClick={() => share('messenger')}
            >
              <Icon
                icon="FaFacebookMessenger"
                css={`
                  font-size: 2.5rem;
                `}
              />
            </Button>
          </Li>
        </Ul>
      </Aside>
    )
  );
}
