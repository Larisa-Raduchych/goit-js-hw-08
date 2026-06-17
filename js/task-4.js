const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const emailValue = event.target.elements.email.value.trim();
  const passwordValue = event.target.elements.password.value.trim();

  if (emailValue === '' || passwordValue === '') {
    return alert('All form fields must be filled in');
  }

  const objectForm = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(objectForm);
  event.target.reset();
}
