// console.log("Mondeep's empire is soo close and building rapidly :)")

const fs = require("fs")

// // Creating a new file
// fs.writeFileSync("read.txt", "Mondeep's empire is soo close and building rapidly 😃")

// // writeFileSync overwrites the data
// fs.writeFileSync("read.txt", "Yayy!!! Mondeep's empire is soo close and building rapidly 😃")

// fs.appendFileSync("read.txt", " Let's build it with great values 🔥")


// Read data from files
// const bufferData = fs.readFileSync('read.txt')
// console.log(bufferData)

{/* <Buffer 59 61 79 79 21 21 21 20 4d 6f 6e 64 65 65 70 27 73 20 65 6d 70 69 72 65 20 69 73 20 73 6f 6f 20 63 6c 6f 73 65 20 61 6e 64 20 62 75 69 6c 64 69 6e 67 ... 51 more bytes> */}

// originalData = bufferData.toString()
// console.log(originalData)


// Rename a file

fs.renameSync('read.txt', 'read-write.txt')
