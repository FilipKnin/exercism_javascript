//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

function encodeColor(colorInput) {
  return COLORS.findIndex(singleColor => singleColor === colorInput);
};

export const value = (colorsInput) => {
  let firstColor = colorsInput[0];
  let secondColor = colorsInput[1];
  let encodedColors = [];
  encodedColors.push(encodeColor(firstColor), encodeColor(secondColor));
  return Number(encodedColors.join(''));
};
