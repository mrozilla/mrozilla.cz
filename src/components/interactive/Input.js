// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import styled from 'styled-components';

import { Text } from '~components/primitives';

import { Button } from '~components/interactive/Button';
import { Checkbox } from '~components/interactive/Checkbox';
import { Error } from '~components/interactive/Error';
import { Fieldset } from '~components/interactive/Fieldset';
import { Radio } from '~components/interactive/Radio';
import TextInput from '~components/interactive/TextInput';

import { Label } from '~components/text/Label';
import { Tooltip } from '~components/text/Tooltip';

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
  pattern,
  readOnly,
  required,
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
              pattern,
              required,
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
            pattern,
            readOnly,
            required,
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
