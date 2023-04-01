
const os = require('os');

// console.log(os.arch());

const freeMem = os.freemem()
// console.log(`Free memory is: ${freeMem}`)
// console.log(`Free memory is: ${freeMem/1024/1024/1024} GB`)
// const roundMem = freeMem/1024/1024/1024
// console.log(Math.round(roundMem))

const totalMem = os.totalmem()
// console.log(totalMem/1024/1024/1024)

const hName = os.hostname()
// console.log(hName)

// console.log(os.platform())
// console.log(os.endianness())
// console.log(os.cpus())
// console.log(os.homedir())
// console.log(os.machine())
// console.log(os.tmpdir())
// console.log(os.type())
// console.log(os.networkInterfaces())
// console.log(os.userInfo())
console.log(os.version())
