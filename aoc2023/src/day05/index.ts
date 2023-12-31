import run from "aocrunner";
import _ from 'lodash';
import { curriedMapFunction, findSeedNumbers, getAttributeMapping, getSeedNumberArraysFromSeedInput } from "../utils/index.js";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const seedNumbers = findSeedNumbers(input);
  const attributeMapTitles = [
    'seed-to-soil map',
    'soil-to-fertilizer map',
    'fertilizer-to-water map',
    'water-to-light map',
    'light-to-temperature map',
    'temperature-to-humidity map',
    'humidity-to-location map'
  ];

  const attributeMappingFunctions = attributeMapTitles.map(
    mapTitle => {
      const attributeMapping = getAttributeMapping(mapTitle, input);
      const partialMapFunction = curriedMapFunction(attributeMapping);
      return partialMapFunction;
    }
  );

  const seedLocations = seedNumbers.map(seed => {
    return _.flow(attributeMappingFunctions)(seed);
  });

  const lowestLocation = _.min(seedLocations);

  return lowestLocation.toString();
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  // const seedInput = findSeedNumbers(input);
  // const seedPairNumbers = getSeedNumberArraysFromSeedInput(seedInput);
  // const attributeMapTitles = [
  //   'seed-to-soil map',
  //   'soil-to-fertilizer map',
  //   'fertilizer-to-water map',
  //   'water-to-light map',
  //   'light-to-temperature map',
  //   'temperature-to-humidity map',
  //   'humidity-to-location map'
  // ];

  // const attributeMappingFunctions = attributeMapTitles.map(
  //   mapTitle => {
  //     const attributeMapping = getAttributeMapping(mapTitle, input);
  //     const partialMapFunction = curriedMapFunction(attributeMapping);
  //     return partialMapFunction;
  //   }
  // );

  // const minSeedLocationFromEachSeedPair = seedPairNumbers.map( seedNumbers => {
  //   const seedLocations = seedNumbers.map(seed => {
  //     return _.flow(attributeMappingFunctions)(seed);
  //   });
  
  //   const lowestLocation = _.min(seedLocations);
  //   return lowestLocation;
  // });

  // const lowestLowestLocation = _.min(minSeedLocationFromEachSeedPair);

  // return lowestLowestLocation.toString();
  return;
};

const testInput = `seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4
`;

run({
  part1: {
    tests: [
      {
        input: testInput,
        expected: "35",
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: testInput,
        expected: "46",
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
