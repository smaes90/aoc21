const fs = require('fs');
const input = fs.readFileSync('day7/input.txt', 'utf-8').split(",").map(Number);
//const input =  [16,1,2,0,4,2,7,1,2,14];

const getAverage = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
const averageUp = Math.ceil(getAverage(input));
const averageDown = Math.floor(getAverage(input));

let total = 0;
input.forEach(element => {
    let diffUp = Math.abs(element - averageUp);
    let diffDown = Math.abs(element - averageDown);
    costUp = Math.floor(diffUp * (diffUp+1) / 2);
    costDown = Math.floor(diffDown * (diffDown+1) / 2);
    console.log(`costup: ${costUp}, costdown: ${costDown}`)
    total += (costUp > costDown) ? diffDown * (diffDown+1) / 2 : diffUp * (diffUp+1) / 2;
});

console.log(total);
//99053143