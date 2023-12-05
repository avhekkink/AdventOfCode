# 🎄 Advent of Code 2023 - day 4 🎄

## Info

Task description: [link](https://adventofcode.com/2023/day/4)

## Notes
Part 1:
- Create an array of objects from the input
- For each card, store in an object its ID, golden numbers, and card numbers
- For each object, create an array of winning numbers. For each num in card numbers, check if num is in the golden numbers.
- Calculate length of array of winning numbers, n
- Calculate card score = 2**(n-1)
- Sum up each of the card scores

Part 2:
- ! R E C U R S I O N !
- Maybe I'll attempt on a rainy day
...