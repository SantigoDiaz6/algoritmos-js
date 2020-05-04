var decompressRLElist = function (nums) {
    let array = [];
  
    for (let i = 0; i < nums.length; i += 2) {
  
      const numbers = Array.from({ length: nums[i] }, el => nums[i + 1]);
      array = array.concat(numbers);
    }
  
    return array;
  };