// https://www.codewars.com/kata/5b7ea71db90cc0f17c000a5a

const solution = (moral1, moral2, mass1, mass2, vol, temp) => {
    return ((mass1 / moral1) + (mass2 / moral2) * 0.082 * temp) / vol
}

console.log(solution(44, 30, 3, 2, 5, 50)) // 0.7146511212121212