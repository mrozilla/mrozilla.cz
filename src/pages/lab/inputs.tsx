import React from "react";

import { RootContainer, SEOContainer } from "~containers";
import {
  Main,
  Hero,
  TextInput,
  TextAreaInput,
  Select,
  SelectOption,
  CheckboxGroup,
  CheckboxOption,
  RadioGroup,
  RadioOption,
  Heading,
} from "~components";

export default function InputsPage() {
  return (
    <RootContainer>
      <Main>
        <Hero
          title="Inputs playground is a place to test all the marvellous things modern browsers can do for your HTML inputs (with a tiny JS help where absolutely necessary)"
          codeLink="https://github.com/mrozilla/mrozilla.cz/blob/master/src/pages/lab/inputs.tsx"
        />
        <form style={{ display: "grid", gap: "1rem", maxWidth: "450px" }}>
          <Heading tag="h2" look="h1">
            Text inputs
          </Heading>
          <TextInput name="text" placeholder="First name" label="Generic text input" required />
          <TextInput
            name="pattern"
            placeholder="Username"
            label="Text input with pattern validation"
            description="Choose a username with at least 3 lowercase or uppercase letters"
            error="Choose a username with at least 3 lowercase or uppercase letters"
            pattern="^[A-Za-z]{3,15}$"
            required
          />
          <TextInput
            name="email"
            type="email"
            placeholder="Email"
            label="Email input with validation"
            error="Your email should be in the format of name@example.com"
            required
          />
          <TextInput
            name="password"
            type="password"
            placeholder="Password"
            label="Full-fledged password input"
            error="Your password has to contain at least 8 letters or numbers"
            pattern="^[A-Za-z0-9]{8,99}$"
            required
          />
          <TextInput
            name="number"
            type="number"
            placeholder="GPA"
            label="Number input with min, max, step, and validation"
            error="Your GPA has to be between 0.0 and 4.0 with one decimal at most"
            min="0"
            max="4"
            step="0.1"
            required
          />
          <TextInput
            name="website"
            type="url"
            placeholder="Website"
            label="URL field with pre-filled content and validation"
            error="Your website should be in the format of https://example.com"
            pattern="^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$"
            required
          />
          <TextAreaInput
            name="textarea"
            placeholder="Textarea input"
            label="Autogrowing textarea input"
            required
          />
        </form>
        <form style={{ display: "grid", gap: "1rem", maxWidth: "450px" }}>
          <Heading tag="h2" look="h1">
            Temporal inputs
          </Heading>
          <TextInput name="date" type="date" placeholder="Date" label="Date field" required />
          <TextInput
            name="datetime-local"
            type="datetime-local"
            placeholder="Date & time"
            label="Datetime field"
            required
          />
          <TextInput name="month" type="month" placeholder="Month" label="Month field" required />
          <TextInput name="time" type="time" placeholder="Time" label="Time field" required />
        </form>
        <form style={{ display: "grid", gap: "1rem", maxWidth: "450px" }}>
          <Heading tag="h2" look="h1">
            Select inputs
          </Heading>
          <Select
            name="select"
            placeholder="Handedness"
            label="Select input with placeholder"
            required
          >
            <SelectOption value="left" label="Left" />
            <SelectOption value="right" label="Right" />
            <SelectOption value="other" label="Other" />
          </Select>
          <TextInput
            name="search"
            type="search"
            placeholder="Food"
            label="Select input with search and filtering"
            error="Please choose one of the options"
            options={[
              "🍎 Apple",
              "🍞 Bread",
              "🍰 Cake",
              "🍩 Donut",
              "🥚 Egg",
              "🍟 Fries",
              "🍇 Grapes",
              "🍯 Honey",
              "🍦 Icecream",
              "🌶 Jalapeño",
              "🥝 Kiwi",
              "🍋 Lemon",
            ]}
            required
          />
        </form>
        <form style={{ display: "grid", gap: "1rem", maxWidth: "450px" }}>
          <Heading tag="h2" look="h1">
            Checkbox inputs
          </Heading>
          <CheckboxGroup name="radio" label="Interests">
            <CheckboxOption value="music" label="Music" />
            <CheckboxOption value="travelling" label="Travelling" />
            <CheckboxOption value="friends" label="Friends" />
          </CheckboxGroup>
        </form>
        <form style={{ display: "grid", gap: "1rem", maxWidth: "450px" }}>
          <Heading tag="h2" look="h1">
            Radio inputs
          </Heading>
          <RadioGroup name="radio" label="Marital status">
            <RadioOption value="single" label="Single" />
            <RadioOption value="married" label="Married" />
            <RadioOption value="widowed" label="Widowed" />
            <RadioOption value="divorced" label="Divorced" />
          </RadioGroup>
        </form>
      </Main>
    </RootContainer>
  );
}

export const Head = () => {
  return (
    <SEOContainer
      title="Inputs playground"
      description="Inputs playground is a place to test all the marvellous things modern browsers can do for your HTML inputs (with a tiny JS help where absolutely necessary)"
      permalink="/lab/inputs"
      ogImage="/assets/og.png"
    />
  );
};
