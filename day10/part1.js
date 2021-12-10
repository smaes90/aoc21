const fs = require('fs');
let input = fs.readFileSync('day10/input.txt', 'utf-8');
//input =  fs.readFileSync('day10/testInput.txt', 'utf-8');

lines = input.split("\n");

let openingTags = /[\(\[\{\<]/;
let closingTags = /[\)\]\}\>]/;
    
let tagPairs = { '(':')', '[':']','{':'}','<':'>' }
let points = { ')': 3, ']': 57, '}': 1197, '>': 25137, }
let sum = 0;

lines.forEach(line => {
    let stack = [];
    for (let i = 0; i < line.length; i++) {
        if (line[i].match(openingTags)) stack.push(line[i]);
        if (line[i].match(closingTags)) {
            if (tagPairs[stack.pop()] != line[i]) {
                sum += points[line[i]];
                return;
            }
        }
    }
});

console.log(sum);
//323691