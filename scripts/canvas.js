import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );

canvas = document.getElementById("canvas")

var renderer = new THREE.WebGLRenderer({canvas: canvas, alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );

window.addEventListener("resize", function() {
    renderer.setSize( window.innerWidth, window.innerHeight );
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z = 35;
    camera.position.y = 20;
    camera.rotation.x = 0;
});

//geometry for dice
const geometry_d4 = new THREE.TetrahedronGeometry(2, 0);
const geometry_d6 = new THREE.BoxGeometry(2, 2, 2); 
const geometry_d8 = new THREE.OctahedronGeometry(2, 0);
const geometry_d12 = new THREE.DodecahedronGeometry(2, 0); 
const geometry_d20 = new THREE.IcosahedronGeometry(2, 0); 

// material for floating dice
const material = new THREE.MeshPhongMaterial({
    color: 0xf58b5f, //Face color
    side: THREE.DoubleSide,
    shininess: 50,
    specular: 0xf58b5f,
});
// new THREE.MeshBasicMaterial( { color: 0xf58b5f, wireframe: true, opacity: 1 } );

// create dice
var diceArr = []
const diceFactory = (i) => {
    switch(i) {
        case 5:
            
    }
}

const loader = new GLTFLoader();

const moveDice = (dice) => {
    //arrange offscreen
    const xpos = Math.floor(Math.random() * 20)
    dice.position.x = -45 + -xpos * 5
    dice.position.y = 12 + Math.random() * 28;
    dice.position.z = -20 + Math.random() * 40;
    dice.rotation.x = Math.random();
    dice.rotation.y = Math.random();
    scene.add( dice );

}


for(let i = 0; i < 20; i++){
    const roll = Math.random();
    const lookup = parseInt(roll * 6)
    switch(lookup) {
        case 0:
            diceArr[i] = new THREE.Mesh( geometry_d4, material );
            moveDice(diceArr[i])
            break;
        case 1:
            diceArr[i] = new THREE.Mesh( geometry_d6, material );
            moveDice(diceArr[i])
            break;
        case 2:
            diceArr[i] = new THREE.Mesh( geometry_d8, material );
            moveDice(diceArr[i])
            break;
        case 3:
            diceArr[i] = new THREE.Mesh( geometry_d12, material );
            moveDice(diceArr[i])
            break;
        case 4:
            diceArr[i] = new THREE.Mesh( geometry_d20, material );
            moveDice(diceArr[i])
            break;
        case 5:
            loader.load(
                'imgs/cow.gltf',
                (gltf) => {
                    console.log(gltf);
                    //arrange offscreen
                    gltf.scene.position.x = -45 + -i * 5;
                    gltf.scene.position.y = 12 + Math.random() * 28;
                    gltf.scene.position.z = -20 + Math.random() * 40;
                    gltf.scene.rotation.x = Math.random();
                    gltf.scene.rotation.y = Math.random();
                    scene.add( gltf.scene );
                    diceArr[i] = gltf.scene;
                }
            );
            break;
    }
}

camera.position.z = 35;
camera.position.y = 20;
camera.rotation.x = 0;

const skyColor =    0xdc322f; 
const groundColor = 0x6c71c4;
const intensity = 0.05;
const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
scene.add(light);

var terrainArr = [];
noise.seed(Math.random());

// geometry for terrain
const hexGeometry = new THREE.CylinderGeometry( 1, 1, 10, 6)

function randColor(){

    let colors = [
        // 0xb58900,
        0xcb4b16,
        0xdc322f,
        // 0xd33682,
        // 0x6c71c4,
        // 0x268bd2,
        0x2aa198,
        // 0x859900
    ]

    return colors[Math.floor(Math.random() * colors.length)]
}

for(let i = 0; i < 120; i++){

    terrainArr[i] = []

    for(let j = 0; j < 50; j++){

        let tempColor = randColor()
        let tempMat = new THREE.MeshBasicMaterial( { color: tempColor} );

        if(Math.random() < 0.8){
            tempColor = 0x000000;
            tempMat = new THREE.MeshBasicMaterial( { color: tempColor} );
        }

        let tempTile = new THREE.Mesh(hexGeometry, tempMat);
        tempTile.position.x = -80 + (i * Math.sqrt(3)) + (j%2 * Math.sqrt(3)/2)
        tempTile.position.z = -30 + j * 2

        tempTile.position.y =  1.5 * noise.simplex3(i, j, 0)

        terrainArr[i][j] = tempTile
        scene.add(terrainArr[i][j])
    }
}


var frameNum = 0    //used for keeping perlin noise consistent

const animate = function () {

    frameNum++;

    //go through each dice
    for(let i = 0; i < diceArr.length; i++){
        // skip if dice is not loaded yet
        if(!diceArr[i])
            continue;

        //move to the right
        diceArr[i].rotation.x += 0.02;
        diceArr[i].position.x += 0.04;

        //loop back around
        if(diceArr[i].position.x > 45){
            diceArr[i].position.x -= 90
        }
    }

    for(let i = 0; i < terrainArr.length; i++){
        for(let j= 0; j < terrainArr[i].length; j++){

            //update y position with random noise
            terrainArr[i][j].position.y = -5 + 12 * noise.simplex3(i/20, j/20, frameNum/1000)

            if(Math.random() < 0.0001){
                let tempColor = randColor()
                let tempMat = new THREE.MeshBasicMaterial( { color: tempColor} );
                terrainArr[i][j].material = tempMat
            }else if(Math.random() < 0.02){
                let tempColor = 0xffffff
                let tempMat = new THREE.MeshLambertMaterial( { color: tempColor} );
                terrainArr[i][j].material = tempMat
            }
        }
    }

    renderer.render( scene, camera );
    requestAnimationFrame( animate );
};
requestAnimationFrame( animate );
