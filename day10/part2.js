const fs = require('fs');
let input = fs.readFileSync('day10/input.txt', 'utf-8');
//input =  fs.readFileSync('day10/testInput.txt', 'utf-8');

lines = input.split("\n");

let openingTags = /[\(\[\{\<]/;
let closingTags = /[\)\]\}\>]/;
    
let tagPairs = { '(':')', '[':']','{':'}','<':'>' }
let points = { '(': 1, '[': 2, '{': 3, '<': 4, }
let sum = [];

lines.forEach(line => {
    let score = 0;
    let stack = [];
    for (let i = 0; i < line.length; i++) {
        if (line[i].match(openingTags)) stack.push(line[i]);
        if (line[i].match(closingTags) && tagPairs[stack.pop()] != line[i]) return;
    }
    
    for (let i = stack.length - 1; i >= 0; i--) {
        score *= 5;
        score += points[stack[i]];
    }
    sum.push(score);
});

sum.sort((a, b) => a - b);
console.log(sum[Math.floor(s.length / 2)]);

//2858785164