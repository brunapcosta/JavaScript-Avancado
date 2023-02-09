
// class Person {
//     name;
//     age;

//     talk() {
//         console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`)
//     }
// }

// const newPerson = new Person()
// newPerson.name = "Bruna"
// newPerson. age = 28
// newPerson.talk()

class Person {
    constructor(name, age) {
        console.log(`Helo, my name is ${name}`)

        this.name = name
        this.age = age
    }

    talk() {
        console.log(`and I'm ${this.age} years old.`)
    }
}

const newPerson = new Person("Bruna", 28)
newPerson.talk()
const newPerson2 = new Person("Raquel", 31)
newPerson2.talk()
const newPerson3 = new Person("André", 64)
newPerson3.talk()