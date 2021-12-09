const fs = require('fs');
let input = fs.readFileSync('day9/input.txt', 'utf-8');
input =  fs.readFileSync('day9/testInput.txt', 'utf-8');

const heightmap = input.split('\n').map(a => a.split('').map(Number));

let riskLevel = 0;

for (let i = 0; i < heightmap.length; i++) {
    for (let j = 0; j < heightmap[0].length; j++) {
        let adjacent = [];
        if (i >= 1) adjacent.push(heightmap[i - 1][j]);
        if (j >= 1) adjacent.push(heightmap[i][j - 1]);
        if (i < heightmap.length - 1) adjacent.push(heightmap[i + 1][j]);
        if (j < heightmap[0].length - 1) adjacent.push(heightmap[i][j + 1]);
        if (Math.min(...adjacent) > heightmap[i][j]) riskLevel += heightmap[i][j] + 1;
    }
}

console.log(riskLevel);