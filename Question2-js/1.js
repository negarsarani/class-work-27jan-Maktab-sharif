'use strict';
let char = "hello i'm a student and search my problems in google";
let result = '';
// for (let str of char) {
// switch (str) {
//   case 'a':
//     result += '@';
//     break;
//   case 'e':
//     result += '3';
//     break;
//   case 'g':
//     result += '&';
//     break;
//   case 'i':
//     result += '!';
//     break;
//   case 'o':
//     result += '0';
//     break;
//   default:
//     result += str;
// }
// }
// console.log(result);

let arr = char.split('');
arr.forEach((item, index) => {
switch (item) {
  case 'a':
    arr[index] = '@';
    break;
  case 'e':
    arr[index] = '3';
    break;
  case 'g':
    arr[index] = '&';
    break;
  case 'i':
    arr[index] = '!';
    break;
  case 'o':
    arr[index] = '0';
    break;
  default:
    item;
}
});
console.log(arr.join(''));







