const person = {
    name: "Rachael", // key: name, value 'Rachael'
    age: 30, // key: age, value: 30
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up at 7am",
    sayHi() {
        return `Hello, my name is ${this.name}`
    },
    
}

// let day = 'sunday';
// let alarm;

// if (day === "saturday" || day === "sunday") {
//     alarm = person.weekendAlarm;
//     console.log(person.weekendAlarm)
// } else {
//     alarm = person.weekdayAlarm;
//     console.log(person.weekdayAlarm)
// }

// person.favSongs = ["song1", "song2", "song3"];
// console.log(person.favSongs);
// console.log(person)

console.log(person.sayHi());