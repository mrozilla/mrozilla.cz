// =============================================================================
// Import
// =============================================================================

import { css } from 'glamor';

// =============================================================================
// Normalize
// =============================================================================

export default function normalize() {
  // ===========================================================================
  // Document
  // ===========================================================================

  // Correct the line height in all browsers.
  // Prevent adjustments of font size after orientation changes
  // in IE on Windows Phone and in iOS.
  css.insert(`html {
    line-height: 1.15;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }`);

  // ===========================================================================
  // Sections
  // ===========================================================================

  // Remove the margin in all browsers (opinionated).
  css.insert(`body {
    margin: 0;
  }`);

  // Add the correct display in IE 9-.
  css.insert(`article, aside, footer, header, nav, section {
    display: block;
  }`);

  // Correct the font size and margin on `h1` elements within `section` and
  // `article` contexts in Chrome, Firefox, and Safari.
  css.insert(`h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }`);

  // ===========================================================================
  // Grouping content
  // ===========================================================================

  // Add the correct display in IE 9-.
  // Add the correct display in IE.
  css.insert(`figcaption, figure, main {
    display: block;
  }`);

  // Add the correct margin in IE 8.
  css.insert(`figure {
    margin: 1em 40px;
  }`);

  // Add the correct box sizing in Firefox.
  // Show the overflow in Edge and IE.
  css.insert(`hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }`);

  // Correct the inheritance and scaling of font size in all browsers.
  // Correct the odd `em` font sizing in all browsers.
  css.insert(`pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }`);

  // ===========================================================================
  // Text-level semantics
  // ===========================================================================

  // Remove the gray background on active links in IE 10.
  // Remove gaps in links underline in iOS 8+ and Safari 8+.
  css.insert(`a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }`);

  // Remove the bottom border in Chrome 57- and Firefox 39-.
  // Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
  css.insert(`abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }`);

  // Prevent the duplicate application of `bolder` by the next rule in Safari 6.
  css.insert(`b, strong {
    font-weight: inherit;
  }`);

  // Add the correct font weight in Chrome, Edge, and Safari.
  css.insert(`b, strong {
    font-weight: bolder;
  }`);

  // Correct the inheritance and scaling of font size in all browsers.
  // Correct the odd `em` font sizing in all browsers.
  css.insert(`code, kbd, samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }`);

  // Add the correct font style in Android 4.3-.
  css.insert(`dfn {
    font-style: italic;
  }`);

  // Add the correct background and color in IE 9-.
  css.insert(`mark {
    background-color: #ff0;
    color: #000;
  }`);

  // Add the correct font size in all browsers.
  css.insert(`small {
    font-size: 80%;
  }`);

  // Prevent `sub` and `sup` elements from affecting the line height in
  // all browsers.
  css.insert(`sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }`);
  css.insert(`sub {
    bottom: -0.25em;
  }`);
  css.insert(`sup {
    top: -0.5em;
  }`);

  // ===========================================================================
  // Embedded content
  // ===========================================================================

  // Add the correct display in IE 9-.
  css.insert(`audio, video {
    display: inline-block;
  }`);

  // Add the correct display in iOS 4-7.
  css.insert(`audio:not([controls]) {
    display: none;
    height: 0;
  }`);

  // Remove the border on images inside links in IE 10-.
  css.insert(`img {
    border-style: none;
  }`);

  // Hide the overflow in IE.
  css.insert(`svg:not(:root) {
    overflow: hidden;
  }`);

  // ===========================================================================
  // Forms
  // ===========================================================================

  // Change the font styles in all browsers (opinionated).
  // Remove the margin in Firefox and Safari.
  css.insert(`button, input, optgroup, select, textarea {
    font-family: sans-serif;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }`);

  // Show the overflow in IE.
  // Show the overflow in Edge.
  css.insert(`button, input {
    overflow: visible;
  }`);

  // Remove the inheritance of text transform in Edge, Firefox, and IE.
  // Remove the inheritance of text transform in Firefox.
  css.insert(`button, select {
    text-transform: none;
  }`);

  // Prevent a WebKit bug where (2) destroys native `audio` and `video`
  // controls in Android 4.
  // Correct the inability to style clickable types in iOS and Safari.
  css.insert(`button, html [type="button"], [type="reset"], [type="submit"] {
    -webkit-appearance: button;
  }`);

  // Remove the inner border and padding in Firefox.
  css.insert(`button::-moz-focus-inner, [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }`);

  // Restore the focus styles unset by the previous rule.
  css.insert(`button:-moz-focusring, [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring, [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }`);

  // Correct the padding in Firefox.
  css.insert(`fieldset {
    padding: 0.35em 0.75em 0.625em;
  }`);

  // Correct the text wrapping in Edge and IE.
  // Correct the color inheritance from `fieldset` elements in IE.
  // Remove the padding so developers are not caught out when they zero out
  // `fieldset` elements in all browsers.
  css.insert(`legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }`);

  // Add the correct display in IE 9-.
  // Add the correct vertical alignment in Chrome, Firefox, and Opera.
  css.insert(`progress {
    display: inline-block; /* 1 */
    vertical-align: baseline; /* 2 */
  }`);

  // Remove the default vertical scrollbar in IE.
  css.insert(`textarea {
    overflow: auto;
  }`);

  // Add the correct box sizing in IE 10-.
  // Remove the padding in IE 10-.
  css.insert(`[type="checkbox"], [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }`);

  // Correct the cursor style of increment and decrement buttons in Chrome.
  css.insert(`[type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }`);

  // Correct the odd appearance in Chrome and Safari.
  // Correct the outline style in Safari.
  css.insert(`[type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }`);

  // Remove the inner padding and cancel buttons in Chrome and Safari on macOS.
  css.insert(`[type="search"]::-webkit-search-cancel-button,
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }`);

  // Correct the inability to style clickable types in iOS and Safari.
  // Change font properties to `inherit` in Safari.
  css.insert(`::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }`);

  // ===========================================================================
  // Interactive
  // ===========================================================================

  // Add the correct display in IE 9-.
  // Add the correct display in Edge, IE, and Firefox.
  css.insert(`details, menu {
    display: block;
  }`);

  // Add the correct display in all browsers.
  css.insert(`summary {
    display: list-item;
  }`);

  // ===========================================================================
  // Scripting
  // ===========================================================================

  // Add the correct display in IE 9-.
  css.insert(`canvas {
    display: inline-block;
  }`);

  // Add the correct display in IE.
  css.insert(`template {
    display: none;
  }`);

  // ===========================================================================
  // Hidden
  // ===========================================================================

  // Add the correct display in IE 10-.
  css.insert(`[hidden] {
    display: none;
  }`);
}
