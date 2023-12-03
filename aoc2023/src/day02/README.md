# 🎄 Advent of Code 2023 - day 2 🎄

## Info

Task description: [link](https://adventofcode.com/2023/day/2)

## Notes
Part 1:
- Split input into each game, per line (and store ID number)
- Split each game into subset, separated by semicolon
- For each subset, find min. number of red, blue, green cubes needed for it to be possible
- For each game, find the max number of each of the "min. required" for each colour out of all the subsets
- For each game, compare min. required for each colour to the number of each colour available in the bag
- Sum the IDs of the games where it is possible

Useful data structure:
interface cubeCounts { green: number, blue: number, red: number };

interface gameData = {
    id: number,
    subsets: cubeCounts[]
    minRequired: cubeCount
    isPossible: boolean
}

const inputData = gameData[]

- Let sum = 0
- For each game in inputData, ifPossible ? sum += game.id : sum = sum

...