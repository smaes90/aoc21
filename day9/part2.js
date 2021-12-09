const fs = require('fs');
let input = fs.readFileSync('day9/input.txt', 'utf-8');
input =  fs.readFileSync('day9/testInput.txt', 'utf-8');

const heightmap = input.split('\n').map(a => a.split('').map(Number));

let lowPoints = [];
let basinSizes = []

const getadjacent = (point) => {
    let adjacent = [];
    const i = point[0];
    const j = point[1];
    if (i >= 1) adjacent.push([i - 1, j]);
    if (j >= 1) adjacent.push([i, j - 1]);
    if (i < heightmap.length - 1) adjacent.push([i + 1, j]);
    if (j < heightmap[0].length - 1) adjacent.push([i, j + 1]);
    return adjacent;
}

for (let i = 0; i < heightmap.length; i++) {
    for (let j = 0; j < heightmap[0].length; j++) {
        const neighbourValues = getadjacent([i, j]).map(nv => heightmap[nv[0]][nv[1]]);
        if (Math.min(...neighbourValues) > heightmap[i][j])
            lowPoints.push([i, j]);
    }
}

lowPoints.forEach(point => {
    let basinSize = 0;
    const visited = [];
    const toVisit = [point];
    while (toVisit.length > 0) {
        const curr = toVisit.pop();
        if (visited[curr] == true)
            continue;
        visited[curr] = true;
        basinSize++;
        getadjacent(curr).forEach(adj => {

            if (heightmap[adj[0]][adj[1]] < 9 && visited[adj] == undefined)
                toVisit.push(adj);

        });
    }
    basinSizes.push(basinSize);
})

const topThreeBasinSizes = basinSizes.sort((a, b) => b - a).slice(0, 3);

console.log(topThreeBasinSizes.reduce((total, curr) => total * curr));