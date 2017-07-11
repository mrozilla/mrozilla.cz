// =============================================================================
// Import
// =============================================================================

// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components

import { Section, Container, Row, Column } from '../components/Layout';
import { Text } from '../components/Typography';
import { TextArea } from '../components/Input';

// =============================================================================
// Component
// =============================================================================

export default class ColoursScreen extends Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };

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

  analyseText = (event) => {
    const value = event.target.value;
    const wordsArray = (s) => {
      if (s === '') {
        return [];
      }
      let outcome = s.toLowerCase();
      outcome = outcome.replace(
        /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[]^_`{|}~]/g,
        '',
      ); // exclude punctuation
      outcome = outcome.replace(/(^\s*)|(\s*$)/gi, ''); // exclude  start and end white-space
      outcome = outcome.replace(/[ ]{2,}/gi, ' '); // 2 or more space to 1
      outcome = outcome.replace(/\n /, '\n'); // exclude newline with a start spacing
      return outcome.split(' ');
    };
    const sentencesArray = (s) => {
      const re = /[^\r\n.!?]+(:?(:?\r\n|[\r\n]|[.!?])+|$)/gi;
      if (s === '') {
        return [];
      }
      s = s.replace(/\r?\n|\r/g, ''); // exclude newlines
      return s.match(re).map(item => item.trim());
    };
    const countUniqueFast = (arr) => {
      const counts = {};
      for (let i = 0; i < arr.length; i++) {
        counts[arr[i]] = 1 + (counts[arr[i]] || 0);
      }
      return counts;
    };
    const countChars = s => (s === '' ? 0 : s.replace(/\r?\n|\r/g, '').length);
    const countCharsWithout = (s) => {
      if (s === '') {
        return 0;
      }
      s = s.replace(/\r?\n|\r/g, ''); // exclude newlines
      s = s.replace(/\s/g, ''); // exclude spaces
      return s.length;
    };
    const countWordsUnique = s => Object.keys(countUniqueFast(wordsArray(s))).length;
    const mostCommonWord = (s) => {
      const obj = countUniqueFast(wordsArray(s));
      return Object.keys(obj).length === 0
        ? 'N/A'
        : Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
    };
    const countAverageSentences = s =>
      Math.round(wordsArray(s).length / sentencesArray(s).length * 100) / 100 || 0;
    const countReadingMinutes = s => Math.round(wordsArray(s).length / 275 * 100) / 100;
    const countSpeakingMinutes = s => Math.round(wordsArray(s).length / 150 * 100) / 100;

    this.setState({
      textArea:              value,
      charCount:             countChars(value),
      charCountWithout:      countCharsWithout(value),
      wordsCount:            wordsArray(value).length,
      wordsCountUnique:      countWordsUnique(value),
      mostCommonWord:        mostCommonWord(value),
      sentencesCount:        sentencesArray(value).length,
      sentencesCountAverage: countAverageSentences(value),
      readingTime:           countReadingMinutes(value),
      speakingTime:          countSpeakingMinutes(value),
    });
  };

  render() {
    const {
      textArea,
      charCount,
      charCountWithout,
      wordsCount,
      wordsCountUnique,
      mostCommonWord,
      sentencesCount,
      sentencesCountAverage,
      readingTime,
      speakingTime,
    } = this.state;
    return (
      <main>
        <Section marginTop="5vh">
          <Container>
            <Row>
              <Column lg={2} />
              <Column lg={8}>
                <TextArea
                  placeholder="Start typing or paste text..."
                  value={textArea}
                  padding="1rem"
                  onChange={this.analyseText}
                />
              </Column>
              <Column lg={2}>
                <Text
                  fontSize="0.5rem"
                  textTransform="uppercase"
                  letterSpacing="0.25em"
                  lineHeight="1rem"
                >
                  Characters with spaces
                </Text>
                <Text marginBottom="1rem">
                  {charCount}
                </Text>
                <Text
                  fontSize="0.5rem"
                  textTransform="uppercase"
                  letterSpacing="0.25em"
                  lineHeight="1rem"
                >
                  Characters without spaces
                </Text>
                <Text marginBottom="1rem">
                  {charCountWithout}
                </Text>
                <Text
                  fontSize="0.5rem"
                  textTransform="uppercase"
                  letterSpacing="0.25em"
                  lineHeight="1rem"
                >
                  Words
                </Text>
                <Text marginBottom="1rem">
                  {wordsCount}
                </Text>
                <Text
                  fontSize="0.5rem"
                  textTransform="uppercase"
                  letterSpacing="0.25em"
                  lineHeight="1rem"
                >
                  Unique words
                </Text>
                <Text marginBottom="1rem">
                  {wordsCountUnique}
                </Text>
                <Text
                  fontSize="0.5rem"
                  textTransform="uppercase"
                  letterSpacing="0.25em"
                  lineHeight="1rem"
                >
                  Most common word
                </Text>
                <Text marginBottom="1rem">
                  {mostCommonWord}
                </Text>
                <Text
                  fontSize="0.5rem"
                  textTransform="uppercase"
                  letterSpacing="0.25em"
                  lineHeight="1rem"
                >
                  Sentences
                </Text>
                <Text marginBottom="1rem">
                  {sentencesCount}
                </Text>
                <Text
                  fontSize="0.5rem"
                  textTransform="uppercase"
                  letterSpacing="0.25em"
                  lineHeight="1rem"
                >
                  Average sentence length
                </Text>
                <Text marginBottom="1rem">
                  {sentencesCountAverage}
                </Text>
                <Text
                  fontSize="0.5rem"
                  textTransform="uppercase"
                  letterSpacing="0.25em"
                  lineHeight="1rem"
                >
                  Reading time
                </Text>
                <Text marginBottom="1rem">
                  {readingTime} min
                </Text>
                <Text
                  fontSize="0.5rem"
                  textTransform="uppercase"
                  letterSpacing="0.25em"
                  lineHeight="1rem"
                >
                  Speaking time
                </Text>
                <Text marginBottom="1rem">
                  {speakingTime} min
                </Text>
              </Column>
            </Row>
          </Container>
        </Section>
      </main>
    );
  }
}
