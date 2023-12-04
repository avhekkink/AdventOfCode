import run from "aocrunner";
import { NumbersArray, StarArray, doesStrIncludeSpecialSymbol, findAllNumbersAndStoreIndices, findAllNumbersInStr, findAllStarsAndStoreIndices, getBoxSurroundingStarFromGrid, getGearRatio, getSurroundingBoxFromGrid, splitByLine, splitInputIntoGrid, sumOfArray } from "../utils/index.js";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const inputLines = splitByLine(input);
  const inputGrid = splitInputIntoGrid(input);

  const numberObjsInLineArray: NumbersArray[] = inputLines.map((lineStr, index) => findAllNumbersAndStoreIndices(lineStr, index));
  const numberObjArray = numberObjsInLineArray.flat();

  const surroundingBoxes = numberObjArray.map(numberObj => { 
    const boxObj = {
      number: numberObj.number, 
      boxStr: getSurroundingBoxFromGrid(numberObj, inputGrid)
    };
    return boxObj;
  });

  const partNumbers = surroundingBoxes.map(boxObj => {
    const isPartNumber = doesStrIncludeSpecialSymbol(boxObj.boxStr);
    const result = isPartNumber ? Number(boxObj.number) : 0;
    return result;
  });

  const sumOfPartNumbers = sumOfArray(partNumbers);
  const result = sumOfPartNumbers.toString();

  return result;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const inputLines = splitByLine(input);
  const inputGrid = splitInputIntoGrid(input);

  const starObjsInLineArray: StarArray[] = inputLines.map((lineStr, index) => findAllStarsAndStoreIndices(lineStr, index));
  const starObjArray = starObjsInLineArray.flat();

  const surroundingBoxes = starObjArray.map((starObj, index) => { 
    const boxObj = {
      starNumber: index, 
      boxStr: getBoxSurroundingStarFromGrid(starObj, inputGrid),
    };
    return boxObj;
  });

  const gearRatios = surroundingBoxes.map(boxObj => {
    return getGearRatio(boxObj.boxStr);
  });
  
  const sumOfGearRatios = sumOfArray(gearRatios);
  const result = sumOfGearRatios.toString();

  return result;
};

const testInput = `
467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`

const testInput2 = `
987..654..
...*......
..321..098.
......#...
765*80....
.....+.432.
..109.....
......876.
...$.*....
.543.210..`

const testInput3 = `
100..654..
...*......
..321..098
......#...
765*80....
.....+.432
..109..*..
......876.
...$.*....
.543.201..`

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
      {
        input: testInput,
        expected: "4361",
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
        input: testInput,
        expected: '467835',
      },
      {
        input: testInput2,
        expected: '561987'
      },
      {
        input: testInput3,
        expected: '647808',
      }      
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
