var all = require('./basic_every_some.js');


var company = [{id: 1},{id:2},{id:4}];
var employees = [{id: 1},{id:4},{id:2}];

console.log( all(company)(employees) ? "All employees are found at the company!" : "Some employees are missing from the company!");
