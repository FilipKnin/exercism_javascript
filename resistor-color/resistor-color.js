export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export function colorCode(selectedColor) {
  for (let i = 0; i < COLORS.length; i++) {
    let color = COLORS[i];
    if (color === selectedColor) {
      return i;
    }
  }
};
