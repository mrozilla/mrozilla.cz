// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import { string, func } from 'prop-types';
import styled from 'styled-components';

import Label from '../typography/Label';
import Text from '../typography/Text';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

const Wrapper = styled.div`
  margin: ${({ margin = '0 0 1rem 0' }) => margin};
`;

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

export default class Input extends PureComponent {
  static propTypes = {
    type:        string,
    name:        string.isRequired,
    label:       string,
    margin:      string,
    description: string,
    renderLeft:  func,
    renderRight: func,
  };

  static defaultProps = {
    type:        'text',
    label:       null,
    margin:      '0 0 1rem 0',
    description: null,
    renderLeft:  () => null,
    renderRight: () => null,
  };

  renderLabel = () => (
    <Label htmlFor={this.props.name} padding="0 1rem">
      {this.props.label}
    </Label>
  );

  renderDescription = () => (
    <Text
      fontSize="1.25rem"
      lineHeight="1.25rem"
      opacity="0.75"
      padding="0 1rem"
      margin="0 0 1rem 0"
    >
      {this.props.description}
    </Text>
  );

  renderInput = () => {
    if (this.props.type === 'textarea') {
      return <StyledTextArea {...this.props} />;
    }
    return <StyledInput {...this.props} />;
  };

  render() {
    return (
      <Wrapper margin={this.props.margin} style={{ gridArea: this.props.name }}>
        {this.props.label && this.renderLabel()}
        {this.props.description && this.renderDescription()}
        <InputWrapper>
          {this.props.renderLeft()}
          {this.renderInput()}
          {this.props.renderRight()}
        </InputWrapper>
      </Wrapper>
    );
  }
}
