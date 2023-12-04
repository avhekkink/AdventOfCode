# 🎄 Advent of Code 2023 - day 3 🎄

## Info

Task description: [link](https://adventofcode.com/2023/day/3)

## Notes
Misc. :
- Add unit tests for the helper util functions

Part 1:
- Create a regex function to recognize if a symbol (non full-stops) is included in a string
- Create a regex to find each whole number from a string
- Create grid of character strings from the input

- 1. Find all whole numbers from the input string and store in an array
- 2. Find the indexes of these whole numbers in the grid
- 3. For each number, select the subset of characters surrounding the number from the grid (remember edge cases)
- 4. Flatten this subset into a single string, and check if any symbol is included inside it
- 5. If symbol is found, then the number is a part number so store in a new partsArray (if not store 0?)
- 6. Sum the numbers in the partsArray

- Create a function that looks at the directly adjacent symbols surrounding a number, and return the number if it finds a symbol and 0 if not (include edge cases for if the number is on the edge of the map)
- Apply function to each number within the map
- Sum up all the numbers that it finds

Part 2:
- Find all stars in grid
- Create surrounding boxes around each of them
- Check if there are exactly two numbers in the surrounding box
- Store the parts numbers of those adjacent to the gear and calculate the gear ratio
- Sum up the gear ratios

Debugging:
- Surrounding box actually cuts off the numbers that are adjacent. I can't just create a box with 1 char margin
- Need to figure out way to get full numbers in the surrounding box string
- If topLine[0] is a number, check if topLine[-1] would is also number, if so add to string (at front), then check previous again and repeat until not a number
- topLine[end] is a number, check if topLine[end+1] would is also a number, if so add to end of string, then check next again and repeat until not a number
- Repeat for middle and bottom lines


...