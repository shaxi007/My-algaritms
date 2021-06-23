let array=[['x',23],['y',43],['name','Nodir']]
let obj={}
for(let i =0;i<array.length;++i){
    obj[array[i][0]]=array[i][1]
}
console.log(obj);