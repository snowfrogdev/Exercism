/**
 * I saw three decent options to map color names to number values for this problem:
 * - use a Map
 * - use an enum
 * - use a simple object
 *
 * Given the fact that we are not dealing with a dynamic collection here,
 * and that all the items in the collection are known and unlikely to change,
 * I decided against using a Map since it seemed like I could do better in terms of the static type checking.
 * I wanted to be able to restrict my input not only to an array of strings, but to an array of valid colors.
 *
 * Which made me think of using an enum. But the problem with TS enums is that you have to jump through hoops to
 * be able to get the values of the enum by the key. So I decided to go with a simple object. By using keyof typeof,
 * I was able to restrict the parameter type of the function to only accept valid colors instead of just any string.
 */

const ResistorColorValues = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

type ResistorColor = keyof typeof ResistorColorValues;
export function decodedValue(colors: ResistorColor[]): number {
  const numericValue: string = colors
    .slice(0, 2)
    .map((color) => ResistorColorValues[color])
    .join("");

  return parseInt(numericValue);
}

const ColorAry = [
  `black`,
  `brown`,
  `red`,
  `orange`,
  `yellow`,
  `green`,
  `blue`,
  `violet`,
  `grey`,
  `white`,
] as const; // need "as const" for type Color
