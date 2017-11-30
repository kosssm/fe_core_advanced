const a = 'qwertyuiop';
const b = 'asdfghjkl';
const c = 'zxcvbnm';

var lengthA = a.length;
var lengthB = b.length;
var lengthC = c.length;
// console.log(lengthA);
// console.log(lengthB);
// console.log(lengthC);
console.log('firts symbol: ' + a.charAt(0) + ' /and last symbol: ' + a.charAt(10-1));
console.log('firts symbol: ' + b.charAt(0) + ' /and last symbol: ' + b.charAt(8));
console.log('firts symbol: ' + c.charAt(0) + ' /and last symbol: ' + c.charAt(6));

var searchSymbol = c.indexOf('n');
console.log(searchSymbol);
var searchSymbol = b.indexOf('n');
console.log(searchSymbol);
var searchSymbol = a.indexOf('n');
console.log(searchSymbol);

let result = 
`The string: "${a}" has first letter: ${a.charAt(0)} and last letter ${a.charAt(10-1)}. Symbol "n" have index of ${a.indexOf('n')}
The string: "${b}" has first letter: ${b.charAt(0)} and last letter ${b.charAt(10-1)}. Symbol "n" have index of ${b.indexOf('n')}
The string: "${c}" has first letter: ${c.charAt(0)} and last letter ${a.charAt(10-1)}. Symbol "n" have index of ${c.indexOf('n')}`
console.log(result); 

