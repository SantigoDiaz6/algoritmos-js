var numberOfSteps  = function(num) {
    var cont = 0;
    while (num !== 0) {
            if (num %2 === 0) {
                num = num/2;
            } else {
                num -= 1;
            }
         cont ++;
    }
    return cont;
};

console.log(numberOfSteps(14));
console.log(numberOfSteps(8));
console.log(numberOfSteps(123));