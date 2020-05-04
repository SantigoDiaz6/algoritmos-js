// var toLowerCase = function(str) {
//     let str1 = [];
//     str1.charCodeAt(str);
//     return str1;
// };
    // return str.replace(/[A-Z]/g, /[a-z]/);
// char[] s1 = a1.toCharArray();
// int diff = 'a' - 'A';

// for (int i=0; i < s1.length; i++) {
//     if (s1[i] >= 'A' && s1[i] <= 'Z') {
//         s1[i] += diff;
//     }
// }

// System.out.println(s1);
// };

var toLowerCase = function(str) {
    let string = '';
    for(let i=0; i<str.length; i++){
        const value = str.charCodeAt(i);
        if (value >= 65 && value <= 90){
            string += String.fromCharCode(value + 32);
        } else{
            string += str.charAt(i);
        }
    }
    return string;
};

console.log(toLowerCase("Hola"));
// console.log(toLowerCase('Hola'));