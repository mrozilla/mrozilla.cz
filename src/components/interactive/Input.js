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

import { Icon } from '~components/multimedia/Icon';

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
      css,
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
              <Label
                key={radio.value}
                htmlFor={radio.value}
                css={`
                  line-height: 4rem;
                `}
              >
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
              <Label
                key={checkbox.value}
                htmlFor={checkbox.value}
                css={`
                  line-height: 4rem;
                `}
              >
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
            <Label
              htmlFor={name}
              css={`
                position: absolute;
                top: 0;
                left: 1rem;
              `}
            >
              {label}
            </Label>
            <Icon
              icon="FaChevronDown"
              css={`
                position: absolute;
                top: 2.75rem;
                right: 1rem;
                pointer-events: none;
                font-size: 1.75rem;
                opacity: 0.25;
              `}
            />
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
            <Label
              htmlFor={name}
              css={`
                position: absolute;
                top: 0;
                left: 1rem;
              `}
            >
              {label}
            </Label>
            <datalist id={`datalist-${name}`}>
              {options.map(option => (
                <option key={option.name}>{option.name}</option>
              ))}
            </datalist>
            <Icon
              icon="FaChevronDown"
              css={`
                position: absolute;
                top: 2.75rem;
                right: 1rem;
                pointer-events: none;
                font-size: 1.75rem;
                opacity: 0.25;
              `}
            />
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
            <Label
              htmlFor={name}
              css={`
                position: absolute;
                top: 0;
                left: 1rem;
              `}
            >
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
            <Label
              htmlFor={name}
              css={`
                position: absolute;
                top: 0;
                left: 1rem;
              `}
            >
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
          <Label
            htmlFor={name}
            css={`
              position: absolute;
              top: 0;
              left: 1rem;
            `}
          >
            {label}
          </Label>
          {description && <Tooltip>{description}</Tooltip>}
          {error && <Error>{error}</Error>}
        </>
      );
    };

    if (type === 'submit') {
      return (
        <Button
          as="input"
          type="submit"
          value={label}
          look="primary"
          css={`
            grid-area: ${name};
          `}
        />
      );
    }

    return (
      <Fieldset
        css={`
          grid-area: ${name};
          ${css}
        `}
        {...rest}
      >
        {renderInput()}
      </Fieldset>
    );
  },
);
