// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { forwardRef } from 'react';

import { Text } from '~components/primitives/Text';

import { Button } from '~components/interactive/Button';
import { Checkbox } from '~components/interactive/Checkbox';
import { Fieldset } from '~components/interactive/Fieldset';
import { Radio } from '~components/interactive/Radio';
import { Select } from '~components/interactive/Select';
import TextInput from '~components/interactive/TextInput';
import PasswordInput from '~components/interactive/PasswordInput';
import TextAreaInput from '~components/interactive/TextAreaInput';

import { Label } from '~components/text/Label';
import { Legend } from '~components/text/Legend';
import { Tooltip } from '~components/text/Tooltip';
import { Error } from '~components/text/Error';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default forwardRef(
  (
    {
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
      min,
      max,
      step,
      pattern,
      readOnly,
      required,
      onChange,
      ...rest
    },
    ref,
  ) => {
    const renderInput = () => {
      if (type === 'radio') {
        return (
          <>
            {label && <Legend>{label}</Legend>}
            {options.map(radio => (
              <Label key={radio.value} htmlFor={radio.value} lineHeight="4rem">
                <Radio
                  ref={ref}
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
            {label && <Legend>{label}</Legend>}
            {options.map(checkbox => (
              <Label key={checkbox.value} htmlFor={checkbox.value} lineHeight="4rem">
                <Checkbox
                  ref={ref}
                  id={checkbox.value}
                  {...{
                    value:   checkbox.value,
                    checked: checkbox.checked,
                    name,
                    required,
                    onChange,
                  }}
                />
                <Text>{checkbox.label}</Text>
              </Label>
            ))}
            {description && <Tooltip>{description}</Tooltip>}
          </>
        );
      }

      if (type === 'select') {
        return (
          <>
            <Select ref={ref} id={name} {...{ name, value, required, onChange }}>
              <option hidden value="">
                {placeholder}
              </option>
              <optgroup label={placeholder}>
                {options.map(option => (
                  <option key={option.value} value={option.value} selected={option.selected}>
                    {option.label}
                  </option>
                ))}
              </optgroup>
            </Select>
            <Label htmlFor={name} position="absolute" top="0" left="1rem">
              {label}
            </Label>
            <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
              <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
            </svg>
            {description && <Tooltip>{description}</Tooltip>}
          </>
        );
      }

      if (type === 'search') {
        return (
          <>
            <TextInput
              ref={ref}
              type="search"
              id={name}
              list={`datalist-${name}`}
              autoComplete="off"
              {...{ name, value, placeholder, options, required, onChange }}
            />
            <Label htmlFor={name} position="absolute" top="0" left="1rem">
              {label}
            </Label>
            <datalist id={`datalist-${name}`}>
              {options.map(option => (
                <option key={option.name}>{option.name}</option>
              ))}
            </datalist>
            <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
              <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
            </svg>
            {error && <Error>{error}</Error>}
          </>
        );
      }

      if (type === 'textarea') {
        return (
          <>
            <TextAreaInput
              ref={ref}
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
            <Label htmlFor={name} position="absolute" top="0" left="1rem">
              {label}
            </Label>
            {description && <Tooltip>{description}</Tooltip>}
            {error && <Error>{error}</Error>}
          </>
        );
      }

      if (type === 'password') {
        return (
          <>
            <PasswordInput
              ref={ref}
              id={name}
              {...{
                type,
                name,
                value,
                placeholder,
                pattern,
                min,
                max,
                step,
                readOnly,
                required,
                onChange,
              }}
              {...rest}
            />
            <Label htmlFor={name} position="absolute" top="0" left="1rem">
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
            ref={ref}
            id={name}
            {...{
              type,
              name,
              value,
              placeholder,
              pattern,
              min,
              max,
              step,
              readOnly,
              required,
              onChange,
            }}
            {...rest}
          />
          <Label htmlFor={name} position="absolute" top="0" left="1rem">
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
  },
);
