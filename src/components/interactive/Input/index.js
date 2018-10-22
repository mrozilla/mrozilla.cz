// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import {
  string, func, bool, shape, oneOfType, number,
} from 'prop-types';

import InputWrapper from './InputWrapper';
import {
  StyledInput,
  StyledRadio,
  StyledSelect,
  StyledTextArea,
  StyledSubmit,
} from './StyledInput';

import Tooltip from '../../layout/Tooltip';
import Label from '../../typography/Label';
import Alert from '../../typography/Alert';

import { fadeUpAnimation } from '../../../utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class Input extends PureComponent {
  static propTypes = {
    value:       oneOfType([string, number]),
    name:        string.isRequired,
    type:        string,
    label:       string,
    placeholder: string,
    margin:      string,
    description: string,
    labelStyle:  shape({
      isFloating: bool,
    }),
    onInput: func,
  };

  static defaultProps = {
    value:       undefined,
    type:        'text',
    label:       null,
    placeholder: ' ', // TODO: test if makes sense for valid/invalid
    margin:      null,
    description: null,
    labelStyle:  {
      isFloating: false,
    },
    onInput: () => null,
  };

  handleTextAreaResize = (event) => {
    event.target.style.height = `${event.target.scrollHeight}px`; // eslint-disable-line no-param-reassign
    this.props.onInput(event);
  };

  renderLabel = () => {
    const { isFloating } = this.props.labelStyle;
    return (
      <Label
        htmlFor={this.props.name}
        position={isFloating ? 'absolute' : undefined}
        animation={isFloating && this.props.value !== '' ? `${fadeUpAnimation} 250ms both` : undefined}
        visibility={isFloating && this.props.value === '' ? 'hidden' : undefined}
        {...this.props.labelStyle}
      >
        {this.props.label}
      </Label>
    );
  };

  renderDescription = () => <Tooltip>{this.props.description}</Tooltip>;

  renderError = () => <Alert type="danger">{this.props.error}</Alert>;

  renderInput = () => {
    if (this.props.type === 'radio') {
      return this.props.options.map(radio => (
        <Label key={radio} htmlFor={radio} textTransform="unset" fontSize="unset">
          <StyledRadio id={radio} name={this.props.name} />
          {radio}
        </Label>
      ));
    }

    if (this.props.type === 'select') {
      return (
        <StyledSelect id={this.props.name} {...this.props}>
          <option value="" disabled selected hidden />
          {this.props.options.map(option => (
            <option key={option}>{option}</option>
          ))}
        </StyledSelect>
      );
    }

    if (this.props.type === 'textarea') {
      return (
        <StyledTextArea id={this.props.name} {...this.props} onInput={this.handleTextAreaResize} />
      );
    }

    if (this.props.type === 'submit') {
      return (
        <StyledSubmit id={this.props.name} width="100%" margin="0" {...this.props} />
      );
    }

    return (
      <StyledInput
        id={this.props.name}
        padding={
          this.props.labelStyle.isFloating && this.props.value !== ''
            ? '2.5rem 1rem 0.5rem'
            : '1.5rem 1rem'
        }
        {...this.props}
      />
    );
  };

  render() {
    return (
      <InputWrapper
        gridArea={this.props.gridArea || this.props.name}
        height={this.props.height}
        margin={this.props.margin}
      >
        {this.props.label && this.renderLabel()}
        {this.renderInput()}
        {this.props.description && this.renderDescription()}
        {this.props.error && this.renderError()}
      </InputWrapper>
    );
  }
}
