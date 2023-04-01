// |||||| Eg of Callback function
// const perOne = (friend, callfrnd) => {
//   console.log(`I am busy right Now.I am talking to ${friend}. I will call you back. `);
//   callfrnd();
// };

// const perTwo = () => {
//   console.log(` Hey what's { up. I call back you dekha.`);
// };

// perOne("Thapa", perTwo);


// |||||  Create a file in Asynchronous way  |||||
const fs = require("fs");

// fs.writeFile("asyncFile.txt", "Experimenting with Asynchronous FS", (err) => {
//     console.log('File is created')
//     console.log(err)
// })

// Here Callback function is necessary to use!

// Append contents
// fs.appendFile('asyncFile.txt', '. Append this line', (e) => {
//     console.log('Task completed')
//     console.log(e)
// })


// |||||  Read files   ||||

// const data = fs.readFile('asyncFile.txt', (e) => {               THIS WILL NOT WORK - wrong syntax
//     console.log('Reading the file')
//     console.log(e)
// })
// console.log(data)

// fs.readFile('asyncFile.txt', (e, data) => {
//     console.log(data)
//     console.log(data.toString())
//     console.log(e)
// })

// OR

fs.readFile('asyncFile.txt', "utf-8" ,(e, data) => {
    console.log(data)
    console.log(e)
})