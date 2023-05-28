
//Task 1


let fruits = ["apple", "banana", "orange", "grape"]

fruits.push("kiwi")  //add a new to the end of the fruits array
console.log(fruits)

fruits.pop()   // remove the last fruit from the fruits array
console.log(fruits)

fruits.unshift("lemon")  // add new fruit th the beginning of the fruits array
console.log(fruits)

fruits.shift()  //remove the first fruit from the fruits array
console.log(fruits)

let index = fruits.indexOf('orange') // Index of fruit 'orange'
console.log(index)

const fruit = ["banana", "orange", "lemon", "apple", "mango"]
const citrus = fruit.slice(1, 3)
console.log(citrus)


// Task -2


//create an object 'person'
const person = {
    name: "Rahul",
    age: 25,
    address: "West Bengal"
}
//print the value of each property
console.log(person.nmae)
console.log(person.age)
console.log(person.address)


person.age = 30 // update the value of age  property
console.log(person.age)

person.email = "rahulkmrsahu@gmail.com"  // add a new property  email(string) to the person object

delete person.address  //delete the address property from the person object

console.log(person)


