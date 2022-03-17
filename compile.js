// this is a node script that will compile the html from json objects with other data like projects
// to run this script use the command 
// node compile.js on the command line
const fs = require('fs');

let fileString = fs.readFileSync('index.html').toString();
console.log(fileString);

// first load all strings of json objects by looping through json folder

// next create html snippets for each object

// finally store those as strings of html in a js file that can be loaded on site