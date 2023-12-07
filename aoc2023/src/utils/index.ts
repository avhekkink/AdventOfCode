import _ from 'lodash'

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

export const splitByLine = (str: string): string[] => str.split(/\r|\n/);

export const reverseString = (str: string): string => {
    return str.split("").reverse().join("");
};

export const sumOfArray = (numArray: number[]): number => {
    return numArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      }, 0);
};

export const productOfArray = (numArray: number[]): number => {
    return numArray.reduce((accumulator, currentValue) => {
        return accumulator * currentValue
      }, 1);
};

export const splitBySemiColon = (str: string): string[] => str.split(/;/);

export const splitInputIntoGrid = (str: string): string[][] => {
    return splitByLine(str).map(arr => arr.split(''));
}

export const isNumber = (str: string): boolean => {
    const regexNum = str.match(/([0-9])/);
    return regexNum ? true : false;
}

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

/**
 * DAY 03 UTILS
 */

export const doesStrIncludeSpecialSymbol = (str: string): boolean => {
    const regexSymbol = str.match(/([^0-9|a-z|A-Z|.|\r|\n]+)/);
    const bool = regexSymbol ? true : false;
    return bool;
}

export const findAllNumbersInStr = (str: string): string[] => {
    const regexNumbers = str.match(/([0-9]+)/g);
    return regexNumbers ? regexNumbers : [];
}

export type GridNumber = {number: string, startIndex: number, endIndex: number, lineIndex: number};
export type NumbersArray = GridNumber[];
export type GridStar = {startIndex: number, lineIndex: number};
export type StarArray = GridStar[];

export const findAllNumbersAndStoreIndices = (str: string, lineIndex: number): NumbersArray => {
    const regexNumbers = /([0-9]+)/g;
    let regexArray;
    let lineNumbersArray: NumbersArray = [];

    while ((regexArray = regexNumbers.exec(str)) !== null) {
    lineNumbersArray.push({number: regexArray[0], startIndex: regexArray.index, endIndex: regexNumbers.lastIndex - 1, lineIndex: lineIndex});
    }
    return lineNumbersArray;
}

export const findAllStarsAndStoreIndices = (str: string, lineIndex: number): StarArray => {
    const regexStar = /(\*)/g;
    let regexArray;
    let lineStarArray: StarArray = [];

    while ((regexArray = regexStar.exec(str)) !== null) {
    lineStarArray.push({startIndex: regexArray.index, lineIndex: lineIndex});
    }
    return lineStarArray;
};

export const getSurroundingBoxFromGrid = (numberObj: GridNumber, inputGrid: string[][]): string => {
    // Return the characters above, adjacent, and below the number provided, and concatenate into a string
    // Take into account when the number appears on the edge of the grid
    const numberOfLines = inputGrid.length;
    const lengthOfLine = inputGrid[0].length;

    const startSlice = (numberObj.startIndex == 0) ? 0 : numberObj.startIndex - 1;
    const endSlice = (numberObj.endIndex == lengthOfLine - 1) ? lengthOfLine : numberObj.endIndex + 2;


    const topLine = (numberObj.lineIndex == 0) ? [''] : inputGrid[numberObj.lineIndex - 1].slice(startSlice, endSlice);

    const middleLine = inputGrid[numberObj.lineIndex].slice(startSlice, endSlice);

    const bottomLine = (numberObj.lineIndex == (numberOfLines - 1)) ? [''] : inputGrid[numberObj.lineIndex + 1].slice(startSlice, endSlice);

    const concatStr = `${topLine.join('')}${middleLine.join('')}${bottomLine.join('')}`

    return concatStr;
};

export const getBoxSurroundingStarFromGrid = (starObj: GridStar, inputGrid: string[][]): string => {
    // Return the characters above, adjacent, and below the star provided, and concatenate into a string
    // Take into account when the number appears on the edge of the grid, and don't cut it off
    const numberOfLines = inputGrid.length;
    const lengthOfLine = inputGrid[0].length;

    const topIndex = starObj.lineIndex - 1;
    const midIndex = starObj.lineIndex;
    const bottomIndex = starObj.lineIndex + 1;

    // if at start, no need to get previous
    const startSlice = (starObj.startIndex == 0) ? 0 : starObj.startIndex - 1;
    // if at end, no need to get next
    const endSlice = (starObj.startIndex == lengthOfLine - 1) ? lengthOfLine : starObj.startIndex + 2;

    // if star is on top line, return empty string for the line above it
    const topLine = (midIndex == 0) ? [''] : inputGrid[topIndex].slice(startSlice, endSlice);

    const middleLine = inputGrid[midIndex].slice(startSlice, endSlice);

    // if star is on bottom line, return empty string for the line below it
    const bottomLine = (midIndex == (numberOfLines - 1)) ? [''] : inputGrid[bottomIndex].slice(startSlice, endSlice);

    // if start or end of the top line is a number, keeping extending it until we have the full number
    let startTopSlice = startSlice;
    let endTopSlice = endSlice;
    let extendedTopLine = topLine;
    while (isNumber(extendedTopLine[0])) {
        if (startTopSlice > 0) {
            extendedTopLine.unshift(inputGrid[topIndex][startTopSlice-1]);
            startTopSlice -= 1;
        } else {
            break;
        }
    }
    while (isNumber(extendedTopLine[extendedTopLine.length - 1])) {
        if (endTopSlice < lengthOfLine) {
            extendedTopLine.push(inputGrid[topIndex][endTopSlice]);
            endTopSlice += 1;
        } else {
            break;
        }
    }

    // if start or end of the middle line is a number, keeping extending it until we have the full number
    let startMidSlice = startSlice;
    let endMidSlice = endSlice;
    let extendedMidLine = middleLine;
    while (isNumber(extendedMidLine[0])) {
        if (startMidSlice > 0) {
            extendedMidLine.unshift(inputGrid[midIndex][startMidSlice-1]);
            startMidSlice -= 1;
        } else {
            break;
        }
    }
    while (isNumber(extendedMidLine[extendedMidLine.length - 1])) {
        if (endMidSlice < lengthOfLine) {
            extendedMidLine.push(inputGrid[midIndex][endMidSlice]);
            endMidSlice += 1;
        } else {
            break;
        }
    }

    // if start or end of the bottom line is a number, keeping extending it until we have the full number
    let startBottomSlice = startSlice;
    let endBottomSlice = endSlice;
    let extendedBottomLine = bottomLine;
    while (isNumber(extendedBottomLine[0])) {
        if (startBottomSlice > 0) {
            extendedBottomLine.unshift(inputGrid[bottomIndex][startBottomSlice - 1]);
            startBottomSlice -= 1;
        } else {
            break;
        }
    }
    while (isNumber(extendedBottomLine[extendedBottomLine.length - 1])) {
        if (endBottomSlice < lengthOfLine) {
            extendedBottomLine.push(inputGrid[bottomIndex][endBottomSlice]);
            endBottomSlice += 1;
        } else {
            break;
        }
    }

    // concatenate the top, middle and bottom lines of the box separated by a semi-colon to use to search for whole numbers within it
    const concatStr = `${extendedTopLine.join('')};${extendedMidLine.join('')};${extendedBottomLine.join('')}`

    return concatStr;
};

export const getGearRatio = (boxStr: string): number => {
    // check adjacent characters to see if star is a gear
    const adjacentNumbers = findAllNumbersInStr(boxStr);
    const isGear = (adjacentNumbers.length == 2);
    
    // if star is a gear, return gear ratio, else return 0
    const gearRatio = isGear ? (Number(adjacentNumbers[0]) * Number(adjacentNumbers[1])) : 0;

    return gearRatio;
}

/**
 * DAY 04 UTILS
 */

export  const findCardID = (str: string): number => {
    const regexCardIDMatch = str.match(/Card +([0-9]+)/);
    const ID = regexCardIDMatch ? Number(regexCardIDMatch[1]) : 0;
    return ID;
};

export  const findGoldenNumbers = (str: string): string[] => {
    const regexNumbers = str.match(/: (.*) \|/);
    const numbersStr = regexNumbers[1];
    const numArray = numbersStr?.split(/ +/)
    return numArray;
};

export  const findCardNumbers = (str: string): string[] => {
    const regexNumbers = str.match(/\| (.*)/);
    const numbersStr = regexNumbers[1];
    const numArray = numbersStr?.split(/ +/);
    return numArray;
};

/**
 * DAY 05 UTILS
*/

export type AttributeMap = {destinationStart: number, sourceStart: number, length: number}[]

export const findSeedNumbers = (str: string): number[] => {
    const regexSeeds = str.match(/seeds: (.*)/);
    const numbersStr = regexSeeds[1];
    const seedArray = numbersStr?.split(/ +/).map(numStr => Number(numStr));
    return seedArray;
};

export const getAttributeMapping = (mapTitle: string, inputStr: string): AttributeMap => {
    const regexMapBlock  = inputStr.match(new RegExp(`(${mapTitle}:)(\b|\n)(([0-9]+ *)+\n)+`));
    const mapBlockStr = regexMapBlock[0];
    const mapBlockLines = splitByLine(mapBlockStr);
    const mapLines = mapBlockLines.slice(1).filter(line => line.length != 0);
    
    const mapObj = mapLines.map(range => {
        const rangeArray = findAllNumbersInStr(range);
        return ({
            destinationStart: Number(rangeArray[0]),
            sourceStart: Number(rangeArray[1]),
            length: Number(rangeArray[2]),
        });
    });
    return mapObj;
};

export const isInRange = (value: number, sourceStart: number, rangeLength: number): boolean => (value >= sourceStart && value < sourceStart + rangeLength);
export const mappedValue = (value: number, destinationStart: number, sourceStart: number): number => value + (destinationStart - sourceStart)

export const calculateDestinationValue = (map: AttributeMap, value: number): number => {  
    // Iterate over the map to find the corresponding value and calculate destination number
    for (const range of map) {
        if (isInRange(value, range.sourceStart, range.length)) {
            const destinationValue = mappedValue(value, range.destinationStart, range.sourceStart);
            return destinationValue;
        }
    }
    // If the value is not in map, return value as it is
    const destinationValue = value;
    
    return destinationValue;
};

export const curriedMapFunction = _.curry(calculateDestinationValue);

export const getSeedNumberArraysFromSeedInput = (seedInput: number[]): number[][] => {
    const seedNumberArrays: number[][] = [];
  
    for (let i = 0; i < seedInput.length; i += 2) {
      const seedNumbers: number[] = [];
      const start = seedInput[i];
      const length = seedInput[i + 1];
      for (let j = 0; j < length; j++) {
        seedNumbers.push(start + j);
      };
      seedNumberArrays.push(seedNumbers);
    }
  
    return seedNumberArrays;
};

/**
 * DAY 06 UTILS
*/

export const findPossibleCombinations = (t_total: number): [t_0: number, t_1: number][] => {
    const combinationArray = [];
    for (let t_0 = 0; t_0 <= t_total; t_0 ++) {
        const t_1 = t_total - t_0;
        combinationArray.push([t_0, t_1]);
    };
    return combinationArray;
};

export const calculateDistanceTravelled = (a: number, v_0: number, t_0: number, t_1: number): number => {
    return t_1 * (v_0 + (a * t_0));
};
