function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function noSymbols(text) {
    return !/[@\s.]/.test(text);
}

var checkInput = false;

const error = document.querySelector('.error');

function errorText(text){
    let span = document.createElement('span');
    span.textContent = text;
    error.appendChild(span);

    const index = error.querySelectorAll('span').length - 1;
    const delay = index * 2000;
    setTimeout(() => {
        span.style.opacity = '0';
    }, 3000 + delay);
    setTimeout(() => {
        span.remove();
    }, 4000 + delay);
    console.log("FUNCTION ERROR");
}
function isUserExist(name, email, password) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    for (let user of users) {
        if (user.name != name && user.email != email && user.password != password) {
            console.log("true");
            return checkInput = true;
        }
    }
}


function checkData(name, email, password, phone = '', repPassword = '', country = ''){
    if (!name && !email && !password) {
        errorText('Будь ласка, заповніть всі поля!');
        return;
    }
    if (!name) {
        errorText('Будь ласка, заповніть полe Iм\'я та прізвище!');
        return;
    }
    if (!isValidEmail(email)) {
      errorText('Введіть коректний email!');
      return;
    }
    if (password.length < 6) {
        errorText('Пароль має містити щонайменше 6 символів!');
        return;
    }
    if (repPassword && password != repPassword) {
        errorText("Паролі не однакові");
        return;
    }
    if (!noSymbols(phone)) {
        errorText('Введіть коректний phone!');
        return;
    }
    if (!noSymbols(country)) {
        errorText('Введіть коректний країну!');
        return;
    }
    else{
        isUserExist("name, email, password")
    }
}
function showSavedUsers() {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    console.log("Сохранённые пользователи:", users);
}