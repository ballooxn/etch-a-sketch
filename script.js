const container = document.querySelector("#grid-container");
const rainbowButton = document.querySelector("#rainbow");
const gridButton = document.querySelector("#grid-size");
let isRainbow = false;
let gridSize = 16;


function createGrid(size) {
    for (let i = 0; i < size; i++) {
        createRow(size);
    }
    colorChange();
}

function createRow(length) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");

    container.appendChild(row);

    for (let i = 0; i < length; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "unit");

        row.appendChild(div);
    }
}

gridButton.addEventListener("click", (e) => {
    size = prompt("Please enter a number between 1 and 100");
    size = Number(size);
    children = container.querySelectorAll(".row");
    children.forEach((e) => {
        e.remove();
    });
    createGrid(size);

})

rainbowButton.addEventListener("click", (e) => {
    if (isRainbow) {
        isRainbow = false;
    }
    else {
        isRainbow = true;
    }
})

// Change color when mouse is hovering over a unit
function colorChange() {
    let units = document.querySelectorAll(".unit");

    units.forEach(function(element) {
        element.addEventListener("mouseover", (e) => {
            if (isRainbow) {
                e.target.style.backgroundColor = "rgb(" + randomColor() + ", " + randomColor() + ", " + randomColor() + ")";
            }
            else {
                e.target.style.backgroundColor = "black";
            }
        });
    });
}

function randomColor() {
    return Math.floor(Math.random() * 254);
}
createGrid(16);