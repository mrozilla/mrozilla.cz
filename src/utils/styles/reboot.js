// =============================================================================
// Import
// =============================================================================

import { css } from 'glamor';
import { typography, color } from '../styles';

// =============================================================================
// Reboot
// =============================================================================

export default function reboot() {
  // ===========================================================================
  // Document
  // ===========================================================================

  // Set border-box sizing at root
  // Set font-size at root to define a rem unit
  css.insert(`html {
    box-sizing: border-box;
    font-size: ${typography.font.size.root};
  }`);

  // Use border-box sizing everywhere
  css.insert(`*, *:before, *:after {
    box-sizing: inherit;
  }`);

  // ===========================================================================
  // Typography
  // ===========================================================================

  // Define global typography
  // Define global background color
  css.insert(`body {
    font-family: ${typography.font.family.body};
    font-size: ${typography.font.size.base};
    line-height: ${typography.font.lineHeight};
    color: ${typography.font.color.body};
    background-color: ${color.background};
    -webkit-font-smoothing: antialiased;
  }`);

  // Remove all margins for headings
  // Remove extraneous white space for headings
  css.insert(`h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    white-space: pre-line;
  }`);

  // Remove default link styles
  css.insert(`a {
    color: inherit;
    text-decoration: none;
  }`);

  // ===========================================================================
  // Multimedia
  // ===========================================================================

  // Remove margin on figures
  css.insert(`figure {
    margin: 0;
  }`);

  // Hide image elements with no image
  css.insert(`img[src=""], img:not([src]) {
    opacity: 0;
  }`);

  // ===========================================================================
  // Additional styling
  // ===========================================================================

  // Customise selection colour
  css.insert(`::selection {
    background-color: ${color.brand.primary};
    color: white;
  }`);
  css.insert(`::-moz-selection {
    background-color: ${color.brand.primary};
    color: white;
  }`);
}
