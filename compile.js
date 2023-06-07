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

    let content = `
<!-- Paul Lewis, generated automatically by the script compile.js -->
<!doctype html>

<html lang="en">
    
    <head>
        <!-- Standard metadata -->
        <meta charset="utf-8">
        <title>${obj.name}</title>
        <meta name="description" content="${obj.name}">
        <meta name="author" content="Paul Lewis">

        <!-- Sets open graph protocol metadata for website -->
        <meta property="og:title" content="${obj.name}" >
        <meta property="og:type" content="website" >
        <meta property="og:url" content="${obj.landing_page_link}" >
        <meta property="og:image" content="../imgs/paul_circle.png" >

        <!-- CSS and Bootstrap -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="../css/landing.css">

        <!-- Sets icon displayed in tab for website -->
        <link rel="shortcut icon" href="../imgs/favicon.png" type="image/x-icon">
        <link rel="icon" href="../imgs/favicon.png" type="image/x-icon">

    </head>
    <body>
        <div id="content">

            <div id="top">
                <img src="${obj.img_path}">
                <h1>${obj.name}</h1>
            </div>

            <h5>Description:</h5>
            ${obj.description}

        <!-- meta data for project (date, # commits, # lines, etc.)-->
        <!-- 
            <h5>Meta data:</h5>
        -->

        <!-- usage --> 
        <!-- 
            <h5>Usage:</h5>
        -->
        <!-- deployment link -->
            <p>Deployment: <a href="${obj.gh_pages_link}">Go to Site</a></p>

        <!-- repo link -->
            <p>Source code: <a href="${obj.repo_link}">Github Repository</a></p>

        <!-- return to portfolio link -->
            <a href="#" onclick="window.close()">Close tab</a>

        </div>

        <!-- footer here -->
        <!-- Footer with some site information -->
        <div class="footer-row">
            <!-- right column -->
            <div class="footer-col">
                <p class="footer-text">Portfolio Version: 1.2.0</p>
            </div>

            <!-- middle column -->
            <div class="footer-col">
                <p class="footer-text">Paul Lewis, 2023</p>
            </div>

        </div>
    </body>

</html>
    `

    fs.writeFile(obj.landing_page_link, content, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
}

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