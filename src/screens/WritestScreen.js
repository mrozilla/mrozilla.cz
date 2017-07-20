// =============================================================================
// Import
// =============================================================================

// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components

import { Section, Container, Row, Column } from '../components/Layout';
import { Text } from '../components/Typography';
import { TextAreaInput } from '../components/Forms';

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

  analyseText = (name, value) => {
    const rgx = {
      punctuation: /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g, // eslint-disable-line
      sentence:    /[^\r\n.!?]+(:?(:?\r\n|[\r\n]|[.!?])+|$)/gi,
      newLines:    /\r?\n|\r/g,
      spaces:      /\s/g,
    };
    function wordsArray(s) {
      if (s === '') return [];
      return s.toLowerCase().trim().replace(rgx.punctuation, '').split(/\s+/);
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
      return s.replace(rgx.newLines, '').replace(rgx.spaces).length;
    }
    function mostCommonWord(s) {
      return wordsArray(s).reduce(
        (a, b, i, arr) =>
          arr.filter(v => v === a).length >= arr.filter(v => v === b).length
            ? a
            : b,
        'N/A',
      );
    }
    function averageSentences(s) {
      return wordsArray(s).length / sentencesArray(s).length;
    }
    function readingMinutes(s) {
      return wordsArray(s).length / 275;
    }
    function speakingMinutes(s) {
      return wordsArray(s).length / 150;
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
      readingTime:           readingMinutes(value).toFixed(2),
      speakingTime:          speakingMinutes(value).toFixed(2),
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
                <TextAreaInput
                  placeholder="Start typing or paste text..."
                  name="input"
                  value={textArea}
                  onChange={this.analyseText}
                  padding="1rem"
                  height="100%"
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
                  {charCount.toLocaleString('en', { useGrouping: true })}
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
                  {charCountWithout.toLocaleString('en', { useGrouping: true })}
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
                  {wordsCount.toLocaleString('en', { useGrouping: true })}
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
                  {wordsCountUnique.toLocaleString('en', { useGrouping: true })}
                </Text>
                <Text
                  fontSize="0.5rem"
                  textTransform="uppercase"
                  letterSpacing="0.25em"
                  lineHeight="1rem"
                >
                  Most common word
                </Text>
                <Text marginBottom="1rem" isTruncated>
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
                  {sentencesCount.toLocaleString('en', { useGrouping: true })}
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
                  {sentencesCountAverage.toLocaleString('en', {
                    useGrouping: true,
                  })}
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
