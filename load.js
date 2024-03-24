function runGame(path, name) {
    let path = path;
    let name = name;
    let frame = document.createElement("iframe");
    console.log("Running...");
    frame.src = path;
    document.title = name;
}