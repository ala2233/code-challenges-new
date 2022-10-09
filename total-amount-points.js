// Our football team has finished the championship.

// Our teams match results are recorded in a collection of strings.
// Each match is represented by a string in the format
// "x:y", where x us our teams score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)

// We need to write a function that takes this collection and returns
// the number of points our team (x) got in the championship by
// the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

const points = (games) => {
    let teamX = 0
    for (let i = 0; i < games.length; i++) {
        const arr = games[i].split(":")
        if (arr[0] > arr[1]) teamX += 3
        if (arr[0] === arr[1]) ++teamX
    }
    return teamX
}

console.log(points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']))

