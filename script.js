let form = document.querySelector('form');
let fullName = document.querySelector('#nameInput');
let email = document.querySelector('#emailInput');
let message = document.querySelector('#messageInput');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  // Add your code here

  console.groupCollapsed('========= Form Submission =========');
  console.log(fullName.value);
  console.log(email.value);
  console.log(message.value);

  console.groupEnd();
  event.preventDefault();
}
