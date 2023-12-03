import React from "react";
import { graphql, type PageProps } from "gatsby";

import { RootContainer, SEOContainer } from "~containers";

import { Main, Article } from "~components";

import "~utils/style/highlight.css";

export const query = graphql`
  query BlogPage($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        meta {
          title
          description
          permalink
        }
      }
    }
  }
`;

export default function BlogPostPage({ data, children }: PageProps<Queries.BlogPageQuery>) {
  return (
    <RootContainer>
      <Main style={{ gridTemplate: '"article suggestions" / 3fr 1fr', gridGap: "5vw" }}>
        <Article itemScope itemType="http://schema.org/BlogPosting">
          <header>
            <h1 itemProp="name">{data.mdx?.frontmatter?.meta?.title}</h1>
            <p itemProp="description">{data.mdx?.frontmatter?.meta?.description}</p>
            {
              <time
                dateTime={new Date(data.mdx?.frontmatter?.date as string).toISOString()}
                itemProp="datePublished"
              >
                {data.mdx?.frontmatter?.date}
              </time>
            }
          </header>
          {children}
        </Article>
      </Main>
    </RootContainer>
  );
}

export const Head = ({ data: { mdx } }: { data: Queries.BlogPageQuery }) => {
  return (
    <SEOContainer
      title={mdx!.frontmatter!.meta!.title!}
      description={mdx!.frontmatter!.meta!.description!}
      permalink={mdx!.frontmatter!.meta!.permalink!}
      ogImage="/assets/og.png"
    />
  );
};
