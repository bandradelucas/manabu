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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // [...Array(n).keys()].map(item => console.log([...Array(item + 1).fill('#')].join('')))
    
    [...Array(n).keys()].map(item => {
      console.log([
        ...[...Array(n - (item + 1)).fill(' ')],
        ...[...Array(item + 1).fill('#')]
      ].join(''))
    })
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
