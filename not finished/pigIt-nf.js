// 1
// Move the first letter of each word to the end of it,
// then add "ay" to the end of the word.
// Leave punctuation marks untouched.
// Exapmle
// pigIt('Hello world !');     // elloHay orldway !

const pigIt = (word) => {
    const splitedWords = word.split(' ')
    for (let i = 0; i < splitedWords.length; i++) {
        console.log(splitedWords[i])
    }
}

// pigIt('Hello world !')
