import React from "react";

import { RootContainer, SEOContainer } from "~containers";
import { Main, Hero, Link, Alert, Text } from "~components";

import * as styles from "~components/snowflakes/serp.module.scss";

const copy = {
  error: {
    titleTooShort: (
      <>
        Your title is too short, try aiming for ~50 characters in total to{" "}
        <Link to="https://support.google.com/webmasters/answer/35624">
          fully utilise the available space
        </Link>
      </>
    ),
    titleTooLong: (
      <>
        Your title is too long, it's generally smart to stay under 60 characters in total as{" "}
        <Link to="https://moz.com/learn/seo/title-tag">
          Google truncates titles at 600px width (on desktop)
        </Link>
      </>
    ),
    descriptionTooShort: (
      <>
        Your description is too short, try aiming for ~100 characters to{" "}
        <Link to="https://support.google.com/webmasters/answer/35624">
          provide more information to the users
        </Link>
      </>
    ),
    descriptionTooLong: (
      <>
        Your description is too long, you generally want to stay under 300 characters in total to
        avoid{" "}
        <Link to="https://moz.com/learn/seo/meta-description">
          Google truncating your description
        </Link>
      </>
    ),
  },
  success: "Everything's looking good!",
};

export default function SearchSnippetPage() {
  const [errors, setErrors] = React.useState({
    titleTooShort: false,
    titleTooLong: false,
    descriptionTooShort: false,
    descriptionTooLong: false,
  });

  const handleTitleChange: React.FormEventHandler<HTMLHeadingElement> = ({ currentTarget }) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      titleTooShort: (currentTarget?.textContent?.length || 0) < 30,
      titleTooLong: (currentTarget?.textContent?.length || 0) > 60,
    }));
  };

  const handleDescriptionChange: React.FormEventHandler<HTMLSpanElement> = ({ currentTarget }) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      descriptionTooShort: (currentTarget?.textContent?.length || 0) < 70,
      descriptionTooLong: (currentTarget?.textContent?.length || 0) > 160,
    }));
  };

  return (
    <RootContainer>
      <Main>
        <Hero
          title="Optimise the length of your website's titles and descriptions for Google search snippets, easily, visually, with hints and explanations"
          codeLink="https://github.com/mrozilla/mrozilla.cz/blob/master/src/pages/lab/serp.tsx"
        />
        <section style={{ maxWidth: "600px" }}>
          <h2 className={styles.title} onInput={handleTitleChange} contentEditable>
            Google SERP preview visual optimiser | mrozilla
          </h2>
          <cite className={styles.website} contentEditable>
            https://www.mrozilla.cz/lab/serp
          </cite>
          <span className={styles.stars}>
            ★★★★★
            <Text tag="span" className={styles.rating}>
              {" "}
              Rating: 4.7 - 6 reviews
            </Text>
          </span>
          <span className={styles.description} onInput={handleDescriptionChange} contentEditable>
            Click to edit the fields directly to optimise the length of your website&apos;s titles
            and descriptions for Google search snippets visually with hints
          </span>
        </section>
        <section>
          {Object.entries(errors).map(
            ([errorType, isError]) =>
              isError && (
                <Alert key={errorType} look="danger">
                  {copy.error[errorType as keyof typeof errors]}
                </Alert>
              )
          )}
          {Object.values(errors).every((isError) => !isError) && (
            <Alert look="success">{copy.success}</Alert>
          )}
        </section>
      </Main>
    </RootContainer>
  );
}

export const Head = () => {
  return (
    <SEOContainer
      title="SERP Preview"
      description="Optimise the length of your website's titles and descriptions for Google search snippets, easily, visually, with hints and explanations"
      permalink="/lab/serp"
      ogImage="/assets/og.png"
    />
  );
};
