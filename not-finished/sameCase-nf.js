//2
// Check Same Case

// if not letter return -1
// same case return 1
// not  same case return 0

const sameCase = (a, b) => {
    if (a && b)
        if (a === b) return 1
    if (a !== b) return 0
}

// console.log(sameCase('a', 'A'))
