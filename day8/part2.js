const fs = require('fs');
let input = fs.readFileSync('day8/input.txt', 'utf-8');
//input =  fs.readFileSync('day8/testInput.txt', 'utf-8');

let parts=[], uniques, outputs, sum=0;
input.split("\n").forEach(element => {
    uniques = element.split(" | ")[0].split(" ");
    outputs = element.split(" | ")[1].split(" ");
    parts.push({uniques, outputs});
});

let digits = new Array(10);
parts.forEach(part => {
    // get 'code' of the known digits
    digits[1] = part.uniques.find(code => code.length == 2);
    digits[4] = part.uniques.find(code => code.length == 4);
    digits[7] = part.uniques.find(code => code.length == 3);
    digits[8] = part.uniques.find(code => code.length == 7);

    // start with length of 5 and difference with kwnown numbers
    digits[3] = part.uniques.find(code => code.length == 5 && code.split('').filter(value => !digits[7].split('').includes(value)).length == 2);
    digits[5] = part.uniques.find(code => code.length == 5 && code.split('').filter(value => !digits[4].split('').includes(value)).length == 2 && code != digits[3]);
    digits[2] = part.uniques.find(code => code.length == 5 && code != digits[3] && code != digits[5]);

    // start with length of 6 and difference with kwnown numbers
    digits[6] = part.uniques.find(code => code.length == 6 && code.split('').filter(value => !digits[1].split('').includes(value)).length == 5);
    digits[9] = part.uniques.find(code => code.length == 6 && code.split('').filter(value => !digits[4].split('').includes(value)).length == 2 && code != digits[6]);
    digits[0] = part.uniques.find(code => code.length == 6 && code != digits[6] && code != digits[9]);

    // sort digits
    digits.forEach((digit, i) => {
        digits[i] = digit.split('').sort().join('');
    });

    // find match with outputs and make sum
    let number = "";
    part.outputs.forEach(output => {
        number += digits.indexOf(output.split('').sort().join(''));
    });
    sum += parseInt(number);
});

console.log(sum);
//1010472