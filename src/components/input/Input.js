// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import styled from 'styled-components';
import {
  string, func, bool, shape,
} from 'prop-types';

import Label from '../typography/Label';
import Text from '../typography/Text';

import { fadeUpAnimation } from '../../utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  overflow: hidden;
  width: ${({ width }) => width};
  box-shadow: 0 2px 0 -1px var(--color-grey-light);
  background-color: hsla(var(--hsl-grey), 0.1);

  &:hover,
  &:focus-within {
    box-shadow: 0 2px 0 -1px var(--color-grey);
  }
`;

const StyledInput = styled.input`
  outline: 0;
  border: 0;
  flex: 1;
  padding: ${({ padding = '1rem' }) => padding};
  background-color: transparent;

  &::placeholder {
    opacity: 0.5;
  }
`;

const StyledTextArea = StyledInput.withComponent('textarea');

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class Input extends PureComponent {
  static propTypes = {
    value:       string.isRequired,
    type:        string,
    name:        string.isRequired,
    label:       string,
    margin:      string,
    description: string,
    labelStyle:  shape({
      isFloating: bool,
    }),
    renderLeft:  func,
    renderRight: func,
  };

  static defaultProps = {
    type:        'text',
    label:       null,
    margin:      '0 0 1rem 0',
    description: null,
    labelStyle:  {
      isFloating: false,
    },
    renderLeft:  () => null,
    renderRight: () => null,
  };

  renderLabel = () => {
    if (this.props.labelStyle.isFloating && this.props.value !== '') {
      return (
        <Label
          htmlFor={this.props.name}
          position="absolute"
          animation={`${fadeUpAnimation} 250ms both`}
          {...this.props.labelStyle}
        >
          {this.props.label}
        </Label>
      );
    }
    if (!this.props.labelStyle.isFloating) {
      return (
        <Label htmlFor={this.props.name} {...this.props.labelStyle}>
          {this.props.label}
        </Label>
      );
    }
    return null;
  };

  renderDescription = () => (
    <Text
      fontSize="1.25rem"
      lineHeight="1.25rem"
      opacity="0.75"
      padding="0 1rem"
      margin="1rem 0 0 0"
    >
      {this.props.description}
    </Text>
  );

  renderError = () => <Text>Error</Text>; // TODO: finalise

  renderInput = () => {
    if (this.props.type === 'textarea') {
      return <StyledTextArea {...this.props} />;
    }
    return (
      <StyledInput
        padding={
          this.props.labelStyle.isFloating && this.props.value !== ''
            ? '2.5rem 1rem 0.5rem 1rem'
            : '1.5rem 1rem'
        }
        {...this.props}
      />
    );
  };

  render() {
    return (
      <div style={{ gridArea: this.props.name, margin: this.props.margin }}>
        {this.props.label && this.renderLabel()}
        <InputWrapper>
          {this.props.renderLeft()}
          {this.renderInput()}
          {this.props.renderRight()}
        </InputWrapper>
        {this.props.description && this.renderDescription()}
        {this.props.error && this.renderError()}
      </div>
    );
  }
}
