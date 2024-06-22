// primitive
/*
7 categories, string, number, boolean, null, undefined, symbol, 
BigInt
*/

const score = 100
const scoreValue = 47.7
const isLoggedIn = true
const outsideTemp = null
let UserEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 237467n

// reference (no-primitive)
/*
Array, objects, functions
*/z

const heroes = ['Spiderman', 'superman', 'batman']
let myObj = {
    name:'Manav',
    age:'23',
}

const myFunction = function(){
console.log('Hello World!')    
}

//******************************** */
//stack(primitive), heap(non-premitive) (types of memories)

let myName = "ManavSood";
let anotherName = myName;

console.log(anotherName);

