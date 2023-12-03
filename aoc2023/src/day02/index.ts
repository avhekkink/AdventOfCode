import run from "aocrunner";
import { findBlueCount, findGameID, findGreenCount, findRedCount, splitByLine, splitBySemiColon } from "../utils/index.js";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const coloursAvailable = { green: 13, blue: 14, red: 12 };

  const input = parseInput(rawInput);
  const inputArray = splitByLine(input);

  const inputData = inputArray.map (game => {
    const gameID = findGameID(game);
    const subsetsInput = splitBySemiColon(game);
    const subsetsData = subsetsInput.map (subset => {
      return { 
        green: findGreenCount(subset),
        blue: findBlueCount(subset),
        red: findRedCount(subset),
      }
    });
    const minGreenRequired = Math.max(...subsetsData.map(subset => subset.green));
    const minBlueRequired = Math.max(...subsetsData.map(subset => subset.blue));
    const minRedRequired = Math.max(...subsetsData.map(subset => subset.red));

    const minColoursRequired = { green: minGreenRequired, blue: minBlueRequired, red: minRedRequired};
    
    const isEnoughGreen = (coloursAvailable.green >= minColoursRequired.green) ? true : false;
    const isEnoughBlue = (coloursAvailable.blue >= minColoursRequired.blue) ? true : false;
    const isEnoughRed = (coloursAvailable.red >= minColoursRequired.red) ? true : false;

    const isGamePossible = isEnoughGreen && isEnoughBlue && isEnoughRed;

    return { 
      ID: gameID,
      minColoursRequired: minColoursRequired,
      isPossible: isGamePossible,
    };
  });

  const sumOfIDs = inputData.reduce( ( sum , obj ) => obj.isPossible ? sum + obj.ID : sum , 0);

  return sumOfIDs;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const inputArray = splitByLine(input);

  const inputData = inputArray.map (game => {
    const gameID = findGameID(game);
    const subsetsInput = splitBySemiColon(game);
    const subsetsData = subsetsInput.map (subset => {
      return { 
        green: findGreenCount(subset),
        blue: findBlueCount(subset),
        red: findRedCount(subset),
      }
    });
    const minGreenRequired = Math.max(...subsetsData.map(subset => subset.green));
    const minBlueRequired = Math.max(...subsetsData.map(subset => subset.blue));
    const minRedRequired = Math.max(...subsetsData.map(subset => subset.red));

    const minColoursRequired = { green: minGreenRequired, blue: minBlueRequired, red: minRedRequired};
    const powerOfSet = minGreenRequired * minBlueRequired * minRedRequired;
    
    return { 
      ID: gameID,
      minColoursRequired: minColoursRequired,
      powerOfSet: powerOfSet,
    };
  });

  const sumOfPowers = inputData.reduce( ( sum , obj ) => sum + obj.powerOfSet , 0);

  return sumOfPowers;
};

const testInput = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
`

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
      {
        input: testInput,
        expected: 8,
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
        expected: 2286,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
