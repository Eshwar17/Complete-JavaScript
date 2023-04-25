const person = {
    name: 'Eshwar',
    age: 23,
    hobbies: ['Swimming', 'Dancing', 'Singing', 'Coding'],
    eatingHobbies: ['Standing and eating', 'sitting and eating'],
    favHobbies: function(hobbieIndex, eatingHobbieIndex) {
        return [this.hobbies[hobbieIndex], this.eatingHobbies[eatingHobbieIndex]];
    }
}

const {name, age, hobbies} = person;

console.log(name, age, hobbies);
//Custom names for the props
const {name: personName, age: personAge} = person;
console.log(personName, personAge);

//default valus to the props
const {nam, lastName = 'Nagaraj'} = person;
console.log(name, lastName);
//custom name and default value for the props
const {age: personsAge = 20} = person;
console.log(age);
//Mutating variables
let a = 3333;
let b = 999;

const obj = {
    a: 23,
    b: 7,
    c: 12
};
({a, b} = obj);
console.log(a, b);
