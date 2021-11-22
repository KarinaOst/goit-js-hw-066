
const refForm = document.querySelector(".login-form");

refForm.addEventListener("submit", formOnSubmit);

function formOnSubmit(event) {
  event.preventDefault();
  const formElem = event.currentTarget.elements;
  const email = formElem.email.value;
  const password = formElem.password.value;
  if (email === "" || password === "") {
    alert("Уважаемый пользователь введите все поля!!!");
  } else {
    const formData = {
      email,
      password,
    };
    console.log(formData);
    event.currentTarget.reset();
  }
}