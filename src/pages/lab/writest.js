// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState } from 'react';
import { graphql } from 'gatsby';

import { RootContainer, SEOContainer } from '~containers';
import { Main, Section, Input, H1, H2, P } from '~components';
import { pagePropTypes } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(frontmatter: { meta: { permalink: { eq: "/lab/writest/" } } }) {
      frontmatter {
        ...MetaFragment
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function WritestPage({
  data: {
    page: {
      frontmatter: { meta },
    },
  },
}) {
  const [input, setInput] = useState('');
  const [stats, setStats] = useState({
    charCount: 0,
    charCountWithout: 0,
    wordsCount: 0,
    wordsCountUnique: 0,
    mostCommonWord: 'N/A',
    sentencesCount: 0,
    sentencesCountAverage: 0,
    readingTime: 0,
    speakingTime: 0,
  });

  const handleAnalyseText = ({ target: { value } }) => {
    const rgx = {
      punctuation: /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g, // eslint-disable-line
      sentence: /[^\r\n.!?]+(:?(:?\r\n|[\r\n]|[.!?])+|$)/gi,
      newLines: /\r?\n|\r/g,
      spaces: /\s/g,
    };
    function wordsArray(s) {
      if (s === '') return [];
      return s
        .toLowerCase()
        .trim()
        .replace(rgx.punctuation, '')
        .split(/\s+/);
    }
    function wordsSet(s) {
      return new Set(wordsArray(s));
    }
    function sentencesArray(s) {
      if (s === '') return [];
      return s
        .replace(rgx.newLines, ' ')
        .match(rgx.sentence)
        .map((item) => item.trim());
    }
    function chars(s) {
      return s.replace(rgx.newLines, '').length;
    }
    function charsWithoutSpaces(s) {
      return s.replace(rgx.newLines, '').replace(rgx.spaces, '').length;
    }
    function mostCommonWord(s) {
      return wordsArray(s).reduce((a, b, i, arr) => {
        if (arr.filter((v) => v === a).length >= arr.filter((v) => v === b).length) {
          return a;
        }
        return b;
      }, 'N/A');
    }
    function averageSentences(s) {
      return wordsArray(s).length / sentencesArray(s).length;
    }
    function spentTime(s, len) {
      return new Date((wordsArray(s).length / len) * 60 * 1000).toLocaleTimeString('en-GB', {
        timeZone: 'UTC',
      });
    }

    setInput(value);
    setStats({
      charCount: chars(value),
      charCountWithout: charsWithoutSpaces(value),
      wordsCount: wordsArray(value).length,
      wordsCountUnique: wordsSet(value).size,
      mostCommonWord: mostCommonWord(value),
      sentencesCount: sentencesArray(value).length,
      sentencesCountAverage: averageSentences(value),
      readingTime: spentTime(value, 275),
      speakingTime: spentTime(value, 150),
    });
  };

  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main
        css={`
          grid-template: 'input' 'stats';
          grid-gap: 10vh 4rem;

          @media screen and (min-width: 900px) {
            grid-template: 'input stats' / 2fr 1fr;
          }
        `}
      >
        <Section
          css={`
            grid-area: input;
          `}
        >
          <H1>Words</H1>
          <Input
            type="textarea"
            name="writest"
            value={input}
            placeholder="Start typing or paste text..."
            label="Your words"
            autoFocus
            onChange={handleAnalyseText}
          />
        </Section>
        <Section
          css={`
            grid-area: stats;
            position: sticky;
            top: 2rem;
            align-self: start;
          `}
        >
          <H1>Stats</H1>
          <H2>Characters with spaces</H2>
          <P>{stats.charCount.toLocaleString()}</P>
          <H2>Characters without spaces</H2>
          <P>{stats.charCountWithout.toLocaleString()}</P>
          <H2>Words</H2>
          <P>{stats.wordsCount.toLocaleString()}</P>
          <H2>Unique words</H2>
          <P>{stats.wordsCountUnique.toLocaleString()}</P>
          <H2>Most common word</H2>
          <P isTruncated>{stats.mostCommonWord}</P>
          <H2>Sentences</H2>
          <P>{stats.sentencesCount.toLocaleString()}</P>
          <H2>Average sentence length</H2>
          <P>{stats.sentencesCountAverage.toLocaleString()} words</P>
          <H2>Reading time</H2>
          <P>{stats.readingTime}</P>
          <H2>Speaking time</H2>
          <P>{stats.speakingTime}</P>
        </Section>
      </Main>
    </RootContainer>
  );
}

WritestPage.propTypes = pagePropTypes;
