// 4
// Sheep Warning
// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
const warnTheSheep = (s) => {
    if (s[s.length - 1] === 'wolf') return `Pls go away and stop eating my sheep`
    s = s.reverse()
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'wolf') return `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`
    }
}
// console.log(warnTheSheep(['sheep', 'wolf', 'sheep', 'sheep', 'sheep', 'sheep']))
