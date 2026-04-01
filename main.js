let images = [
    "images/Nano_1.png",
    "images/Nano_2.jpg",
    "images/Nano_3.png",
    "images/Nano_4.png"
];
//doggo
let index = 0;

let captions = [];
let captionindex = 0;
async function loadCaptions() {
    let response = await fetch("captions.json");
    captions = await response.json();
    show(captionindex);
}
loadCaptions();

//demos need live server
function show(index) {
    document.getElementById("slideshow-img").src = images[index];
    document.getElementById("caption").textContent = captions[index];
}
//display each
function next() {
    index = (index + 1) % images.length;
    show(index);
}

function prev() {
    index = (index - 1 + images.length) % images.length;
    show(index);
}
//modulo to make sure no out of bounds (the void stares back)
function toggle() {
    let video = document.getElementById("nano-video");
    if (video.paused) {
        video.play();
        document.querySelector("button[onclick='toggle()']").textContent = "Pause";
    } else {
        video.pause();
        document.querySelector("button[onclick='toggle()']").textContent = "Play";
    }
}