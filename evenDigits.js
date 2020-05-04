var findNumbers = function(nums) {
    var arre = [];
    for ( let i = 0; i < nums.length; i++) {
        arre.push(String(nums[i]).length);
    }
    var evens = arre.filter( x => (x % 2 === 0));
    return evens.length;
};

console.log(findNumbers([12,345,2,6,7896]));
console.log(findNumbers([555,901,482,1771]));