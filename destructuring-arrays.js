'use strict';

const arr = [1,2,3];

//Normal way of seperating array to variables
const a = arr[0];
const b = arr[1];
const c = arr[2];

//Destructuring the array into separate variables
//It is a ES6 feature
//Upacks the array into separate variables
const [x, y, z] = arr;
console.log(x);
console.log(y);
console.log(z);

const person = {
    name: "Eshwar",
    age: '23',
    hobbies: ['Swimming', 'Dancing', 'Singing', 'Coding'],
    eatingHobbies: ['Standing and eating', 'sitting and eating'],
    favHobbies: function(hobbieIndex, eatingHobbieIndex) {
        return [this.hobbies[hobbieIndex], this.eatingHobbies[eatingHobbieIndex]];
    }
}
const [first, second] = person.hobbies;

console.log(first);
console.log(second);

let [fir, , sec] = person.hobbies;
console.log(fir);
console.log(sec);
//Swapping in normal way
const temp = fir;
fir = sec;
sec = temp;
console.log(fir);
console.log(sec);

//Swapping without temp variable(Using Destructuring)
[fir, sec] = [sec, fir];
console.log(fir);
console.log(sec);

const [firstHobbie, secondHobbie] = person.favHobbies(2, 1);
console.log(firstHobbie);
console.log(secondHobbie);
//Nested array destructuring
const arr1 = [2, 3, [5, 6]];
const [i, ,[j, k]] = arr1;
console.log(i,j,k);

//default values
const [p=1, q=2, r=3] = [8,9];
console.log(p,q,r);

