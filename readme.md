## Overview

This is a static site I've built to showcase some of my programming and design projects  
Below I've included image attribution and some usage information for future updates and maintenance  

## Image credits:

|Image                   |   Source                                                      |
|------------------------|---------------------------------------------------------------|
|   neo4j logo           |   https://neo4j.com/brand/                                    |
|   jest logo            |   https://vecta.io/symbols/85/brands-ja-jz/20/jest-icon       |
|   three.js logo        |   https://discourse.threejs.org/t/three-js-svg-logo/21835     |
|   Postman logo         |   https://www.vectorlogo.zone/logos/getpostman/index.html     |
|   Wireshark logo       |   https://www.vectorlogo.zone/logos/wireshark/index.html      |
|   VirtualBox logo      |   https://www.vectorlogo.zone/logos/virtualbox/index.html     |
|   LaTeX logo           |   https://commons.wikimedia.org/wiki/File:LaTeX_logo.svg      |


## usage information here for future maintanence

adding projects:
1. create a new project_name.json file with project information
2. create a tn_project_name.png thumbnail image in /imgs subdirectory
3. run `node compile.js` on the command line to recompile the html and include the project

adding scripts:
1. add js file to /scripts directory
2. add path of js file to array in scripts/driver.js 