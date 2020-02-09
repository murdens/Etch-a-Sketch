//set variables
const clearButton = document.querySelector('#clear');
const drawButton = document.querySelector('#draw');
const colourButton = document.querySelector('#colour');
const container = document.querySelector('#container');

// create default grid
function createGrid(gridSize) {
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    
    for (let i = 0; i < gridSize **2; i++) {
      const grid = document.createElement('div');
      container.appendChild(grid);
      grid.classList.add('box');
    }
}
createGrid(16);


// clear button click event & function
clearButton.addEventListener('click', (e) => {
  clear()
})

function clear(){
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].style.backgroundColor = 'lightgrey';
  }
}

// click event calls create grid, fill function and error handling
drawButton.addEventListener('click', (e) => {
  let gridSize = prompt('selet a grid size between 1 and 100');
  inputCheck(gridSize);
  createGrid(gridSize);
  fillMatrix();
})

colourButton.addEventListener('click', (e) => {
  let gridSize = prompt('selet a grid size between 1 and 100');
  inputCheck(gridSize);
  createGrid(gridSize);
  fillcolorMatrix();
})

// error handling of matrix input
function inputCheck(gridSize){
  if (gridSize < 1 || gridSize > 100 || isNaN(gridSize)){
    alert ('Needs to be a number between 1 and 100');
  } else {
    return gridSize;
  }
}

//activates each grid box as mouse enters square and sets colour
const matrix = document.getElementsByClassName('box');

function fillMatrix(){
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].addEventListener('mouseenter', function() {
    matrix[i].classList.add('active');
    matrix[i].style.backgroundColor = 'darkslategrey';
    });
  }
}

function fillcolorMatrix(){
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].addEventListener('mouseenter', function() {
    matrix[i].classList.add('active');
    matrix[i].style.backgroundColor= random_bg_color();
    });
  }
}

// returns a random RGB value for each hover
function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
         
  return "rgb(" + x + "," + y + "," + z + ")";
}