
// import chalk from './node_modules/chalk';
const chalk = require('chalk');
const validator = require('validator')

console.log(chalk.blue.inverse('Hello world!'));

const mail = validator.isEmail('mk@123.com')
console.log(mail ? chalk.green.inverse(mail) : chalk.red.inverse(mail))