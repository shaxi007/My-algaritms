let nums=[-5,-8,7,-90,78,-6,12]

let temporarily=nums[nums.length-1]
for(let i=0;i<nums.length-1;++i){
    if(temporarily>nums[i]){
        temporarily=nums[i]
    }
}
console.log(temporarily);