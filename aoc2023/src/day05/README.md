# 🎄 Advent of Code 2023 - day 5 🎄

## Info

Task description: [link](https://adventofcode.com/2023/day/5)

## Notes
Part 1:
- For each initial seed, create an object to store: soil, fertilizer, water, light, temperature, humidity, and location.
- Find min location out of all the seed objects

- Convert each map input into an array of objects with {destinationStart, sourceStart, length}
- To gather the information, create a pure function for each conversion that takes an attribute number and map as input, and returns a number.
    - (can be generic and reused for any map since they have the same format)
- And then apply them in a pipe (maybe find lodash function for that?)

Part 2:
- Create function to convert seed input into seed numbers.
- Then repeat from part 1

 Debugging: - Getting "# Fatal JavaScript invalid size error 169220804 (see crbug.com/1201626)" so seems to be a size issue
 - First attempt to reduce size: Split total seed numbers array into an array for each range - STILL NO GOOD 
 - BRUTE FORCE IS NOT THE ANSWER
 - Can I find minimum without having to find all locations and take the minimum?
 - Instead of finding all seed numbers from seed input, let's store rangeStart and rangeLength instead?
 - For each destination mapping function, can we figure out if the start of the range or end of the range is going to out put the hightest / lowest number? And map backwards from location?
 - There's probably a few ways I could try but don't have time to finesse a solution, 1 star it is today *
...