# 🎄 Advent of Code 2023 - day 6 🎄

## Info

Task description: [link](https://adventofcode.com/2023/day/6)

## Notes
Part 1:
- Let:
    - v_0 = initial starting speed
    - a = acceleration, e.g. speed increase per millisecond
    - y_record = record distance to beat
    - t_total = total time available

    - t_0 = time spent pressing button
    - t_1 = time spent travelling

- Then:
    - v = speed of boat = v_0 + (a * t_0)
    - y = distance travelled = t_1 * v = t_1 * (v_0 + (a * t_0))

- Find number of combinations (t_0, t_1) such that y > y_record, where t_0 + t_1 = t_total.

Implementation:
- Define intial parameters: v_0, a
- Extract t_total, y_record from the input
- Find total number of combinations of t_0, t_1 such that t_0 + t_1 = t_total
- Create function to calculate distance travelled given a, v_0, t_0 and t_1
- Filter array of (t_0, t_1) combinations such that y > y_record
- Find length of winning array for given race
- Multiply numbers from each race
    
Part 2:
- Can we use the same functions? Might be a memory issue with the number of combinations.
- Instead could find the threshold values for when y = y_record, round up/ down to nearest integer and count the number of winning combinations i.e. solve equation by hand and calculate solution based on it
- 
...