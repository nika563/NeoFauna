const button = document.querySelector('button');

button.addEventListener('click', function (e) {
    const name = document.querySelector('.regName').value.trim();
    const emailPhone = document.querySelector('.regEmail-phone').value.trim();
    const password = document.querySelector('.regPassword').value.trim();
    checkData(name, emailPhone, password);
});
