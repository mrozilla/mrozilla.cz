// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useRef } from 'react';
import { func } from 'prop-types';

import { Form, H1, Input, Button, Ul, Img } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

const cardProviders = [
  {
    name:       'visa',
    firstDigit: '4',
    image:      'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg',
  },
  {
    name:       'mastercard',
    firstDigit: '5',
    image:      'https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg',
  },
  {
    name:       'amex',
    firstDigit: '3',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg',
  },
];

export default function CardCheckout({ onSubmit }) {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvc, setCVC] = useState('');

  const ExpirationInput = useRef();
  const CVCInput = useRef();

  const handleCardNumber = ({ target: { value } }) => {
    if (value.length === 19) {
      ExpirationInput.current.focus();
    }

    const filtered = value.replace(/[^\d]/g, '');
    const masked = filtered.replace(/(\d{4})/g, '$1 ').trim();
    const isDeleting = cardNumber.length > value.length;

    setCardNumber(isDeleting ? value : masked);
  };

  const handleCardOwner = ({ target: { value } }) => {
    setCardHolder(value);
  };

  const handleExpiration = ({ target: { value } }) => {
    const parsed = Number.parseInt(value, 10);

    // cover >3X/XX nonsensical date
    if (value.length === 1 && parsed > 1) {
      return setExpiration(`0${value}/`);
    }

    // cover >13/XX nonsensical date
    if (value.length === 2 && parsed > 12) {
      return setExpiration(`0${value.substr(0, 1)}/${value.substr(-1)}`);
    }

    // move focus
    if (value.length === 5) {
      CVCInput.current.focus();
    }

    const filtered = value.replace(/[^\d]/g, '');
    const masked = filtered.replace(/(\d{2})/g, '$1/').substr(0, 5);
    const isDeleting = expiration.length > value.length;

    return setExpiration(isDeleting ? value : masked);
  };

  const handleCVC = ({ target: { value } }) => {
    setCVC(value.replace(/[^\d]/g, ''));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      cardNumber,
      cardHolder,
      expiration,
      cvc,
    });
  };

  const isAmex = cardNumber.startsWith('3');

  return (
    <Form
      css={`
        grid-template:
          'title title'
          'cards cards'
          'cardHolder cardHolder'
          'cardNumber cardNumber'
          'expiration cvc'
          'pay pay'
          / 1fr 1fr;
        box-shadow: 0 0 0 1px hsla(var(--hsl-text), 0.1);
        padding: 4rem 4rem 3rem;
        border-radius: 1rem;

        &:hover {
          box-shadow: 0 0 0 2px hsla(var(--hsl-text), 0.1);
        }
      `}
      onSubmit={handleSubmit}
    >
      <H1
        css={`
          grid-area: title;
          font-size: 2.5rem;
          font-weight: 500;
          margin: 0 0 2rem;
        `}
      >
        Pay invoice: €19.99
      </H1>
      <Ul
        css={`
          grid-area: cards;
          grid-auto-flow: column;
          grid-gap: 1rem;
          margin: 0 50% 0 0;
        `}
      >
        {cardProviders.map(({ name, image, firstDigit }) => (
          <Img
            key={name}
            src={image}
            alt={name}
            ratio={1 / 1.75}
            css={`
              maxheight: 4rem;
              object-fit: contain;
              opacity: ${!cardNumber || cardNumber.substr(0, 1) === firstDigit ? '1' : '0.25'};
              background-color: transparent;
            `}
          />
        ))}
      </Ul>
      <Input
        type="text"
        value={cardHolder}
        name="cardHolder"
        label="Card holder (as it appears on the card)"
        placeholder="Name on card"
        onChange={handleCardOwner}
        required
      />
      <Input
        type="text"
        value={cardNumber}
        name="cardNumber"
        label="Card number"
        placeholder="Card number..."
        pattern=".{19}"
        error="Your credit card number needs to have 16 digits"
        maxLength={19}
        onChange={handleCardNumber}
        required
      />
      <Input
        ref={ExpirationInput}
        type="text"
        value={expiration}
        name="expiration"
        label="Expiration date"
        placeholder="MM/YY"
        pattern="\d{2}/\d{2}"
        error="Your credit card expiry date needs to be in the format MM/YY"
        maxLength={5}
        onChange={handleExpiration}
        required
      />
      <Input
        ref={CVCInput}
        type="text"
        name="cvc"
        value={cvc}
        label="CVC"
        placeholder="CVC..."
        pattern={isAmex ? '\\d{4}' : '\\d{3}'}
        error={`CVC has to be ${isAmex ? 4 : 3} digits`}
        description={isAmex ? '4 digits on the front' : '3 digits on the back'}
        maxLength={isAmex ? 4 : 3}
        onChange={handleCVC}
        required
      />
      <Button
        look="primary"
        disabled={!(cardHolder && cardNumber && expiration && cvc)}
        css={`
          grid-area: pay;
        `}
      >
        Pay €19.99
      </Button>
    </Form>
  );
}

CardCheckout.propTypes = {
  onSubmit: func,
};

CardCheckout.defaultProps = {
  onSubmit: () => alert('What a success! This would send your data to the server.'), // eslint-disable-line no-alert
};
