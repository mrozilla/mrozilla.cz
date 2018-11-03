// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import styled from 'styled-components';

import { Text } from '../primitives';

import { Button } from './Button';
import { Checkbox } from './Checkbox';
import { Error } from './Error';
import { Fieldset } from './Fieldset';
import { Radio } from './Radio';
import TextInput from './TextInput';

import { Label } from '../text/Label';
import { Tooltip } from '../text/Tooltip';

// ─────────────────────────────────────────────────────────────────────────────
// legend
// ─────────────────────────────────────────────────────────────────────────────

const Legend = styled(Label)``;
Legend.defaultProps = { ...Label.defaultProps, as: 'legend' };

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function Input({
  type,
  name,
  label,
  placeholder,
  description,
  error,
  value,
  checked,
  options,
  rows,
  readOnly,
  required,
  isFloatingLabel,
  onChange,
  ...rest
}) {
  const renderInput = () => {
    if (type === 'radio') {
      return (
        <>
          {label && <Legend>{label}</Legend>}
          {options.map(radio => (
            <Label key={radio.value} htmlFor={radio.value}>
              <Radio
                id={radio.value}
                {...{
                  value:   radio.value,
                  checked: radio.checked,
                  name,
                  required,
                  onChange,
                }}
              />
              <Text>{radio.label}</Text>
            </Label>
          ))}
          {description && <Tooltip>{description}</Tooltip>}
        </>
      );
    }
    if (type === 'checkbox') {
      return (
        <>
          <Label htmlFor={name}>
            <Checkbox
              id={name}
              {...{
                name,
                checked,
                required,
                onChange,
              }}
            />
            <Text>{label}</Text>
          </Label>
          {description && <Tooltip>{description}</Tooltip>}
        </>
      );
    }
    if (type === 'textarea') {
      return (
        <>
          <TextInput
            as="textarea"
            id={name}
            {...{
              name,
              value,
              placeholder,
              rows,
              required,
              isFloatingLabel,
              onChange,
            }}
          />
          <Label htmlFor={name} position="absolute" top="0">
            {label}
          </Label>
          {description && <Tooltip>{description}</Tooltip>}
          {error && <Error>{error}</Error>}
        </>
      );
    }
    return (
      <>
        <TextInput
          id={name}
          {...{
            type,
            name,
            value,
            placeholder,
            readOnly,
            required,
            isFloatingLabel,
            onChange,
          }}
        />
        <Label htmlFor={name} position="absolute" top="0">
          {label}
        </Label>
        {description && <Tooltip>{description}</Tooltip>}
        {error && <Error>{error}</Error>}
      </>
    );
  };

  if (type === 'submit') {
    return <Button as="input" type="submit" gridArea={name} value={label} />;
  }

  return (
    <Fieldset gridArea={name} {...rest}>
      {renderInput()}
    </Fieldset>
  );
}
