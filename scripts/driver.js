(function() {
    var scriptNames = [
        //add script names here
        "scripts/perlin.js",
        "scripts/main.js",
        "scripts/canvas.js",
    ];
    for (var i = 0; i < scriptNames.length; i++) {
        var script = document.createElement('script');
        script.src = scriptNames[i];
        script.async = false; // This is required for synchronous execution

        if (scriptNames[i].includes("main.js") || scriptNames[i].includes("canvas.js")) {
            script.type = "module";
        }

        document.body.appendChild(script);
    }
})();
