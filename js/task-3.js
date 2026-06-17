const nameInput = document.querySelector('input#name-input');
const nameSpan = document.querySelector('span#name-output');

nameInput.addEventListener('input', handleInput);
function handleInput(event) {
  const inputValue = event.target.value.trim();

  if (inputValue === '') {
    nameSpan.textContent = 'Anonymous';
  } else {
    nameSpan.textContent = inputValue;
  }
}
