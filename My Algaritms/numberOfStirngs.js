function numberOfStrings(str) {
    let arr = str.split(''), a = [], b = 0
    for (let i = 0; i < arr.length; ++i) {
        let count = 1
        for (var j = i + 1; j < arr.length; ++j) {
            if (arr[j] == arr[i]) {
                count += 1
                arr.splice(--j, 1)
                b = arr[j]
            }
        }
        a.push(b, count)
    }
    return a.join('')
}

let str = "aaabbccc"

console.log(numberOfStrings(str));
