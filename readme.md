## Overview

This is a static site I've built to showcase some of my programming and design projects  
Below I've included image attribution and some usage information for future updates and maintenance  

The main page is located at index.html and the site can be accessed at https://paullewis2013.github.io/Portfolio/

## Image credits:

|Image                   |   Source                                                      |
|------------------------|---------------------------------------------------------------|
|   Bootstrap icon       |   http://konpa.github.io/devicon/ under MIT license           |
|   C icon               |   http://konpa.github.io/devicon/ under MIT license           |
|   CSS3 icon            |   http://konpa.github.io/devicon/ under MIT license           |
|   C# icon              |   http://konpa.github.io/devicon/ under MIT license           |
|   D3 icon              |   http://konpa.github.io/devicon/ under MIT license           |
|   Electron icon        |   http://konpa.github.io/devicon/ under MIT license           |
|   Express icon         |   http://konpa.github.io/devicon/ under MIT license           |
|   Gimp icon            |   http://konpa.github.io/devicon/ under MIT license           |
|   Git icon             |   http://konpa.github.io/devicon/ under MIT license           |
|   GitHub icon          |   http://konpa.github.io/devicon/ under MIT license           |
|   HTML5 icon           |   http://konpa.github.io/devicon/ under MIT license           |
|   Java icon            |   http://konpa.github.io/devicon/ under MIT license           |
|   JavaScript icon      |   http://konpa.github.io/devicon/ under MIT license           |
|   jest icon            |   https://vecta.io/symbols/85/brands-ja-jz/20/jest-icon       |
|   LaTeX icon           |   https://commons.wikimedia.org/wiki/File:LaTeX_logo.svg      |
|   Linux icon           |   http://konpa.github.io/devicon/ under MIT license           |
|   Maze icon            |   modified from vecteezy.com                                  |
|   neo4j icon           |   https://neo4j.com/brand/                                    |
|   Node.js icon         |   http://konpa.github.io/devicon/ under MIT license           |
|   npm icon             |   http://konpa.github.io/devicon/ under MIT license           |
|   Postman icon         |   https://www.vectorlogo.zone/logos/getpostman/index.html     |
|   Python icon          |   http://konpa.github.io/devicon/ under MIT license           |
|   R icon               |   http://konpa.github.io/devicon/ under MIT license           |
|   React icon           |   http://konpa.github.io/devicon/ under MIT license           |
|   Stability AI icon    |   https://avatars.githubusercontent.com/u/100950301?s=200&v=4 |
|   three.js icon        |   https://discourse.threejs.org/t/three-js-svg-logo/21835     |
|   Typescript icon      |   http://konpa.github.io/devicon/ under MIT license           |
|   VirtualBox icon      |   https://www.vectorlogo.zone/logos/virtualbox/index.html     |
|   Wireshark icon       |   https://www.vectorlogo.zone/logos/wireshark/index.html      |


## Usage information here for future maintanence

adding projects:
1. create a new project_name.json file with project information
2. create a tn_project_name.png thumbnail image in /imgs subdirectory
3. run `node compile.js` on the command line to recompile the html and include the project
4. add html snippet to main.js

adding scripts:
1. add js file to /scripts directory
2. add path of js file to array in scripts/driver.js 

adding skills:
1. add image to imgs/dev_icons
2. add image attribution to readme
3. add html snippet to main.js

git branch names [x.y.z]
x is a major update such as switching frameworks 
y is a minor version like when I add new projects and work on the website in the mean time
z is a tiny change that's stable

## Todo 

- [x] replace rectangular prisms in animation with hexagonal prisms
- [x] scroll indication
- [ ] standardize thumbnails
- [x] hide content all the way at start
- [ ] move html in js to html files and read it in to single js file at compile time
- [ ] split up css
- [x] generate first landing page
- [x] automatically generate landing pages w compile.js
- [x] cite rest of images
- [ ] replace project cards with new flex design
- [ ] sort skills by different controls
- [ ] rewrite skills section with new flex design
- [x] restructure images folder
- [x] make footer disapear when content not all the way down
- [ ] make screenshots folder
- [x] fix about image spacing
- [ ] animations library
- [ ] keep footer consistent across pages
- [x] switch to todo.md checklist
- [ ] clean html folder before building