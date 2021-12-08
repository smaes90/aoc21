const fs = require('fs');
const input = fs.readFileSync('day8/input.txt', 'utf-8').split("\n");
//const input =  fs.readFileSync('day8/testInput.txt', 'utf-8').split("\n");

let count = 0;
input.forEach(element => {
    digits = element.substring(element.indexOf("|")+2).split(" ");
    digits.forEach(digit => { if ([2,3,4,7].includes(digit.length)) count++ });
});

console.log(count);