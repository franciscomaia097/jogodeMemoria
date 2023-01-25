const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.tempo');

const personagens = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',
];



const createElement = (tag,className) => {
    const element = document.createElement('tag');
    element.className = className;
    return element;
}

let primeiraCarta = '';
let segundaCarta = '';

const checkWin = () => {
    const cartasDisabilitadas = document.querySelectorAll('.disable-card');
    if(cartasDisabilitadas.length === 20){
        alert('Parabéns' + spanPlayer.innerHTML + ' completou o jogo em ' + timer.innerHTML + ' segundos!');
        clearInterval(this.loop);
    }
}

const checkCards = () => {
const primeiraPersonagem = primeiraCarta.getAttribute('data-personagem');
const segundaPersonagem = segundaCarta.getAttribute('data-personagem');

if(primeiraPersonagem === segundaPersonagem){

    primeiraCarta.firstChild.classList.add('disable-card');
    segundaCarta.firstChild.classList.add('disable-card');

    primeiraCarta = '';
    segundaCarta = '';

    checkWin();

} else {
    setTimeout(() =>{
    primeiraCarta.classList.remove('reveal-card');
    segundaCarta.classList.remove('reveal-card');

    primeiraCarta = '';
    segundaCarta = '';

    }, 500);

}

}

const revealCard = ({target}) => {
    if(target.parentNode.className.includes ('reveal-card')){
        return;
    }
    

    if(primeiraCarta === ''){
        target.parentNode.classList.add('reveal-card');
        primeiraCarta = target.parentNode;
    }
    else if (segundaCarta === ''){
        target.parentNode.classList.add('reveal-card');
        segundaCarta = target.parentNode;

        checkCards();
    }
}


const createCard = (personagem) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('images/${personagem}.png')`;

    card.appendChild(front);
    card.appendChild(back);
    grid.appendChild(card);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-personagem', personagem);

    return card;
}



const loadGame = () => {
    contador();

    const personagensDuplicadas = [... personagens , ... personagens];

    const suffledArray = personagensDuplicadas.sort(() => Math.random() - 0.5);

    suffledArray.forEach((personagem) => {

        const card = createCard(personagem);

        grid.appendChild(card);
    });
}

const contador = () => {

    this.loop = setInterval(() => {
        let tempo = timer.innerHTML;
        tempo++;
        timer.innerHTML = tempo;
    }, 1000);

}

window.onload = () => {
    spanPlayer.innerHTML = localStorage.getItem('username');
    
    
    loadGame();
}

