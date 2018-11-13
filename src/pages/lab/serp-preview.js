// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { RootContainer, SEOContainer } from '~containers';
import { Main, Section, Alert } from '~components';
import { parseLinks } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

const GoogleTitle = styled.h1`
  font-family: arial;
  font-size: 18px;
  line-height: 1.2;
  color: #1a0dab;
  margin: 0;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  outline: none;
`;

const GoogleWebsite = styled.cite`
  display: block;
  font-family: arial;
  color: #006621;
  font-size: 14px;
  line-height: 16px;
  font-style: normal;
  outline: none;

  &::after {
    content: '▾';
    padding-left: 1rem;
  }
`;

const GoogleDescription = styled.span`
  display: block;
  font-family: arial;
  color: #545454;
  font-size: 13px;
  line-height: 1.4;
  outline: none;
`;

const GoogleRatingStars = styled.span`
  display: block;
  font-size: 13px;
  line-height: 1;
  color: #e97100;
  outline: none;
`;

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: labJson(meta: { permalink: { eq: "/lab/serp-preview" } }) {
      meta {
        title
        description
        permalink
        ogImage {
          ...OgImageFragment
        }
      }
      body {
        searchSnippet {
          default {
            title
            url
            description
          }
          error {
            titleTooShort
            titleTooLong
            descriptionTooShort
            descriptionTooLong
          }
          success
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class SearchSnippetPage extends PureComponent {
  state = {
    isError: {
      titleTooShort:       false,
      titleTooLong:        false,
      descriptionTooShort: false,
      descriptionTooLong:  false,
    },
  };

  handleTitleChange = ({ target }) => {
    this.setState(prevState => ({
      isError: {
        ...prevState.isError,
        titleTooShort: target.textContent.length < 30,
        titleTooLong:  target.textContent.length > 60,
      },
    }));
  };

  handleDescriptionChange = ({ target }) => {
    this.setState(prevState => ({
      isError: {
        ...prevState.isError,
        descriptionTooShort: target.textContent.length < 70,
        descriptionTooLong:  target.textContent.length > 160,
      },
    }));
  };

  render() {
    const {
      page: {
        meta,
        body: { searchSnippet },
      },
    } = this.props.data;

    return (
      <RootContainer>
        <SEOContainer meta={meta} />
        <Main gridTemplate="'snippet .' 'errors errors' / 600px 1fr" gridGap="10vh 4rem">
          <Section gridArea="snippet">
            <GoogleTitle onInput={this.handleTitleChange} contentEditable>
              {searchSnippet.default.title}
            </GoogleTitle>
            <GoogleWebsite contentEditable>{searchSnippet.default.url}</GoogleWebsite>
            <GoogleRatingStars>
              ★★★★★
              <span style={{ color: '#808080', lineHeight: '18px' }}> Rating: 4.7 - 6 reviews</span>
            </GoogleRatingStars>
            <GoogleDescription onInput={this.handleDescriptionChange} contentEditable>
              {searchSnippet.default.description}
            </GoogleDescription>
          </Section>
          <Section gridArea="errors">
            {Object.entries(this.state.isError).map(
              ([errorType, isError]) => isError && (
              <Alert type="danger" key={errorType}>
                {parseLinks(searchSnippet.error[errorType], { type: 'primary' })}
              </Alert>
              ),
            )}
            {Object.values(this.state.isError).every(isError => !isError) && (
              <Alert type="success">{searchSnippet.success}</Alert>
            )}
          </Section>
        </Main>
      </RootContainer>
    );
  }
}
