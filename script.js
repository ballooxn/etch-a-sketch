const container = document.querySelector("#grid-container");
const rainbow = document.querySelector("#rainbow");
let isRainbow = false;


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

rainbow.addEventListener("click", (e) => {
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
createGrid(60);