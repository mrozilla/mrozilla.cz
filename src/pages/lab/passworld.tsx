import React from "react";

import { RootContainer, SEOContainer } from "~containers";
import {
  Main,
  Hero,
  Heading,
  Text,
  Button,
  TextInput,
  CheckboxGroup,
  CheckboxOption,
  Group,
  Toast,
  type ToastImperatives,
} from "~components";
import { copyToClipboard } from "~utils";

export default function PassworldPage() {
  const [password, setPassword] = React.useState("");
  const [length, setLength] = React.useState(10);
  const [chars, setChars] = React.useState({
    lowerChars: true,
    upperChars: true,
    specialChars: false,
    numbers: false,
  });
  const toastRef = React.useRef<ToastImperatives>(null);

  const handleGeneratePassword = () => {
    if (Object.values(chars).every((charSet) => !charSet)) {
      return setPassword("");
    }

    const generateSeed = () => {
      const random = window.crypto.getRandomValues(new Uint8Array(1));
      return random[0];
    };

    const generateRandomCharacter = () => {
      if (typeof window === "undefined") {
        return "";
      }

      const types = {
        lowerChars: "abcdefghijklmnopqrstuvwxyz",
        upperChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        specialChars: "@#$%-_",
        numbers: "0123456789",
      };

      const availableTypes = Object.entries(types).reduce<string[]>((acc, [key, value]) => {
        // @ts-ignore TS doesn't like using key to index chars
        if (chars[key]) return [...acc, value];
        return acc;
      }, []) || [""];
      const pool = availableTypes[generateSeed() % availableTypes.length];

      return pool.charAt(generateSeed() % pool.length);
    };

    return setPassword(
      Array(...new Array(length))
        .map(() => generateRandomCharacter())
        .join("")
    );
  };

  const handleChangeChars: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setChars((prev) => ({ ...prev, [target.value]: target.checked }));
  };

  const handleCopyToClipboard = () => {
    copyToClipboard(password);
    toastRef.current?.show({
      message: `${password} was copied to the clipboard`,
      delay: 2000,
    });
  };

  React.useEffect(() => {
    handleGeneratePassword();
  }, [length, chars]);

  return (
    <RootContainer>
      <Main style={{ gridTemplateColumns: "1fr 1fr" }}>
        <Hero
          title="Passworld is a simplified (albeit still cryptographically strong) password generator"
          codeLink="https://github.com/mrozilla/mrozilla.cz/blob/master/src/pages/lab/passworld.tsx"
        />
        <section>
          <Heading look="h2">Generated password</Heading>
          <Text style={{ fontSize: "3rem", lineHeight: "4rem" }}>{password}</Text>
        </section>
        <section>
          <TextInput
            type="number"
            name="length"
            label="Password length"
            description="Don't go for any password that is shorter than 10 characters—sh*t's not safe that way"
            value={length}
            onChange={({ target }) => setLength(parseInt(target.value, 10))}
          />
          <CheckboxGroup
            name="chars"
            value={chars}
            label="Include lowercase letters"
            style={{ margin: "2rem 0" }}
            onChange={handleChangeChars}
          >
            <CheckboxOption value="lowerChars" label="Include lowercase letters" />
            <CheckboxOption value="upperChars" label="Include uppercase letters" />
            <CheckboxOption value="specialChars" label="Include special characters" />
            <CheckboxOption value="numbers" label="Include numbers" />
          </CheckboxGroup>
          <Group>
            <Button
              look="secondary"
              onClick={handleGeneratePassword}
              disabled={Object.values(chars).every((charSet) => !charSet)}
            >
              Generate
            </Button>
            <Button look="secondary" onClick={handleCopyToClipboard} disabled={!password}>
              Copy to clipboard
            </Button>
          </Group>
        </section>
      </Main>
      <Toast ref={toastRef} />
    </RootContainer>
  );
}

export const Head = () => {
  return (
    <SEOContainer
      title="Passworld"
      description="Passworld is a simplified (albeit still cryptographically strong) password generator"
      permalink="/lab/passworld"
      ogImage="/assets/og.png"
    />
  );
};
