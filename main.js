//VUE
new Vue({
    el: "#projectsDiv",
    data() {
        return {
            tab: "<Projects>",
            bottom_tab: "</Projects>"
        }
    }
});

setTimeout(iconAnim, 5000)


function iconAnim(){
    document.getElementById("linkedIn").style.visibility = "visible";
    document.getElementById("github").style.visibility = "visible";

    for(let i = 1; i < 21; i++){
        setTimeout(increaseIconOpacity, 100 * i, i)
    }
}

function increaseIconOpacity(i){
    console.log(document.getElementById("linkedIn").style.opacity)
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
