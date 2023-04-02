
const importedObject = require("./oper")
// const name = require("./oper")

// console.log(importedObject(3, 9))
// console.log(name)

// console.log(add(1,2))   // wont work for module.exports.add = add; 
// console.log(name)

console.log(importedObject)             // It'll show that this is an OBJECT. This is the output= { add: [Function: add], name: 'Mont' }

console.log(importedObject.add(1, 2))      // this will perfectly work for module.exports.add = add;

console.log(importedObject.name)


// Now we can avoid writing importedObject.add, importedObject.name with the help of OBJECT DESTRUCTURING as shown below

const { add, name, mul } = require('./oper')         // Here we're doing the Object Destructuring

console.log(add(3, 9));
console.log(name);
console.log(mul(2, 9))
