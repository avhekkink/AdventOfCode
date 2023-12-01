# 🎄 Advent of Code 2023 - day 1 🎄

## Info

Task description: [link](https://adventofcode.com/2023/day/1)

## Notes
Part 1:
- Need to split up the data to deal with one line at a time
- For each line, need to find the first and last digit and return them as a string
- Gather the results from each line into an array
- Final result should be the sum of that array

Part 2:
- Now need to recognise "real digits" like 'one' as '1', and 'two' as '2' etc
- First create digit dictionary with 'one', 'two', ..., 'nine' mapping to '1', '2', ..., '9'
- Then need to create a regex function to recognize either a number or writted digit as a "real digit"
- Create analog util functions called `findFirstRealDigitOrReturn0` and `findLastRealDigitOrReturn0`
- Repeat rest of solution from part 1

- Need to take into account that when string is reversed, the spelled out digits are reversed too. Create a reversed digit dictionary!


TODO: Add unit tests for my util functions to check they work and provide documentation
...