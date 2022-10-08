// 3
// Yearly Qaurters 1 - 12
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af
// Example 2"FEB" -> Q1

const quarterOf = (month) => {
    if (month <= 3) return 1
    if (month > 3 && month <= 6) return 2
    if (month > 6 && month <= 9) return 3
    if (month > 9 && month <= 12) return 4

    // other solution:
    // return Math.ceil(month / 3)
}
// console.log(quarterOf(11))

