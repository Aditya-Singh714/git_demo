
// add new feaures
let button = document.querySelector("button");
button.addEventListener("click", ()=>{
    console.log("Button was clicked");
});

// add new feaures - generate new color

let btn = document.querySelectorA('#color');

btn.addEventListener("click", function(){
    let h2 = document.querySelector("h2");
    let randomColor = getRandomColor();
    h2.innerText = randomColor;

    let box = document.querySelector("div");
    box.style.backgroundColor = randomColor;
    console.dir(box);

    console.log("Color updated");
});

function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})`;

    return color;
}