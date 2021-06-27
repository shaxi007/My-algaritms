function isPalindrome(word) {
    let reverse = ''
    for (let i = word.length; i > 0; --i) {
        reverse += word[i - 1]
    }
    if (word == reverse) {
        return true
    }
    return false
}

console.log(isPalindrome('bob'));