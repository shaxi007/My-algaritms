let arr = ["0101", "01001", "010011"];
let reverse = [];

for (let i = 0; arr.length > i; ++i) {
    let str = "";
    for (let j = 0; j < arr[i].length; ++j) {
        str += +(!Number(arr[i][j]));
    }
    reverse.push(str);
}

console.log(reverse);