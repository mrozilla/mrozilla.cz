// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

// react
import React, { PureComponent } from 'react';

// components
import {
  Main,
  Section,
  TextArea,
  Heading,
  Subheading,
  Text,
} from '../../components';
import { SEOContainer } from '../../containers';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  query WritestPage {
    labJson(meta: { permalink: { eq: "/lab/writest" } }) {
      meta {
        title
        description
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
        if (
          arr.filter(v => v === a).length >= arr.filter(v => v === b).length
        ) {
          return a;
        }
        return b;
      }, 'N/A');
    }
    function averageSentences(s) {
      return wordsArray(s).length / sentencesArray(s).length;
    }
    function spentTime(s, len) {
      return new Date(
        (wordsArray(s).length / len) * 60 * 1000,
      ).toLocaleTimeString('en-GB', { timeZone: 'UTC' });
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
      <Main
        gridTemplate={{
          xs: "'input' 'stats'",
          md: "'input stats' / 2fr 1fr",
        }}
        gridGap="10vh 4rem"
      >
        <SEOContainer seo={this.props.data.labJson.meta} />
        <Section gridArea="input">
          <Heading>words</Heading>
          <TextArea
            value={this.state.textArea}
            placeholder="Start typing or paste text..."
            onInput={this.handleAnalyseText}
            autoFocus
          />
        </Section>
        <Section gridArea="stats">
          <Heading>stats</Heading>
          <Subheading>Characters with spaces</Subheading>
          <Text>{this.state.charCount.toLocaleString()}</Text>
          <Subheading>Characters without spaces</Subheading>
          <Text>{this.state.charCountWithout.toLocaleString()}</Text>
          <Subheading>Words</Subheading>
          <Text>{this.state.wordsCount.toLocaleString()}</Text>
          <Subheading>Unique words</Subheading>
          <Text>{this.state.wordsCountUnique.toLocaleString()}</Text>
          <Subheading>Most common word</Subheading>
          <Text isTruncated>{this.state.mostCommonWord}</Text>
          <Subheading>Sentences</Subheading>
          <Text>{this.state.sentencesCount.toLocaleString()}</Text>
          <Subheading>Average sentence length</Subheading>
          <Text>{this.state.sentencesCountAverage.toLocaleString()} words</Text>
          <Subheading>Reading time</Subheading>
          <Text>{this.state.readingTime}</Text>
          <Subheading>Speaking time</Subheading>
          <Text>{this.state.speakingTime}</Text>
        </Section>
      </Main>
    );
  }
}
