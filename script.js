const container = document.querySelector('.container');
const userPrompt = document.querySelector('.user-prompt');
const randomColorBtn = document.querySelector('.random-color');

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

// Change square background color when hovered
function changeColor() {
    const grid = document.querySelectorAll('.squareGrid');
    grid.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'aqua';
        });
    });
}

// Ask user for number of squares per side
userPrompt.addEventListener('click', () => {
    let userNumber = prompt('How many number of squares per side would you like? (limit = 100 squares)');
    const grid = document.querySelectorAll('.squareGrid');
    grid.forEach(square => {
        square.remove();
    });
    if (isNaN(userNumber)) {
        Warn = prompt('Please enter a number:');
        createGrids(Warn); 
    } else if (userNumber <= 100) {
        createGrids(userNumber);
    } else if (userNumber > 100) {
        Warn = prompt('That is too many squares, limit is 100 squares per side.\n Enter a number that is equal or less than 100:')
        createGrids(Warn);
    } else {
        Warn = prompt('Please enter a number:');
        createGrids(Warn); 
    };
})

function randomColor() {
    const grid = document.querySelectorAll('.squareGrid');
    grid.forEach(square => {
        square.addEventListener('mouseover', () => {
            const randomR = Math.floor(Math.random() * 256);
            const randomG = Math.floor(Math.random() * 256);
            const randomB = Math.floor(Math.random() * 256);
            const rgbColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
            square.style.backgroundColor = rgbColor;
        });
    });
}

randomColorBtn.addEventListener('click', randomColor);

createGrids(16);