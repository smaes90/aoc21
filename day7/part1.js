const fs = require('fs');
const input = fs.readFileSync('day7/input.txt', 'utf-8').split(",").map(Number);
//const input =  [16,1,2,0,4,2,7,1,2,14];

const getMedian = arr => {
    const mid = Math.floor(arr.length / 2),
        nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

const median = getMedian(input);

let total = 0;
input.forEach(element => {
    total += Math.abs(element - median);
});

console.log(total);