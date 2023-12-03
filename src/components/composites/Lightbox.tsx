import React from "react";
import ReactDOM from "react-dom";
import FocusLock from "react-focus-lock";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { Button } from "../interactive/Button";
import { Focusable } from "../interactive/Focusable";
import { Image } from "../multimedia/Image";
import { Text } from "../text/Text";

import { useScrollLock, useEventListener } from "~utils";

import * as styles from "./Lightbox.module.scss";

export interface LightboxProps {
  images: string[];
  onClose: () => void;
  portalRoot?: string;
  isOpen?: boolean;
  isPreviews?: boolean;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  portalRoot = "#___gatsby",
  isOpen = false,
  onClose,
}) => {
  const [currentIdx, setCurrentIdx] = React.useState(0);

  const closeButtonRef = React.useRef<HTMLButtonElement>(null);

  const { enableScrollLock, disableScrollLock } = useScrollLock();

  const handlePrevious = () => setCurrentIdx((prev) => (prev + images.length - 1) % images.length);
  const handleNext = () => setCurrentIdx((prev) => (prev + 1) % images.length);

  useEventListener("keydown", (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;

    if (["ArrowLeft", "ArrowRight", "Escape"].includes(event.key)) {
      event.preventDefault();
      if (event.key === "ArrowLeft") handlePrevious();
      if (event.key === "ArrowRight") handleNext();
      if (event.key === "Escape") onClose();
    }
  });

  React.useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
      enableScrollLock();
      return undefined;
    }
    disableScrollLock();
    return undefined;
  }, [disableScrollLock, enableScrollLock, isOpen]);

  if (!isOpen) return null;

  const header = (
    <header className={styles.header}>
      <Text>
        {currentIdx + 1} / {images.length}
      </Text>
      <menu>
        <Button innerRef={closeButtonRef} look="tertiary" aria-label="Close" onClick={onClose}>
          <FaTimes />
        </Button>
      </menu>
    </header>
  );

  const body = (
    <div className={styles.body}>
      <Button
        look="tertiary"
        aria-label="Previous photo"
        className={styles.previousButton}
        onClick={handlePrevious}
      >
        <FaArrowLeft />
      </Button>
      <Image
        src={images[currentIdx]}
        alt="random image"
        ratio={null}
        fit="contain"
        pictureProps={{ style: { height: "100%" } }}
        style={{ backgroundColor: "transparent" }}
      />
      <Button
        look="tertiary"
        aria-label="Next photo"
        className={styles.nextButton}
        onClick={handleNext}
      >
        <FaArrowRight />
      </Button>
    </div>
  );

  const footer = (
    <footer className={styles.footer}>
      <ul className={styles.previews}>
        {images.map((src, i) => (
          <li key={src} className={styles.preview}>
            <Image src={src} alt="random image" />
            <Focusable
              onClick={() => {
                console.log(i);
                setCurrentIdx(i);
              }}
            />
          </li>
        ))}
      </ul>
    </footer>
  );

  return ReactDOM.createPortal(
    <FocusLock>
      <section className={styles.container}>
        {header}
        {body}
        {footer}
      </section>
    </FocusLock>,
    document.querySelector(portalRoot)!
  );
};
