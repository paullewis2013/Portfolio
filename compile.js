// this is a node script that will compile the html from json objects with other data like projects
// to run this script use the command 
// 'node compile.js'
// on the command line

// load node file system and path module
const fs = require('fs');
const path = require('path');

projects = []

// first access all json objects representing projects by looping through json folder
for (const filePath of walkSync('json')) {
    console.log("loading" + filePath);

    //load json object into memory
    let data = fs.readFileSync(filePath)
    let obj = JSON.parse(data)
    console.log(obj)

    fs.writeFile(obj.landing_page_link, 'test');
}


// next delete all files in html/landing pages folder

// next create html snippets for each object and write to html folder

// finally store those as strings of html in a js file that can be loaded on site



// utility functions

// function from stackOverflow (https://stackoverflow.com/questions/41462606/get-all-files-recursively-in-directories-nodejs)
// lists all files in directory
function *walkSync(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    for (const file of files) {
        if (file.isDirectory()) {
            yield* walkSync(path.join(dir, file.name));
        } else {
            yield path.join(dir, file.name);
        }
    }
}