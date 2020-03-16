// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useRef, useEffect } from 'react';
import { graphql } from 'gatsby';

import { RootContainer, SEOContainer } from '~containers';
import { Main, Section, H1, H2, Input, Button, Toast } from '~components';
import { copyToClipboard, renderBlocks, pagePropTypes } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(frontmatter: { meta: { permalink: { eq: "/lab/passworld/" } } }) {
      frontmatter {
        ...MetaFragment
        blocks {
          title
          type
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function PassworldPage({
  data: {
    page: {
      frontmatter: { meta, blocks },
    },
  },
}) {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(10);
  const [chars, setChars] = useState({
    lowerChars: true,
    upperChars: true,
    specialChars: false,
    numbers: false,
  });
  const ToastRef = useRef();

  const handleGeneratePassword = () => {
    if (Object.values(chars).every((charSet) => !charSet)) {
      return setPassword('');
    }

    const generateSeed = () => {
      const random = window.crypto.getRandomValues(new Uint8Array(1));
      return random[0];
    };

    const generateRandomCharacter = () => {
      if (typeof window === 'undefined') {
        return '';
      }

      const types = {
        lowerChars: 'abcdefghijklmnopqrstuvwxyz',
        upperChars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        specialChars: '@#$%-_',
        numbers: '0123456789',
      };

      const availableTypes = Object.entries(types).reduce((acc, [key, value]) => {
        if (chars[key]) return [...acc, value];
        return acc;
      }, []);
      const pool = availableTypes[generateSeed() % availableTypes.length];

      return pool.charAt(generateSeed() % pool.length);
    };

    return setPassword(
      Array(...new Array(length))
        .map(() => generateRandomCharacter())
        .join(''),
    );
  };

  const handleChangeChars = ({ target }) =>
    setChars((prev) => ({
      ...prev,
      [target.value]: target.checked,
    }));

  const handleCopyToClipboard = () => {
    copyToClipboard(password);
    ToastRef.current.show({
      message: `${password} was copied to the clipboard`,
      css: 'background-color: var(--color-success);',
      delay: 2000,
    });
  };

  useEffect(() => {
    handleGeneratePassword();
  }, [length, chars]);

  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main
        css={`
          grid-template: 'hero' 'output' 'input';
          grid-gap: 10vh 1rem;

          @media screen and (min-width: 900px) {
            grid-template: 'hero hero' 'output input' / 1fr 1fr;
          }
        `}
      >
        {renderBlocks(blocks)}
        <Section
          css={`
            grid-area: output;
          `}
        >
          <H2 as="h1">Generated password</H2>
          <H1
            as="p"
            css={`
              hyphens: auto;
            `}
          >
            {password}
          </H1>
        </Section>
        <Section
          css={`
            grid-area: input;
          `}
        >
          <Input
            type="number"
            name="length"
            label="Password length"
            description="Don't go for any password that is shorter than 10 characters. Sh*t's not safe that way."
            value={length}
            css={`
              margin: 0 0 2rem;
            `}
            onChange={({ target }) => setLength(parseInt(target.value, 10))}
          />
          <Input
            type="checkbox"
            name="characters"
            label="Characters"
            options={[
              {
                value: 'lowerChars',
                label: 'Include lowercase letters',
                checked: chars.lowerChars,
              },
              {
                value: 'upperChars',
                label: 'Include uppercase letters',
                checked: chars.upperChars,
              },
              {
                value: 'specialChars',
                label: 'Include special characters',
                checked: chars.specialChars,
              },
              {
                value: 'numbers',
                label: 'Include numbers',
                checked: chars.numbers,
              },
            ]}
            css={`
              margin: 0 0 2rem;
            `}
            onChange={handleChangeChars}
          />
          <Button
            look="secondary"
            onClick={handleGeneratePassword}
            disabled={Object.values(chars).every((charSet) => !charSet)}
            grouped
          >
            Generate
          </Button>
          <Button look="secondary" onClick={handleCopyToClipboard} disabled={!password} grouped>
            Copy to clipboard
          </Button>
        </Section>
      </Main>
      <Toast ref={ToastRef} />
    </RootContainer>
  );
}

PassworldPage.propTypes = pagePropTypes;
