import React from "react";

import { RootContainer, SEOContainer } from "~containers";
import { Main, Hero, Article, Link } from "~components";

export default function HomePage() {
  return (
    <RootContainer>
      <Main>
        <Hero title="Mrozilla is run by Jan Hrubý—originally from the Czech Republic and having lived in Finland and the United Kingdom, I currently reside in Vienna, Austria" />
        <Article>
          <h2>Focus</h2>
          <p>
            I build digital products, mainly websites & web/mobile apps. Everything from concepts &
            exploration, through UX, UI, design, all the way to software development. I did{" "}
            <Link to="/#work">some work in the past</Link>, and I'm going to do some more in the
            future.
          </p>
          <h2>Code</h2>
          <p>
            I code in TypeScript (<Link to="https://github.com/facebook/react">React</Link> &{" "}
            <Link to="https://github.com/facebook/react-native">React Native</Link>,{" "}
            <Link to="https://github.com/apollographql/apollo-client">Apollo GraphQL</Link> &{" "}
            <Link to="https://github.com/reduxjs/redux">Redux</Link>,{" "}
            <Link to="https://github.com/nodejs/node">Node</Link> &{" "}
            <Link to="https://github.com/expressjs/express">Express</Link>). I usually edit my code
            in <Link to="https://github.com/Microsoft/vscode">VS Code</Link>, lint it with{" "}
            <Link to="https://github.com/eslint/eslint">ESLint</Link> &{" "}
            <Link to="https://github.com/prettier/prettier">Prettier</Link>, and post it to{" "}
            <Link to="https://github.com/mrozilla">Github</Link>.
          </p>
          <h2>Design</h2>
          <p>
            I prefer to design directly in code. However, when working with others, I'm also
            proficient in Adobe tools, Sketch, and Figma.
          </p>
          <h2>Education</h2>
          <p>
            I happen to have{" "}
            <Link to="https://www.ntu.ac.uk/study-and-courses/academic-schools/nottingham-business-school">
              M.Sc.
            </Link>{" "}
            and <Link to="https://www.vut.cz/en/students/programmes/branch?oid=9619">Ing.</Link>{" "}
            degrees in European Business and Finance for some reason.
          </p>
        </Article>
      </Main>
    </RootContainer>
  );
}

export const Head = () => {
  return (
    <SEOContainer
      title="About us"
      description="Mrozilla is run by Jan Hrubý—originally from the Czech Republic, lived in Finland and the United Kingdom, currently residing in Vienna, Austria"
      permalink="/"
      ogImage="/assets/og.png"
    />
  );
};
