//fixes issue with refreshing page
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

setTimeout(iconAnim, 3000)


function iconAnim(){
    document.getElementById("linkedIn").style.visibility = "visible";
    document.getElementById("github").style.visibility = "visible";

    for(let i = 1; i < 21; i++){
        setTimeout(increaseIconOpacity, 100 * i, i)
    }
}

function increaseIconOpacity(i){
    // console.log(document.getElementById("linkedIn").style.opacity)
    document.getElementById("linkedIn").style.opacity = 0.05 * i;
    document.getElementById("github").style.opacity = 0.05 * i;
}




//cursor animation at beginning
function showCursor(){
    document.getElementById("title").style.borderRight = "4px solid white";
}

function deleteCursor(){
    document.getElementById("title").style.borderRight = "none";
}

function titleAnim(){
    setTimeout(deleteCursor, 250);
    setTimeout(showCursor, 500);
    setTimeout(deleteCursor, 750);
    setTimeout(showCursor, 1000);
    setTimeout(deleteCursor, 1250);
}

function showCursor2(){
    document.getElementById("name").style.borderRight = "4px solid white";
}

function deleteCursor2(){
    document.getElementById("name").style.borderRight = "none";
}

function nameAnim(){
    setTimeout(deleteCursor2, 250);
    setTimeout(showCursor2, 500);
    setTimeout(deleteCursor2, 750);
    setTimeout(showCursor2, 1000);
    setTimeout(deleteCursor2, 1250);
}

setTimeout(titleAnim, 1500);
setTimeout(nameAnim, 3250);



//content
//projects html as string
var projectsHTML = `

<div class="links">

    <div class="row projectrow">
                
    <div class="col-3">
        <a href="https://paullewis2013.github.io/GameOfLife/">
            <img src="imgs/GOL.png" alt="Game of Life Image" class="thumbnail">
        </a>
    </div>

    <div class="col-9">
        <h5>Cellular Automata Study</h5>
        <li>Implemented Conway's Game of Life in JavaScript</li>
        <li>3D visualization displays how simulation has evolved over time</li>
        <li>Fine tuned starting conditions for better results</li>
    </div>

    </div><br>

    <div class="row projectrow">
            
    <div class="col-3">
        <a href="https://paullewis2013.github.io/Sudoku/">
            <img src="imgs/sudoku.png" alt="Sudoku Image" class="thumbnail">
        </a>
    </div>

    <div class="col-9">
        <h5>Sudoku Solver</h5>
        <li>Solves Sudoku puzzles using backtracking algorithm</li>
        <li>Allows user to input custom sudoku puzzles to solve</li>
        <li>Visualization of search space shown on right</li>
    </div>

    </div><br>

    <div class="row projectrow">
        
    <div class="col-3">
        <a href="https://paullewis2013.github.io/PerlinNoisePlayground/"> 
            <img src="imgs/Perlin_thumbnail.png" alt="Perlin Image" class="thumbnail">
        </a>
    </div>
    
    <div class="col-9">
        <h5>Perlin Noise Study</h5>
        <li>Displays 3D perlin noise on a 64x64 array of spheres</li>
        <li>Adjustable sliders allow user to control parameters of Perlin noise</li>
        <li>Same effect as used in Portfolio background</li>
    </div>

    
    </div><br>

    <div class="row projectrow">
        
        <div class="col-3">
            <a href="https://paullewis2013.github.io/ChordIdentifier/"> 
                <img src="imgs/chord_thumbnail.png" alt="ChordIdentifier Image" class="thumbnail">
            </a>
        </div>
        
        <div class="col-9">
            <h5>Chord Identifier</h5>
            <li>Custom input interface for selecting a musical key and inputting notes on a musical staff</li>
            <li>Calculates possible chord names from a set of given notes on staff</li>
            <li>Bauhaus inspired design and color palette</li>
        </div>

        
    </div><br>

    <div class="row projectrow">
        
        <div class="col-3">
            <a href="https://paullewis2013.github.io/D3Project/">
                <img src="imgs/catan_thumbnail.png" alt="Catan Image" class="thumbnail">
            </a>
        </div>
        
        <div class="col-9">
            <h5>Catan Clone (in development)</h5>
            <li>An interactive version of the board game Catan</li>
            <li>AI controlled players capable of placing opening settlements competitively</li>
            <li>Analysis of game data in real time</li>
        </div>

    </div><br>




</div>`;

//about html as string
var aboutHTML = `

<img src="imgs/paul_circle.png" height="300px">

<h4 style="text-align:center">Hi, my name is Paul and I’m a Computer Science major at the University of Pittsburgh interested in Web Development, Computer Graphics, and Data Visualization. In addition to Computer Science, I am also pursuing minors in Music and Spanish. During my free time I enjoy reading, running, and playing the guitar.</h4>



`

// skills html as string
var skillsHTML = `
Skills<br>
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>Bootstrap</li>
    <li>JavaScript</li>
    <li>Python</li>
    <li>Java</li>
    <li>C</li>
    <li>SQL</li>
    <li>Git</li>
    <li>Unix</li>

</ul>
`

var content = document.getElementById("content")
// var card1 = document.getElementById("backgroundCard1")
// var card2 = document.getElementById("backgroundCard2")
content.innerHTML = projectsHTML;
// card1.innerHTML = projectsHTML;
// card2.innerHTML = skillsHTML;




function chooseA(){
    content.innerHTML = aboutHTML;
}
function chooseP(){
    content.innerHTML = projectsHTML;
}
function chooseS(){
    content.innerHTML = skillsHTML;
}
