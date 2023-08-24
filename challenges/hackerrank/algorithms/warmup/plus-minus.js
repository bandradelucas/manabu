'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    const positiveNumbers = arr.filter(number => number > 0).length
    const negativeNumbers = arr.filter(number => number < 0).length
    const zeroNumbers = arr.filter(number => number == 0).length
    
    console.log(positiveNumbers / arr.length)
    console.log(negativeNumbers / arr.length)
    console.log(zeroNumbers / arr.length)
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
