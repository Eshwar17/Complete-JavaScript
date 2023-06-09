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
({a, b} = obj);//trick: Add parentheses to avoid erro
console.log(a, b);
const person1 = {
    name: {
        firstName: 'Eshwar',
        last: 'Nagaraj',
    },
    age: 23,
    hobby: function(obj) {
        console.log(obj);
    }
}
console.log(person1.hobby({id:1,nickName: 'Eshu'}));
//Nested object
const {name: {firstName, last}} = person1;
console.log(firstName);
console.log(last);

