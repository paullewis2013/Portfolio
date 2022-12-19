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
for(let i = 0; i < 20; i++){
    roll = Math.random();

    if(roll>0.8){
        diceArr[i] = new THREE.Mesh( geometry_d4, material );
    }else if(roll>0.6){
        diceArr[i] = new THREE.Mesh( geometry_d6, material );
    }else if(roll>0.4){
        diceArr[i] = new THREE.Mesh( geometry_d8, material );
    }else if (roll > 0.2){
        diceArr[i] = new THREE.Mesh( geometry_d12, material );
    }else {
        diceArr[i] = new THREE.Mesh( geometry_d20, material );
    }

    //arrange offscreen
    diceArr[i].position.x = -45 + -i * 5
    diceArr[i].position.y = 12 + Math.random() * 28;
    diceArr[i].position.z = -20 + Math.random() * 40;
    diceArr[i].rotation.x = Math.random();
    diceArr[i].rotation.y = Math.random();

    scene.add( diceArr[i] );
}

camera.position.z = 35;
camera.position.y = 20;
camera.rotation.x = 0;

const skyColor =    0xdc322f; 
const groundColor = 0x6c71c4;
const intensity = 0.25;
const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
scene.add(light);

var terrainArr = [];
noise.seed(Math.random());

// geometry for terrain
const hexGeometry = new THREE.CylinderGeometry( 1, 1, 10, 6)

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

function randColor(){

    colors = [
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

var frameNum = 0    //used for keeping perlin noise consistent

const animate = function () {

    frameNum++;

    //go through each dice
    for(let i = 0; i < diceArr.length; i++){

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