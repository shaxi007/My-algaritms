function join(word, join) {
    let variableWord = ''
    for (let i in word) {
        if (word[word.length - 1] == word[i]) {
            variableWord += word[i]
        } else {
            variableWord += word[i] + join
        }
    }
    return variableWord
}

console.log(join("word", ','));