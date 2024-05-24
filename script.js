const container = document.querySelector("#grid-container");


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

// Change color when mouse is hovering over a unit
function colorChange() {
    let units = document.querySelectorAll(".unit");
    console.log(units);

    units.forEach(function(element) {
        console.log("test");
        element.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "black";
            console.log("working");
        });
    });
}
createGrid(100);