
const add = (a, b) => {
    return a + b;
}

const mul = (a, b) => {
    return a * b;
}

const name = 'Mont';

// module.exports = {add}, {name};
// module.exports = name;
// module.exports.add1 = add;
// module.exports.mul1 = mul;
// module.exports.name1 = name;

// We can avoid writing the above lenghty codes by again sending the functions and variables as an OBJECT 

module.exports = { add, mul, name }         // No issue of positioning 