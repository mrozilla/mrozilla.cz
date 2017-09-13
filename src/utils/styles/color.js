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
    success:    'hsl(100, 70%, 60%)',
    info:       'hsl(190, 100%, 50%)',
    warning:    'hsl(50, 100%, 50%)',
    danger:     'hsl(20, 100%, 50%)',
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
