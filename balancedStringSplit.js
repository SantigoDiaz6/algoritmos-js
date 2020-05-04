var balancedStringSplit = function(s) {
    let contGral = 0;
    let contResi = 0
    // arre = s.split('');
    for (let i = 0; i <= s.length; i++) {
        if (s[i] === 'L' ? contResi +=1 : contResi -=1); 
        // if (s[i] === 'L') {
        //     contResi += 1;
        // } else {
        //     contResi -= 1;
        // }
        if (contResi === 0) {
            contGral += 1;
        }
    }
    return contGral;
};

console.log(balancedStringSplit("RLRRLLRLRL"));
console.log(balancedStringSplit("RLLLLRRRLR"));
console.log(balancedStringSplit("LLLLRRRR"));
console.log(balancedStringSplit("RLRRRLLRLL"));

