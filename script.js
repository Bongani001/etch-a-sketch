const container = document.querySelector('.container');
const userPrompt = document.querySelector('.user-prompt');

// Create Grids
function createGrids(size) {
    for (let i = 0; i < (size * size); i++) {
        let sides = 500 / size + 'px';
        const grid = document.createElement('div');
        grid.classList = 'squareGrid';
        grid.style.height = sides;
        grid.style.width = sides;
        container.appendChild(grid);
    }
    changeColor();
}

// Change grid background color when hovered
function changeColor() {
    const grid = document.querySelectorAll('.squareGrid');
    grid.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'blue';
        });
    });
}

userPrompt.addEventListener('click', () => {
    const userNumber = prompt('How many number of squares per side would you like?');
    const grid = document.querySelectorAll('.squareGrid');
    grid.forEach(square => {
        square.remove();
    });
    createGrids(userNumber);
})

createGrids(2);