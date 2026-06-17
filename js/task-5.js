const button = document.querySelector('.change-color');
const realColor = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener('click', handleClick);
function handleClick() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  realColor.textContent = color;
}
