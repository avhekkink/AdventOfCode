import { expect, test } from 'vitest'
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