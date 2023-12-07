import run from "aocrunner";
import { calculateDistanceTravelled, findAllNumbersInStr, findPossibleCombinations, productOfArray, splitByLine } from "../utils/index.js";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const inputTimes = findAllNumbersInStr(splitByLine(input)[0]);
  const inputDistances = findAllNumbersInStr(splitByLine(input)[1]);
  const inputArray = inputTimes.map((time, index) => {
    return (
      {
        t_total: Number(time),
        y_record: Number(inputDistances[index]),
      }
    );
  });

  const v_0 = 0;
  const a = 1;
  const possibleT0T1Combinations = inputArray.map((race) => {
    return ({
        t0t1: findPossibleCombinations(race.t_total),
        y_record: race.y_record
    });
  });
  
  const winningCombinationsForEachRace = possibleT0T1Combinations.map(race => {
    const winningCombinations = race.t0t1.filter( ([t_0, t_1]) => {
        const y = calculateDistanceTravelled(a, v_0, t_0, t_1);
        const isWinning = y > race.y_record;
        return isWinning;
    });

    return winningCombinations.length;
  });

    const totalNumberOfWinningCombinations = productOfArray(winningCombinationsForEachRace);

    return totalNumberOfWinningCombinations.toString();
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const inputTimes = findAllNumbersInStr(splitByLine(input)[0]);
  const inputDistances = findAllNumbersInStr(splitByLine(input)[1]);
  const t_total = Number(inputTimes.join(''));
  const y_record = Number(inputDistances.join(''));

  const y_thresh1 = Math.ceil(0.5 * (t_total - Math.sqrt(t_total**2 - 4*y_record)));
  const y_thresh2 = Math.floor(0.5 * (t_total + Math.sqrt(t_total**2 - 4*y_record)));

  const numberOfWinningCombinations = y_thresh2 - y_thresh1 + 1;

  return numberOfWinningCombinations.toString();
};

const testInput = `Time:      7  15   30
Distance:  9  40  200`;

run({
  part1: {
    tests: [
      {
        input: testInput,
        expected: "288",
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: testInput,
        expected: "71503",
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
