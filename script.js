function makeGrid(numSquares) {
    const gridContainer = document.querySelector(".container");
    for (let row = 0; row < numSquares; row++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("rows");
        gridContainer.appendChild(rowDiv);
        for (let col = 0; col < numSquares; col++) {
            const colDiv = document.createElement("div");
            colDiv.classList.add("squares");
            rowDiv.appendChild(colDiv);
        };
    };
    const box = document.querySelectorAll(".squares");
    const dimensions = 800/numSquares;
    box.forEach((userItem) => {
        userItem.style.height = dimensions + "px";
        userItem.style.width = dimensions + "px";
    });

    box.forEach((eachBox) => {
        eachBox.addEventListener("mouseover", () => {
            let firstRandColor = Math.round(Math.random() * 255);
            let secondRandColor = Math.round(Math.random());
            eachBox.style.backgroundColor = `rgb(${secondRandColor}, ${firstRandColor}, ${firstRandColor})`;
        });
    });
};

function clickFunc() {
    const squaresPerSide = prompt("Key in the number of squares per side for the grid");
    while (squaresPerSide > 100 || squaresPerSide === null || squaresPerSide === "") {
        squaresPerSide = prompt("Please key in an appropriate value that is less than 100");
    };
    resetGrid();
    makeGrid(squaresPerSide);
};

function resetGrid() {
    const container = document.querySelector(".container");
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    };
};

const newGridBtn = document.querySelector("button");
newGridBtn.addEventListener("click", () => clickFunc());