'use strict';
// require next level
console.log(process.argv);
module.exports = require(`./${process.argv[2]}`);

