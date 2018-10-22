// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import { graphql } from 'gatsby';

import {
  Main, Section, Input, H1, H2, P,
} from '../../components';
import { RootContainer, SEOContainer } from '../../containers';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: labJson(meta: { permalink: { eq: "/lab/writest" } }) {
      meta {
        title
        description
        permalink
        ogImage {
          ...OgImageFragment
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class WritestPage extends PureComponent {
  state = {
    textArea:              '',
    charCount:             0,
    charCountWithout:      0,
    wordsCount:            0,
    wordsCountUnique:      0,
    mostCommonWord:        'N/A',
    sentencesCount:        0,
    sentencesCountAverage: 0,
    readingTime:           0,
    speakingTime:          0,
  };

  handleAnalyseText = ({ target: { value } }) => {
    const rgx = {
      punctuation: /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g, // eslint-disable-line
      sentence:    /[^\r\n.!?]+(:?(:?\r\n|[\r\n]|[.!?])+|$)/gi,
      newLines:    /\r?\n|\r/g,
      spaces:      /\s/g,
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
        .map(item => item.trim());
    }
    function chars(s) {
      return s.replace(rgx.newLines, '').length;
    }
    function charsWithoutSpaces(s) {
      return s.replace(rgx.newLines, '').replace(rgx.spaces, '').length;
    }
    function mostCommonWord(s) {
      return wordsArray(s).reduce((a, b, i, arr) => {
        if (arr.filter(v => v === a).length >= arr.filter(v => v === b).length) {
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

    this.setState({
      textArea:              value,
      charCount:             chars(value),
      charCountWithout:      charsWithoutSpaces(value),
      wordsCount:            wordsArray(value).length,
      wordsCountUnique:      wordsSet(value).size,
      mostCommonWord:        mostCommonWord(value),
      sentencesCount:        sentencesArray(value).length,
      sentencesCountAverage: averageSentences(value),
      readingTime:           spentTime(value, 275),
      speakingTime:          spentTime(value, 150),
    });
  };

  render() {
    return (
      <RootContainer>
        <SEOContainer meta={this.props.data.page.meta} />
        <Main
          gridTemplate={{
            xs: "'input' 'stats'",
            md: "'input stats' / 2fr 1fr",
          }}
          gridGap="10vh 4rem"
        >
          <Section gridArea="input">
            <H1>words</H1>
            <Input
              name="writest"
              type="textarea"
              value={this.state.textArea}
              placeholder="Start typing or paste text..."
              backgroundColor="transparent"
              boxShadow="none"
              hoverBoxShadow="none"
              onInput={this.handleAnalyseText}
              autoFocus
            />
          </Section>
          <Section gridArea="stats" position="sticky" top="2rem" alignSelf="start">
            <H1>stats</H1>
            <H2>Characters with spaces</H2>
            <P>{this.state.charCount.toLocaleString()}</P>
            <H2>Characters without spaces</H2>
            <P>{this.state.charCountWithout.toLocaleString()}</P>
            <H2>Words</H2>
            <P>{this.state.wordsCount.toLocaleString()}</P>
            <H2>Unique words</H2>
            <P>{this.state.wordsCountUnique.toLocaleString()}</P>
            <H2>Most common word</H2>
            <P isTruncated>{this.state.mostCommonWord}</P>
            <H2>Sentences</H2>
            <P>{this.state.sentencesCount.toLocaleString()}</P>
            <H2>Average sentence length</H2>
            <P>{this.state.sentencesCountAverage.toLocaleString()} words</P>
            <H2>Reading time</H2>
            <P>{this.state.readingTime}</P>
            <H2>Speaking time</H2>
            <P>{this.state.speakingTime}</P>
          </Section>
        </Main>
      </RootContainer>
    );
  }
}
