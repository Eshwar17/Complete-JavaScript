const person = {
    name: 'Eshwar',
    age: 23,
    hobbies: ['Swimming', 'Dancing', 'Singing', 'Coding'],
    eatingHobbies: ['Standing and eating', 'sitting and eating'],
    favHobbies: function(hobbieIndex, eatingHobbieIndex) {
        return [this.hobbies[hobbieIndex], this.eatingHobbies[eatingHobbieIndex]];
    }
}