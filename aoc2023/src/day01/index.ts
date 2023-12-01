import run from "aocrunner";
import { splitByLine, findFirstDigitOrReturn0, findLastDigitOrReturn0, sumOfArray, findFirstRealDigitOrReturn0, findReversedLastRealDigitOrReturn0, realDigitToStrDigit, reversedRealDigitToStrDigit } from "../utils/index.js";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const inputArray = splitByLine(input);
  const digitsArray = inputArray.map((str: string): number => {
    const firstDigit = findFirstDigitOrReturn0(str);
    const lastDigit = findLastDigitOrReturn0(str);
    return Number(`${firstDigit}${lastDigit}`);
  });

  const sumOfDigits = sumOfArray(digitsArray);
  const result = sumOfDigits.toString();

  return result;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const inputArray = splitByLine(input);
  const digitsArray = inputArray.map((str: string): number => {
    const firstRealDigit = findFirstRealDigitOrReturn0(str);
    const reversedLastRealDigit = findReversedLastRealDigitOrReturn0(str);
    const combinedDigits = `${realDigitToStrDigit(firstRealDigit)}${reversedRealDigitToStrDigit(reversedLastRealDigit)}`
    return Number(combinedDigits);
  });

  const sumOfDigits = sumOfArray(digitsArray);
  const result = sumOfDigits.toString();

  return result;
};

const testArrayInput: string = `abcdwef
pqr3stu8vwx
1abc2
a1b2c3d4e5f
`

const testArrayInput2: string = `abcdtwowef
pqr3stu8vwx
1abc2
a1b2c3d4e5sixf
`

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
      {
        input: `1abc2`,
        expected: "12"
      },
      {
        input: testArrayInput,
        expected: "65"
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },

      {
        input: testArrayInput,
        expected: "65"
      },
      {
        input: testArrayInput2,
        expected: "88"
      }
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
