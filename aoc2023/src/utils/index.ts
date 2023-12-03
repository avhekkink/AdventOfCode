/**
 * Root for your util libraries.
 *
 * You can import them in the src/template/index.ts,
 * or in the specific file.
 *
 * Note that this repo uses ES Modules, so you have to explicitly specify
 * .js extension (yes, .js not .ts - even for TypeScript files)
 * for imports that are not imported from node_modules.
 *
 * For example:
 *
 *   correct:
 *
 *     import _ from 'lodash'
 *     import myLib from '../utils/myLib.js'
 *     import { myUtil } from '../utils/index.js'
 *
 *   incorrect:
 *
 *     import _ from 'lodash'
 *     import myLib from '../utils/myLib.ts'
 *     import { myUtil } from '../utils/index.ts'
 *
 *   also incorrect:
 *
 *     import _ from 'lodash'
 *     import myLib from '../utils/myLib'
 *     import { myUtil } from '../utils'
 *
 */


/**
 * GENERAL UTILS
 */

export const splitByLine = (str: string): string[] => str.split(/\r?\n/);

export const reverseString = (str: string): string => {
    return str.split("").reverse().join("");
};

export const sumOfArray = (numArray: number[]): number => {
    return numArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      }, 0);
};

export const splitBySemiColon = (str: string): string[] => str.split(/;/);

// For documentation / reference: 
// const sumOfIDs = inputData.reduce( ( sum , obj ) => obj.isPossible ? sum + obj.ID : sum , 0);
// const sumOfPowers = inputData.reduce( ( sum , obj ) => sum + obj.powerOfSet , 0);


/**
 * DAY 01 UTILS
 */

export  const findFirstDigitOrReturn0 = (str: string): string => {
    const regexDigitMatch = str.match(/[0-9]/);
    const digit = regexDigitMatch ? regexDigitMatch[0] : "0";
    return digit;
};


export const findLastDigitOrReturn0 = (str: string): string => {
    return findFirstDigitOrReturn0(reverseString(str));
};

export const digitMapping = {
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',  
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9',
};

export const reversedDigitMapping = {
    'eno': '1', 
    'owt': '2',
    'eerht': '3',
    'ruof': '4',
    'evif': '5',
    'xis': '6',
    'neves': '7', 
    'thgie': '8',
    'enin': '9'
};

export  const findFirstRealDigitOrReturn0 = (str: string): string => {
    const regexDigitMatch = str.match(/[0-9]|one|two|three|four|five|six|seven|eight|nine/);
    const realDigit = regexDigitMatch ? regexDigitMatch[0] : "0";
    return realDigit;
};

export  const findReversedLastRealDigitOrReturn0 = (str: string): string => {
    const reversedString = reverseString(str);
    const regexDigitMatch = reversedString.match(/[0-9]|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin/);
    const reversedRealDigit = regexDigitMatch ? regexDigitMatch[0] : "0";
    return reversedRealDigit;
};

export const realDigitToStrDigit = (str: string): string => {
    const isDigitWrittenOut = str in digitMapping;
    return isDigitWrittenOut ? digitMapping[str] : str;
};

export const reversedRealDigitToStrDigit = (str: string): string => {
    const isDigitWrittenOut = str in reversedDigitMapping;
    return isDigitWrittenOut ? reversedDigitMapping[str] : str;
};

/**
 * DAY 02 UTILS
 */

export  const findGameID = (str: string): number => {
    const regexGameIDMatch = str.match(/Game ([0-9]+)/);
    const ID = regexGameIDMatch ? Number(regexGameIDMatch[1]) : 0;
    return ID;
};

export const findGreenCount = (str: string): number => {
    const regexGreenCount = str.match(/([0-9]+) green/)
    const greenCount = regexGreenCount ? Number(regexGreenCount[1]) : 0;
    return greenCount;
}

export const findBlueCount = (str: string): number => {
    const regexBlueCount = str.match(/([0-9]+) blue/)
    const blueCount = regexBlueCount ? Number(regexBlueCount[1]) : 0;
    return blueCount;
}

export const findRedCount = (str: string): number => {
    const regexRedCount = str.match(/([0-9]+) red/)
    const redCount = regexRedCount ? Number(regexRedCount[1]) : 0;
    return redCount;
}