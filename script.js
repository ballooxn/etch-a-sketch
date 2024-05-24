const container = document.querySelector("#grid-container");
const rainbowButton = document.querySelector("#rainbow");
const eraserButton = document.querySelector("#eraser");
const gridButton = document.querySelector("#grid-size");
const clearButton = document.querySelector("#clear");
let isRainbow = false;
let isEraser = false;
let gridSize = 0;


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
    let size = 0;
    while (size < 1 || size > 100) {
        size = Number(prompt("Please enter a number between 1 and 100"));
    }
    gridSize = size
    replaceGrid(size);

})
function replaceGrid(size) {
    children = container.querySelectorAll(".row");
    children.forEach((e) => {
        e.remove();
    });
    createGrid(size);
}

eraserButton.addEventListener("click", (e) => {
    if (isEraser) {
        isEraser = false;
    }
    else {
        isEraser = true;
    }
})

rainbowButton.addEventListener("click", (e) => {
    if (isRainbow) {
        isRainbow = false;
    }
    else {
        isRainbow = true;
    }
})
clearButton.addEventListener("click", () => {
    replaceGrid(gridSize);
});

// Change color when mouse is hovering over a unit
function colorChange() {
    let units = document.querySelectorAll(".unit");

    units.forEach(function(element) {
        element.addEventListener("mouseover", (e) => {
            if (isRainbow) {
                e.target.style.backgroundColor = "rgb(" + randomColor() + ", " + randomColor() + ", " + randomColor() + ")";
            }
            else if (isEraser) {
                e.target.style.backgroundColor = "white";
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