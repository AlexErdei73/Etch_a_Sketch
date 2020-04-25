//Create elements with given parameters and returns them in an array
function createElements(nameOfElement, attrOfParent, attrOfElement, numberOfElement) {
    const container = document.querySelector(attrOfParent);
    let elements = [];

    for (let i = 0; i < numberOfElement; i++) {
       elements[i] = document.createElement(nameOfElement);
       elements[i].classList.add(attrOfElement);
       container.appendChild(elements[i]); 
    }

    return elements;
}

//Change the color of the square to dark
function changeColor(e) {
    e.target.classList.add('dark');
}

//Remove the class from the elements
function cleanElements(elements, nameOfClass) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove(nameOfClass);
    }
}

//Remove all elements from the parent
function removeElements(elements, attrOfParent) {
    const parent = document.querySelector(attrOfParent);
    for (let i = 0; i < elements.length; i++) {
        parent.removeChild(elements[i]);
    }
}

//Add the func event handler for the event to all the elements of the elements array 
function addEventHandler(event, func, elements){
    elements.forEach(function(element) {
        element.addEventListener(event, func);
    });
}

//Calculate the pixelsize of the squares
function calculateSquareSize(numberOfSquares, heightOfFrame) {
    return  Math.floor(heightOfFrame / numberOfSquares);
}

//Set the style attribute of the elements
function setStyleOfElements(elements, textOfStyle) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].setAttribute('style',textOfStyle);
    }
}

//Create the grid
function createGrid(numberOfSquares) {
    const squareSize = calculateSquareSize(squareNumber, FRAMEHEIGHT);
    const sqnumber = Math.floor(FRAMEWIDTH / squareSize) * Math.floor(FRAMEHEIGHT / squareSize);
    const grid = createElements('div', '.frame', 'square', sqnumber);
    addEventHandler('mouseenter', changeColor, grid);
    styleGrid(grid);
    return grid;
} 

//Style the grid
function styleGrid(grid) {
    const squareSize = calculateSquareSize(squareNumber, FRAMEHEIGHT);
    let styleText = 'width: ' + (squareSize - 2) + 'px; height: ' + (squareSize - 2) + 'px';
    if (squareSize < 10) {
        styleText = 'width: ' + squareSize + 'px; height: ' + squareSize + 'px; border: none';
    }
    setStyleOfElements(grid, styleText);
}

//Main program
const FRAMEHEIGHT = 768;
const FRAMEWIDTH = 768;
let squareNumber = 16; 
let grid = createGrid(squareNumber);

let button = document.querySelector('button');
button.addEventListener('click', function() {
    removeElements(grid, '.frame');
    squareNumber = prompt('How many sqares should be on the vertical side of the grid?','16');
    grid = createGrid(squareNumber);
});