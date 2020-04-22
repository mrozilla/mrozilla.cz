// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import ReactDOM from 'react-dom';
import FocusLock from 'react-focus-lock';
import { bool, arrayOf, string, func } from 'prop-types';

import { Section } from '~components/layout/Section';
import { P } from '~components/text/P';
import { Ul, Li } from '~components/text/List';
import { Button } from '~components/interactive/Button';
import { Focusable } from '~components/interactive/Focusable';
import { Icon } from '~components/multimedia/Icon';
import Img from '~components/multimedia/Img';

import { useEventListener, useScrollLock, animation } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

const fadeUp = animation({
  from: {
    opacity: 0,
    transform: 'translateY(1vh)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  properties: '500ms',
});

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function Lightbox({
  images,
  portalRoot,
  isOpen,
  isPreviews: defaultIsPreviews,
  onClose,
}) {
  const [currentIdx, setCurrentIdx] = React.useState(0);
  const [isPreviews, setIsPreviews] = React.useState(defaultIsPreviews);

  const closeButtonRef = React.useRef();

  const { enableScrollLock, disableScrollLock } = useScrollLock();

  const handlePrevious = () => setCurrentIdx((prev) => (prev + images.length - 1) % images.length);
  const handleNext = () => setCurrentIdx((prev) => (prev + 1) % images.length);

  useEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      handlePrevious();
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      handleNext();
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      onClose();
    }
  });

  React.useEffect(() => {
    if (isOpen) {
      closeButtonRef.current.focus();
      enableScrollLock();
      return undefined;
    }
    disableScrollLock();
    return undefined;
  }, [isOpen]);

  if (!isOpen) return null;

  const header = (
    <header
      css={`
        display: flex;
        justify-content: space-between;
      `}
    >
      <P
        css={`
          padding: 0 0 0 2rem;
          align-self: center;
        `}
      >
        {currentIdx + 1} / {images.length}
      </P>
      <menu>
        <Button
          aria-label="Toggle previews"
          onClick={() => setIsPreviews((prev) => !prev)}
          css={`
            margin: 0 -2rem 0 0;
          `}
        >
          <Icon icon="FaTh" />
        </Button>
        <Button ref={closeButtonRef} aria-label="Close" onClick={onClose}>
          <Icon icon="FaTimes" />
        </Button>
      </menu>
    </header>
  );

  const body = (
    <div
      css={`
        max-height: 100%;
      `}
    >
      <Img
        src={images[currentIdx]}
        alt="random image"
        ratio={null}
        pictureProps={{ style: { height: '100%' } }}
        css={`
          object-fit: contain;
          background-color: transparent;
          animation: ${fadeUp};
        `}
      />
      <Ul>
        <Li
          css={`
            position: absolute;
            align-self: center;
          `}
        >
          <Button aria-label="Previous photo" onClick={handlePrevious}>
            <Icon icon="FaArrowLeft" />
          </Button>
        </Li>
        <Li
          css={`
            position: absolute;
            align-self: center;
            right: 0;
          `}
        >
          <Button aria-label="Next photo" onClick={handleNext}>
            <Icon icon="FaArrowRight" />
          </Button>
        </Li>
      </Ul>
    </div>
  );

  const footer = (
    <footer
      css={`
        overflow-x: scroll;
      `}
    >
      <Ul
        css={`
          grid-auto-flow: column;
          grid-auto-columns: 14rem;
          grid-gap: 1rem;
          padding: 1rem;
        `}
      >
        {images.map((src, i) => (
          <Li
            key={i} // eslint-disable-line react/no-array-index-key
            css={`
              position: relative;
              cursor: pointer;
            `}
          >
            <Img
              src={src}
              alt="random image"
              pictureProps={{ style: { height: 'calc(100% - 2rem)' } }}
            />
            <Focusable
              css={`
                &:hover,
                &:focus {
                  box-shadow: 0 0 0 2px hsla(var(--hsl-primary), 1);
                }
              `}
              onClick={() => setCurrentIdx(i)}
            />
          </Li>
        ))}
      </Ul>
    </footer>
  );

  return ReactDOM.createPortal(
    <FocusLock>
      <Section
        css={`
          position: fixed;
          width: 100vw;
          height: 100vh;
          top: 0;
          left: 0;
          z-index: var(--z-index-modal);

          display: grid;
          grid-template-rows: 6rem 1fr ${isPreviews ? '16rem' : '6rem'};
          background-color: hsla(var(--hsl-bg), 0.95);
        `}
      >
        {header}
        {body}
        {isPreviews && footer}
      </Section>
    </FocusLock>,
    document.querySelector(portalRoot),
  );
}

Lightbox.propTypes = {
  images: arrayOf(string).isRequired,
  portalRoot: string,
  isOpen: bool,
  isPreviews: bool,
  onClose: func.isRequired,
};

Lightbox.defaultProps = {
  portalRoot: '#___gatsby',
  isOpen: false,
  isPreviews: true,
};
