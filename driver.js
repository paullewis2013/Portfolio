(function() {
    var scriptNames = [
        //add script names here
        "scripts/perlin.js",
        "scripts/three.js",
        "scripts/main.js",
        "scripts/canvas.js",
    ];
    for (var i = 0; i < scriptNames.length; i++) {
        var script = document.createElement('script');
        script.src = scriptNames[i];
        script.async = false; // This is required for synchronous execution
        document.body.appendChild(script);
    }
})();