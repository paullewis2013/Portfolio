## Overview

This is a static site I've built to showcase some of my programming and design projects  
Below I've included image attribution and some usage information for future updates and maintenance  

The main page is located at index.html and the site can be accessed at https://paullewis2013.github.io/Portfolio/

## Image credits:

|Image                   |   Source                                                      |
|------------------------|---------------------------------------------------------------|
|   jest logo            |   https://vecta.io/symbols/85/brands-ja-jz/20/jest-icon       |
|   LaTeX logo           |   https://commons.wikimedia.org/wiki/File:LaTeX_logo.svg      |
|   neo4j logo           |   https://neo4j.com/brand/                                    |
|   Postman logo         |   https://www.vectorlogo.zone/logos/getpostman/index.html     |
|   three.js logo        |   https://discourse.threejs.org/t/three-js-svg-logo/21835     |
|   VirtualBox logo      |   https://www.vectorlogo.zone/logos/virtualbox/index.html     |
|   Wireshark logo       |   https://www.vectorlogo.zone/logos/wireshark/index.html      |


## Usage information here for future maintanence

adding projects:
1. create a new project_name.json file with project information
2. create a tn_project_name.png thumbnail image in /imgs subdirectory
3. run `node compile.js` on the command line to recompile the html and include the project

adding scripts:
1. add js file to /scripts directory
2. add path of js file to array in scripts/driver.js 

## Todo 

- [ ] replace rectangular prisms in animation with hexagonal prisms
- [x] scroll indication
- [ ] standardize thumbnails
- [x] hide content all the way at start
- [ ] move html in js to html files and read it in to single js file at compile time
- [ ] split up css
- [x] generate first landing page
- [x] automatically generate landing pages w compile.js
- [ ] cite rest of images
- [ ] replace project cards with new flex design
- [ ] parallax effect with title
- [ ] sort skills by different controls
- [ ] rewrite skills section with new flex design
- [ ] rewrite about paragraph
- [ ] restructure images folder
- [x] make footer disapear when content not all the way down
- [ ] make screenshots folder
- [x] fix about image spacing
- [ ] animations library
- [ ] keep footer consistent across pages
- [x] switch to todo.md checklist