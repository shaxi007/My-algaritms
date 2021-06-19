let obj = { x: 10, y: 25, name: "Nodir" };

let arr = [];

for (let i in obj) {
    arr.push([i,obj[i]]);
}
console.log(arr);
