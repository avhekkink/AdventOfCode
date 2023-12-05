import run from "aocrunner";
import { findCardID, findCardNumbers, findGoldenNumbers, splitByLine, sumOfArray } from "../utils/index.js";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const inputArray = splitByLine(input);
  const cardArray = inputArray.map(card => {
    return ({
      ID: findCardID(card),
      goldenNumbers: findGoldenNumbers(card),
      cardNumbers: findCardNumbers(card),
    })
  });

  const cardScores = cardArray.map(card => {
    const winningNumbers = card.cardNumbers.filter(num => card.goldenNumbers.includes(num));
    const numWinningNumbers = winningNumbers.length;
    
    if (numWinningNumbers == 0 ) {
      return 0;
    } else {
      return 2**(numWinningNumbers-1);
    }
  });

  const sumOfScores = sumOfArray(cardScores);
  const result = sumOfScores.toString();

  return result;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
};

const testInput = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53`
const testInput2 = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
      {
        input: testInput,
        expected: "8",
      },
      {
        input: testInput2,
        expected: "13",
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
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
