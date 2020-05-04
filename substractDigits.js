var subtractProductAndSum = function(n) {
    const digits = Array.from(String(n), Number)
    const prod = digits.reduce((a, b) => a * b);
    const suma = digits.reduce((a, b) => a + b);
    const total = prod - suma;
    return total;
};

console.log(subtractProductAndSum(234));
console.log(subtractProductAndSum(4421));
