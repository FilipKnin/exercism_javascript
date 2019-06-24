//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

function encodeColor(colorInput) {
  for (let i = 0; i < COLORS.length; i++) {
    let singleColor = COLORS[i];
    if (singleColor === colorInput) {
      return i;
    }
  }
};

export const value = (colorsInput) => {
  let firstColor = colorsInput[0];
  let secondColor = colorsInput[1];
  let encodedColors = [];
  encodedColors.push(encodeColor(firstColor), encodeColor(secondColor));
  return parseInt(encodedColors.join(''));
};
