const pet = {
    name: "Rufus",
    typeOfPet: "Cat",
    age: 10,
    color: "Tabby",
    eat() {
        return `${this.name} is eating!`
    },
    drink() {
        return `${this.name} is drinking!`
    }
}

console.log(pet.drink()); // expect "Rufus is drinking!" to print
console.log(pet.eat()); // expect "Rufus is eating!" to print
console.log(pet.name); // expect "Rufus" to print


