const input = document.querySelector('.loginInput');
const button = document.querySelector('.loginBtn');
const form = document.querySelector('.login-form');

const validateInput = () => {
    if (input.value.length > 3) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}


const login = (event) => {
event.preventDefault();
localStorage.setItem('username', input.value);
window.location.href = 'jogo.html';

}

form.addEventListener('submit', login);
input.addEventListener('input', validateInput);