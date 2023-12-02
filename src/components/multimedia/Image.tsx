import React from "react";
import cx from "classnames";
import { noop } from "lodash";

import * as styles from "./Image.module.scss";

export interface ImageProps extends React.ComponentPropsWithoutRef<"img"> {
  pictureProps?: React.ComponentPropsWithoutRef<"picture">;
  ratio?: number | null;
  fit?: "cover" | "contain";
  zoom?: number;
}

export const Image: React.FC<ImageProps> = ({
  pictureProps,
  ratio = 1,
  fit = "cover",
  zoom,
  className,
  style,
  onLoad = noop,
  onError = noop,
  onMouseMove = noop,
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  const handleLoad: React.ReactEventHandler<HTMLImageElement> = (event) => {
    setIsLoaded(true);
    onLoad(event);
  };

  const handleError: React.ReactEventHandler<HTMLImageElement> = (event) => {
    event.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E"; // use a transparent svg as a default image
    setIsLoaded(true);
    onError(event);
  };

  const handleMouseMove: React.MouseEventHandler<HTMLImageElement> = (event) => {
    if (zoom) {
      const { offsetX, offsetY } = event?.nativeEvent;
      const x = (offsetX / event.currentTarget?.offsetWidth) * 100;
      const y = (offsetY / event.currentTarget?.offsetHeight) * 100;
      event.currentTarget.style.transformOrigin = `${x}% ${y}%`;
    }
    onMouseMove(event);
  };

  return (
    <picture
      {...pictureProps}
      className={cx(styles.picture, !isLoaded && styles.loading)}
      style={{ ...style, "--img-ratio": ratio, ...pictureProps?.style } as React.CSSProperties}
    >
      <img
        {...rest}
        className={cx(styles.img, zoom !== 1 && styles.zoom, className)}
        style={{ ...style, "--img-zoom": zoom, "--img-fit": fit } as React.CSSProperties}
        onLoad={handleLoad}
        onError={handleError}
        onMouseMove={handleMouseMove}
      />
    </picture>
  );
};
