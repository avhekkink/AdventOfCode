import { expect, test, describe, it } from 'vitest'
import { 
    splitByLine, 
    reverseString, 
    sumOfArray, 
    splitBySemiColon, 
    splitInputIntoGrid,
    findFirstDigitOrReturn0, 
    findLastDigitOrReturn0, 
    findFirstRealDigitOrReturn0, 
    findReversedLastRealDigitOrReturn0, 
    realDigitToStrDigit, 
    reversedRealDigitToStrDigit, 
    findGameID, 
    findGreenCount, 
    findBlueCount, 
    findRedCount, 
    doesStrIncludeSpecialSymbol,
    findAllNumbersInStr,
    findAllNumbersAndStoreIndices,
    getSurroundingBoxFromGrid,
    findAllStarsAndStoreIndices,
    getBoxSurroundingStarFromGrid,
    isNumber,
    findGoldenNumbers,
    findCardNumbers,
    findCardID,
    isInRange,
    mappedValue,
    calculateDestinationValue,
    findSeedNumbers,
    getAttributeMapping,
    curriedMapFunction,
    getSeedNumberArraysFromSeedInput,
    findPossibleCombinations,
    calculateDistanceTravelled,
    productOfArray,
} from '../utils/index.ts';

/**
 * GENERAL UTILS
 */

test('splitByLine', () => {
    const result = splitByLine('Hello\nWorld');
    expect(result).toEqual(['Hello', 'World']);
});

test('splitByLine', () => {
    const result = splitByLine(`Hello
World`);
    expect(result).toEqual(['Hello', 'World']);
});

test('reverseString', () => {
    const result = reverseString('Hello');
    expect(result).toBe('olleH');
});

test('sumOfArray', () => {
    const result = sumOfArray([1, 2, 3, 4, 5]);
    expect(result).toBe(15);
});

test('productOfArray', () => {
    const result = productOfArray([1, 2, 3, 4]);
    expect(result).toBe(24);
});

test('splitBySemiColon', () => {
    const result = splitBySemiColon('Hello;World');
    expect(result).toEqual(['Hello', 'World']);
});

test('splitInputIntoGrid', () => {
    const input = `.32.
..$.
£..2
.*..`;
    const result = splitInputIntoGrid(input);
    const expectedResult = [['.','3','2','.'],['.','.','$','.'],['£','.','.','2'],['.','*','.','.']];
    expect(result).toEqual(expectedResult);
});

test('readInputFromGrid', () => {
    const input = `.32.
..$.
£..2
.*..`;
    const grid = splitInputIntoGrid(input);
    const result = grid[1][2];
    expect(result).toEqual('$');
});

test('isNumber', () => {
    const result = isNumber('8');
    expect(result).toEqual(true);
});

test('isNumber', () => {
    const result = isNumber('0');
    expect(result).toEqual(true);
});

test('isNumber', () => {
    const result = isNumber('&');
    expect(result).toEqual(false);
});

/**
 * DAY 01 UTILS
 */

test('findFirstDigitOrReturn0', () => {
    const result = findFirstDigitOrReturn0('Hello2Worl3d');
    expect(result).toBe('2');
});

test('findFirstDigitOrReturn0', () => {
    const result = findFirstDigitOrReturn0('HelloWorld');
    expect(result).toBe('0');
});

test('findLastDigitOrReturn0', () => {
    const result = findLastDigitOrReturn0('Hello2World3');
    expect(result).toBe('3');
});

test('findLastDigitOrReturn0', () => {
    const result = findLastDigitOrReturn0('HelloWorld');
    expect(result).toBe('0');
});

test('findFirstRealDigitOrReturn0', () => {
    const result = findFirstRealDigitOrReturn0('Helonelo2World');
    expect(result).toBe('one');
});

test('findFirstRealDigitOrReturn0', () => {
    const result = findFirstRealDigitOrReturn0('Hello2Woroneld');
    expect(result).toBe('2');
});

test('findReversedLastRealDigitOrReturn0', () => {
    const result = findReversedLastRealDigitOrReturn0('Hello2World3');
    expect(result).toBe('3');
});

test('findReversedLastRealDigitOrReturn0', () => {
    const result = findReversedLastRealDigitOrReturn0('Hello2World3one');
    expect(result).toBe('eno');
});

test('realDigitToStrDigit', () => {
    const result = realDigitToStrDigit('one');
    expect(result).toBe('1');
});

test('reversedRealDigitToStrDigit', () => {
    const result = reversedRealDigitToStrDigit('eno');
    expect(result).toBe('1');
});

/**
 * DAY 02 UTILS
 */

test('findGameID', () => {
    const result = findGameID('Game 123');
    expect(result).toBe(123);
});

test('findGreenCount', () => {
    const result = findGreenCount('5 green');
    expect(result).toBe(5);
});

test('findBlueCount', () => {
    const result = findBlueCount('5 blue');
    expect(result).toBe(5);
});

test('findRedCount', () => {
    const result = findRedCount('5 red');
    expect(result).toBe(5);
});

test('findRedCount', () => {
    const result = findRedCount('5 blue, 5 green');
    expect(result).toBe(0);
});

/**
 * DAY 03 UTILS
 */

test('doesStrIncludeSpecialSymbol', () => {
    const result = doesStrIncludeSpecialSymbol('...42...');
    expect(result).toBe(false);
});

test('doesStrIncludeSpecialSymbol', () => {
    const result = doesStrIncludeSpecialSymbol('...$...32..');
    expect(result).toBe(true);
});

test('findAllNumbersInStr', () => {
    const result = findAllNumbersInStr('...32....45%...$..3...');
    expect(result).toEqual(['32', '45', '3']);
});

test('findAllNumbersInStr', () => {
    const result = findAllNumbersInStr(`...32....45%...$..3...
...532....&...5..
........56766..$..32£21...`);
    expect(result).toEqual(['32', '45', '3', '532', '5', '56766', '32', '21']);
});

test('findAllNumbersInStr', () => {
    const result = findAllNumbersInStr('...%...$.....');
    expect(result).toEqual([]);
});

test('findAllNumbersAndStoreIndices', () => {
    const input = '.45.%..6.'
    const lineIndex = 2;
    const result = findAllNumbersAndStoreIndices(input, lineIndex);
    const expectedResult = [{number: '45', startIndex: 1, endIndex: 2, lineIndex: 2}, {number: '6', startIndex: 7, endIndex: 7, lineIndex: 2}];
    expect(result).toEqual(expectedResult);
});

test('findAllStarsAndStoreIndices', () => {
    const input = '.*45.*..6.'
    const lineIndex = 2;
    const result = findAllStarsAndStoreIndices(input, lineIndex);
    const expectedResult = [{startIndex: 1, lineIndex: 2}, {startIndex: 5, lineIndex: 2},];
    expect(result).toEqual(expectedResult);
});

test('getSurroundingBoxFromGrid', () => {
    const inputGrid = [['.','.','$','.'],['.','3','2','.'],['£','.','.','2'],['.','*','.','.']];
    const inputNumberObj = {number: 32, startIndex: 1, endIndex: 2, lineIndex: 1};
    const result = getSurroundingBoxFromGrid(inputNumberObj, inputGrid);
    expect(result).toBe('..$..32.£..2');
});

test('getSurroundingBoxFromGrid', () => {
    const inputGrid = [['.','3','2','.'],['.','.','$','.'],['£','.','.','2'],['.','*','.','.']];
    const inputNumberObj = {number: 32, startIndex: 1, endIndex: 2, lineIndex: 0};
    const result = getSurroundingBoxFromGrid(inputNumberObj, inputGrid);
    expect(result).toBe('.32...$.');
});

test('getSurroundingBoxFromGrid', () => {
    const inputGrid = [['.','.','$','.'],['£','.','.','2'],['.','*','.','.'],['3','2','.', '.']];
    const inputNumberObj = {number: 32, startIndex: 0, endIndex: 1, lineIndex: 3};
    const result = getSurroundingBoxFromGrid(inputNumberObj, inputGrid);
    expect(result).toBe('.*.32.');
});

test('getBoxSurroundingStarFromGrid', () => {
    const inputGrid = [['3','2','.','.','.'],['.','.','*','.','2'],['.','.','7','.','.']];
    const inputStarObj = {startIndex: 2, lineIndex: 1};
    const result = getBoxSurroundingStarFromGrid(inputStarObj, inputGrid);
    expect(result).toBe('32..;.*.;.7.');
});

test('getBoxSurroundingStarFromGrid', () => {
    const inputGrid = [['.','.','4','0','2'],['.','*','.','.','2'],['.','.','7','.','.']];
    const inputStarObj = {startIndex: 1, lineIndex: 1};
    const result = getBoxSurroundingStarFromGrid(inputStarObj, inputGrid);
    expect(result).toBe('..402;.*.;..7.');
});

/*
* DAY 04 UTILS
*/

test('findCardID', () => {
    const input = 'Card   2: 25 43 15 31 45 19 36 73 34 85 | 92 11 85 68 74 20 19 71  1 36 43 32 77 33 14 31 73 15 45 83 34 25  6 88 57';
    const expectedOutput = 2
    expect(findCardID(input)).toEqual(expectedOutput);
})

test('findGoldenNumbers', () => {
    const input = 'Card   2: 25 43 15 31 45 19 36 73 34 85 | 92 11 85 68 74 20 19 71  1 36 43 32 77 33 14 31 73 15 45 83 34 25  6 88 57';
    const expectedOutput = ['25', '43', '15', '31', '45', '19', '36', '73', '34', '85'];
    expect(findGoldenNumbers(input)).toEqual(expectedOutput);
});

test('findCardNumbers', () => {
    const input = "Card   1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53"
    const expectedOutput = ["83", "86", "6", "31", "17", "9", "48", "53"]
    const result = findCardNumbers(input);
    expect(result).toEqual(expectedOutput)
  })

 /**
 * DAY 05 UTILS
 */

describe('Day 05 Utility Functions', () => {
  describe('isInRange', () => {
    it('should return true if value is within the range', () => {
        const inputValueAndSourceRange = [5, 1, 5]
      expect(isInRange(...inputValueAndSourceRange)).toBe(true);
    });

    it('should return false if value is outside the range', () => {
        const inputValueAndSourceRange = [0, 1, 5]
      expect(isInRange(...inputValueAndSourceRange)).toBe(false);
    });
  });

  describe('mappedValue', () => {
    it('should return the correct mapped value', () => {
        const inputValueAndMapping = [5, 10, 1]
        expect(mappedValue(...inputValueAndMapping)).toBe(14);
    });
  });

  describe('calculateDestinationValue', () => {
    const inputMap = [
      { destinationStart: 50, sourceStart: 98, length: 2 },
      { destinationStart: 52, sourceStart: 50, length: 48 }
    ];

    it('should return the correct destination number for a given value', () => {
      expect(calculateDestinationValue(inputMap, 98)).toBe(50);
    });

    it('should return the correct destination number for a given value within the given ranges', () => {
        expect(calculateDestinationValue(inputMap, 60)).toBe(62);
    });

    it('should return the value number itself if it is not in the map', () => {
      expect(calculateDestinationValue(inputMap, 10)).toBe(10);
    });

    it('should return the correct destination number for a given value when the function is curried', () => {
        expect(curriedMapFunction(inputMap)(98)).toBe(50);
    });
  });

  describe('findSeedNumbers', () => {
    it('should extract seed numbers from the input string', () => {
      const input = `seeds: 3416930225 56865175 4245248379

seed-to-soil map:
3534435790 4123267198 50004089
3584439879 3602712894 238659237`;

      const expectedOutput = [3416930225, 56865175, 4245248379];
      expect(findSeedNumbers(input)).toEqual(expectedOutput);
    });
  });

  describe('getAttributeMapping', () => {
    it('should extract seed-to-soil map from the input string', () => {
      const input = `seeds: 3416930225 56865175 4245248379

seed-to-soil map:
3534435790 4123267198 50004089
3584439879 3602712894 238659237

soil-to-fertilizer map:
1 2 3
4 5 6`;

      const mapTitle = "seed-to-soil map";
      const expectedOutput = [
        { destinationStart: 3534435790, sourceStart: 4123267198, length: 50004089 },
        { destinationStart: 3584439879, sourceStart: 3602712894, length: 238659237 }
      ];
      expect(getAttributeMapping(mapTitle, input)).toEqual(expectedOutput);
    });

    it('should extract soil-to-fertilizer map from the input string', () => {
      const input = `seeds: 3416930225 56865175 4245248379

seed-to-soil map:
3534435790 4123267198 50004089
3584439879 3602712894 238659237

soil-to-fertilizer map:
1 2 3
4 5 6
`;

      const mapTitle = "soil-to-fertilizer map";
      const expectedOutput = [{destinationStart: 1, sourceStart: 2, length: 3}, {destinationStart: 4, sourceStart: 5, length: 6}];
      expect(getAttributeMapping(mapTitle, input)).toEqual(expectedOutput);
    });
  });

  describe('getSeedNumberArraysFromSeedInput', () => {
    it('should return the correct seed numbers from the seed input, split into an array for each pair', () => {
        const seedInput = [1, 3, 10, 2];
        const expectedOutput = [[1, 2, 3],[10, 11]];
        expect(getSeedNumberArraysFromSeedInput(seedInput)).toEqual(expectedOutput);
    });
  });
});

 /**
 * DAY 06 UTILS
 */

describe('Day 06 Utility Functions', () => {
    describe('findPossibleCombinations', () => {
      it('should return the total set of combinations of t_0, t_1 possible from t_total', () => {
          const inputTTotal = 5;
          const expectedOutput = [[0,5], [1,4], [2,3], [3,2], [4,1], [5,0]];
          expect(findPossibleCombinations(inputTTotal)).toEqual(expectedOutput);
      });
    });

    describe('calculateDistanceTravelled', () => {
        it('should return the correct distance based on parameters passed in', () => {
            const a = 1;
            const v_0 = 0;
            const t_0 = 3;
            const t_1 = 4;
            const expectedOutput = 12;
            expect(calculateDistanceTravelled(a, v_0, t_0, t_1)).toBe(expectedOutput);
        });
      });
});