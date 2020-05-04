var smallerNumbersThanCurrent = function(nums) {
    let arr = []
    for (let i = 0; i<nums.length; i++){
        arr.push((nums.filter((item) =>(item < nums[i]))).length)
    }
    return arr
    
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));