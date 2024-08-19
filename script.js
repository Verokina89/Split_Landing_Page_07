const left = document.querySelector('.left');
const right = document.querySelector('.right');
const mainContent = document.querySelector('.mainContent');

left.addEventListener('mouseenter', () => mainContent.classList.add('hover-left'));
left.addEventListener('mouseleave', () => mainContent.classList.remove('hover-left'));

right.addEventListener('mouseenter', () => mainContent.classList.add('hover-right'));
right.addEventListener('mouseleave', () => mainContent.classList.remove('hover-right'));

// function cursorMovedEnter(side) {
//     mainContent.classList.add(`hover${side}`) //uso de template literals para crear dinamicamente el nombre de la clase
// }

// function cursorMovedOut(side) {
//     mainContent.classList.remove(`hover${side}`)
// }

// left.addEventListener('mouseenter', () => cursorMovedEnter('left'));
// left.addEventListener('mouseleave', () => cursorMovedOut('left'));

// right.addEventListener('mouseenter', () => cursorMovedEnter('right'));
// right.addEventListener('mouseleave', () => cursorMovedOut ('right'));

