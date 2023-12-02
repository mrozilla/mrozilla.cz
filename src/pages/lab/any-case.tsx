import React from "react";

import { RootContainer, SEOContainer } from "~containers";
import { Main, Hero, TextInput } from "~components";

export default function AnyCasePage() {
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState({
    "lower case": "",
    "UPPER CASE": "",
    "Title Case": "",
    "Sentence case": "",
    "dot.case": "",
    "url-case": "",
    "path/case": "",
    "snake-case": "",
    CONSTANT_CASE: "",
    "Header-Case": "",
    PascalCase: "",
    camelCase: "",
  });

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    const changeCase = {
      toLowerCase: (s: string) => s.toLowerCase(),
      toUpperCase: (s: string) => s.toUpperCase(),
      toTitleCase: (s: string) =>
        s
          .split(" ")
          .map((w) => w.charAt(0).toUpperCase() + w.substr(1).toLowerCase())
          .join(" "),
      toSentenceCase: (s: string) =>
        s
          .split(". ")
          .map((w) => w.charAt(0).toUpperCase() + w.substr(1).toLowerCase())
          .join(". "),
      toDotCase: (s: string) =>
        s
          .split(" ")
          .map((w) => changeCase.toLowerCase(w))
          .join("."),
      toURLCase: (s: string) =>
        s
          .split(" ")
          .map((w) => changeCase.toLowerCase(w))
          .join("-"),
      toPathCase: (s: string) =>
        s
          .split(" ")
          .map((w) => changeCase.toLowerCase(w))
          .join("/"),
      toSnakeCase: (s: string) =>
        s
          .split(" ")
          .map((t) => changeCase.toLowerCase(t))
          .join("_"),
      toConstantCase: (s: string) =>
        s
          .split(" ")
          .map((w) => changeCase.toUpperCase(w))
          .join("_"),
      toHeaderCase: (s: string) =>
        s
          .split(" ")
          .map((t) => changeCase.toSentenceCase(t))
          .join("-"),
      toPascalCase: (s: string) =>
        s
          .split(" ")
          .map((w) => changeCase.toSentenceCase(w))
          .join(""),
      toCamelCase: (s: string) =>
        changeCase.toPascalCase(s).charAt(0).toLowerCase() + changeCase.toPascalCase(s).slice(1),
    };

    setInput(value);
    setOutput({
      "lower case": changeCase.toLowerCase(value),
      "UPPER CASE": changeCase.toUpperCase(value),
      "Title Case": changeCase.toTitleCase(value),
      "Sentence case": changeCase.toSentenceCase(value),
      "dot.case": changeCase.toDotCase(value),
      "url-case": changeCase.toURLCase(value),
      "path/case": changeCase.toPathCase(value),
      "snake-case": changeCase.toSnakeCase(value),
      CONSTANT_CASE: changeCase.toConstantCase(value),
      "Header-Case": changeCase.toHeaderCase(value),
      PascalCase: changeCase.toPascalCase(value),
      camelCase: changeCase.toCamelCase(value),
    });
  };

  return (
    <RootContainer>
      <Main>
        <Hero
          title="In any case — Title case, url-case, camelCase, all the cases"
          codeLink="https://github.com/mrozilla/mrozilla.cz/blob/master/src/pages/lab/any-case.tsx"
        />
        <section>
          <TextInput
            name="input"
            value={input}
            label="Original text"
            placeholder="Start typing or paste text to be transformed below..."
            style={{ margin: "0 0 4rem 0" }}
            onChange={handleInput}
          />
          {Object.entries(output).map(([key, value]) => (
            <TextInput
              key={key}
              placeholder={key}
              name={key}
              label={key}
              type="text"
              value={value}
              style={{ margin: "0 0 0.25rem 0" }}
              readOnly
            />
          ))}
        </section>
      </Main>
    </RootContainer>
  );
}

export const Head = () => {
  return (
    <SEOContainer
      title="Any case"
      description="In any case — Title case, url-case, camelCase, all the cases"
      permalink="/lab/any-case"
      ogImage="/assets/og.png"
    />
  );
};
