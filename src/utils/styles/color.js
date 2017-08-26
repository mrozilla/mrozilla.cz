// =============================================================================
// Styles
// =============================================================================

const hue = 354;
const sat = 82;
const lig = 55;

const colour = {
  brand: {
    primary:    `hsl(${hue}, ${sat}%, ${lig}%)`,
    secondary:  `hsl(${hue}, ${sat}%, ${lig - 10}%)`,
    success:    '#5cb85c',
    info:       '#5bc0de',
    warning:    '#f0ad4e',
    danger:     '#d9534f',
    complement: `hsl(${Math.abs(hue - 180)}, ${sat}%, ${lig}%)`,
    get gradient() {
      return `linear-gradient(45deg, ${this.primary}, ${this.secondary})`;
    },
  },
  grey: {
    basic:    `hsl(${hue}, ${sat - 75}%, ${lig}%)`,
    lightest: `hsl(${hue}, ${sat - 75}%, ${lig + 43}%)`,
    lighter:  `hsl(${hue}, ${sat - 75}%, ${lig + 40}%)`,
    light:    `hsl(${hue}, ${sat - 75}%, ${lig + 30}%)`,
    dark:     `hsl(${hue}, ${sat - 80}%, ${lig - 15}%)`,
    darker:   `hsl(${hue}, ${sat - 75}%, ${lig - 42}%)`,
    darkest:  `hsl(${hue}, ${sat - 75}%, ${lig - 47}%)`,
  },
  get background() {
    return this.grey.lightest;
  },
};

// =============================================================================
// Export
// =============================================================================

export default colour;
