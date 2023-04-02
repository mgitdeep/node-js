
// const bioData = {
//     name: 'Mondeep',
//     age: 22,
//     blog: 'GrabitGo.com'
// }

// console.log(bioData)
// console.log(bioData.blog)

// const jsonData = JSON.stringify(bioData)
// // console.log(jsonData.blog)                  - Undefined
// console.log(jsonData)  

// const parseData = JSON.parse(jsonData)
// console.log(parseData)                      // same as console.log(bioData)


// |||   TASK   |||
/*
1. convert to json
2. add data to a different file
3. read that file
4. again convert to Object format 
5. console.log()
*/

const newData = {
    name: 'Mondeep',
    age: 22,
    blog: 'GrabitGo.com'
}

// 1
const toJson = JSON.stringify(newData)
// console.log(toJson)

// 2
const fs = require('fs')
// fs.writeFile('JsonFile.json', toJson, () => {
//     console.log('\nJson data added to file \n')
// })

// 3
fs.readFile('JsonFile.json', 'utf-8', (err, data) => {
    console.log('File read successful \n')
    console.log(data)
    console.log(JSON.parse(data))
})

