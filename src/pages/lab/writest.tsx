import React from "react";

import { RootContainer, SEOContainer } from "~containers";
import { Main, Hero, Heading, TextAreaInput, Text } from "~components";

export default function WritestPage() {
  const [input, setInput] = React.useState("");
  const [stats, setStats] = React.useState({
    charCount: 0,
    charCountWithout: 0,
    wordsCount: 0,
    wordsCountUnique: 0,
    mostCommonWord: "N/A",
    sentencesCount: 0,
    sentencesCountAverage: 0,
    readingTime: "0",
    speakingTime: "0",
  });

  const handleAnalyseText: React.ChangeEventHandler<HTMLTextAreaElement> = ({
    target: { value },
  }) => {
    const rgx = {
      punctuation: /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g,
      sentence: /[^\r\n.!?]+(:?(:?\r\n|[\r\n]|[.!?])+|$)/gi,
      newLines: /\r?\n|\r/g,
      spaces: /\s/g,
    };
    function wordsArray(s: string) {
      if (s === "") return [];
      return s.toLowerCase().trim().replace(rgx.punctuation, "").split(/\s+/);
    }
    function wordsSet(s: string) {
      return new Set(wordsArray(s));
    }
    function sentencesArray(s: string) {
      return (
        s
          .replace(rgx.newLines, " ")
          .match(rgx.sentence)
          ?.map((item) => item.trim()) || []
      );
    }
    function chars(s: string) {
      return s.replace(rgx.newLines, "").length;
    }
    function charsWithoutSpaces(s: string) {
      return s.replace(rgx.newLines, "").replace(rgx.spaces, "").length;
    }
    function mostCommonWord(s: string) {
      return wordsArray(s).reduce((a, b, _, arr) => {
        if (arr.filter((v) => v === a).length >= arr.filter((v) => v === b).length) {
          return a;
        }
        return b;
      }, "N/A");
    }
    function averageSentences(s: string) {
      return wordsArray(s).length / sentencesArray(s).length;
    }
    function spentTime(s: string, speed: number) {
      return new Date((wordsArray(s).length / speed) * 60 * 1000).toLocaleTimeString("en-GB", {
        timeZone: "UTC",
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
      <Main layout="writest">
        <Hero
          title="Get all the stats about your copy—character count, unique & most common words, sentence length, speaking/reading time, etc."
          codeLink="https://github.com/mrozilla/mrozilla.cz/blob/master/src/pages/lab/writest.tsx"
        />
        <section>
          <TextAreaInput
            name="writest"
            value={input}
            placeholder="Start typing or paste text..."
            label="Your words"
            autoFocus
            onChange={handleAnalyseText}
          />
        </section>
        <section
          style={{
            position: "sticky",
            top: "2rem",
            alignSelf: "start",
          }}
        >
          <Heading tag="h3" look="h2">
            Characters with spaces
          </Heading>
          <Text>{stats.charCount.toLocaleString()}</Text>
          <Heading tag="h3" look="h2">
            Characters without spaces
          </Heading>
          <Text>{stats.charCountWithout.toLocaleString()}</Text>
          <Heading tag="h3" look="h2">
            Words
          </Heading>
          <Text>{stats.wordsCount.toLocaleString()}</Text>
          <Heading tag="h3" look="h2">
            Unique words
          </Heading>
          <Text>{stats.wordsCountUnique.toLocaleString()}</Text>
          <Heading tag="h3" look="h2">
            Most common word
          </Heading>
          <Text>{stats.mostCommonWord}</Text>
          <Heading tag="h3" look="h2">
            Sentences
          </Heading>
          <Text>{stats.sentencesCount.toLocaleString()}</Text>
          <Heading tag="h3" look="h2">
            Average sentence length
          </Heading>
          <Text>{stats.sentencesCountAverage.toLocaleString()} words</Text>
          <Heading tag="h3" look="h2">
            Reading time
          </Heading>
          <Text>{stats.readingTime}</Text>
          <Heading tag="h3" look="h2">
            Speaking time
          </Heading>
          <Text>{stats.speakingTime}</Text>
        </section>
      </Main>
    </RootContainer>
  );
}

export const Head = () => {
  return (
    <SEOContainer
      title="Writest"
      description="Get all the stats about your copy—character count, unique & most common words, sentence length, speaking/reading time, etc."
      permalink="/lab/writest"
      ogImage="/assets/og.png"
    />
  );
};
