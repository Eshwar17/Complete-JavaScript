const arr = [1,2,3,4];
const newArr = [9, ...arr];
console.log(newArr);
const newArr1 = [...arr, 8];
console.log(newArr1);
//copying the array
const newArr2 = [...arr];
console.log(newArr2);

//Join 2 arrays
const newArr3 = [...newArr, ...newArr2];
console.log(newArr3);

//Spread operator on Strings
const firstName = 'Eshwar';
console.log(...firstName);
