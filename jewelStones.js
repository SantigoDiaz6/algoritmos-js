var numJewelsInStones = function(J, S) {
    var cont = 0;
    for (let i = 0; i < J.length; i++) {
        for (let j = 0; j < S.length; j++) {
            if (J[i] === S[j]) {
                cont++;
            }
        }
    }
    return cont;
};

console.log(numJewelsInStones(('aA'),('aAAbbbb')));
console.log(numJewelsInStones(('z'),('ZZ')));