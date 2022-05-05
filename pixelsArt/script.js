// Testando...
function generatePalette() {
  const palette = document.querySelector('#color-palette');

  for (let i = 0; i < 4; i += 1) {
    const color = document.createElement('div');
    color.className = 'color';
    if (i === 0) {
      color.style.backgroundColor = 'rgb(0, 0, 0)';
      color.className = 'selected color';
    } else {
      const rgb = 'rgb(';
      const comma = ',';
      const finalBracket = ')';
      color.style.backgroundColor = rgb + Math.floor(Math.random() * 255)
      + comma + Math.floor(Math.random() * 255) + comma
      + Math.floor(Math.random() * 255) + finalBracket;
    }
    palette.appendChild(color);
  }
}

function generateBoard(number) {
  const board = document.querySelector('#pixel-board');
  for (let i = 0; i < (number * number); i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'white';
    board.appendChild(pixel);
  }
}

function paletteListener() {
  function getSelected(sub) {
    const selectedColorElement = document.querySelector('.selected');
    selectedColorElement.classList.remove('selected');
    sub.target.classList.add('selected');
  }

  const colorPalette = document.querySelectorAll('.color');
  for (let i = 0; i < colorPalette.length; i += 1) {
    colorPalette[i].addEventListener('click', getSelected);
  }
}

function selectedColor(event) {
  const alvo = event.target;
  alvo.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

function pixelListener() {
  const pixelBoard = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixelBoard.length; i += 1) {
    pixelBoard[i].addEventListener('click', selectedColor);
  }
}

function clear() {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}

function deletePixel() {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].remove();
  }
}

function reSize() {
  const size = document.querySelector('#board-size').value;
  const invert = Number(size);
  if (size === '') {
    alert('Board inválido!');
  } else if (invert < 5) {
    deletePixel();
    generateBoard(5);
  } else if (invert > 50) {
    deletePixel();
    generateBoard(50);
  } else {
    deletePixel();
    generateBoard(invert);
  }
}

const button = document.querySelector('#clear-board');
button.addEventListener('click', clear);

const reSizeButton = document.querySelector('#generate-board');
reSizeButton.addEventListener('click', reSize);

window.onload = function start() {
  generateBoard(5);
  generatePalette();
  paletteListener();
  pixelListener();
};
