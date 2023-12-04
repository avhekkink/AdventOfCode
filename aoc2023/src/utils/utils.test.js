import { expect, test } from 'vitest'
import { 
    splitByLine, 
    reverseString, 
    sumOfArray, 
    splitBySemiColon, 
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
    doesStrIncludeSpecialSymbol 
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
