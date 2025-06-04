const button = document.querySelector('button');

button.addEventListener('click', function (e) {
    const start = performance.now();
    const name = document.querySelector('.regName').value;
    const email = document.querySelector('.email').value;
    const phone = document.querySelector('.phone').value;
    const password = document.querySelector('.password').value;
    const repPassword = document.querySelector('.repPassword').value;
    const country = document.querySelector('.country').value;

    checkData(name, email, password, phone, repPassword, country);
    if(checkInput){
        saveData(name, email, password, phone, country);
        showSavedUsers();
    }
    const end = performance.now();
    console.log(`⏱️ Время выполнения: ${(end - start).toFixed(2)} мс`);
});


function saveData(name, email, password, phone, country) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = {
        name: name,
        email: email,
        password: password,
        phone: phone,
        country: country
    };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    console.log("Данные сохранены:", user);
}