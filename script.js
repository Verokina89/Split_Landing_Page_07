const left = document.querySelector('.left')
const right = document.querySelector('.right')
const mainContainer = document.querySelector('.mainContent')


// function cursorMovedEnter(side) {
//     mainContainer.classList.add(`hover-${side}`) //uso de template literals para crear dinamicamente el nombre de la clase
// }

// function cursorMovedOut(side) {
//     mainContainer.classList.remove(`hover-${side}`)
// }

// left.addEventListener('mouseenter', () => cursorMovedEnter('left'));
// left.addEventListener('mouseleave', () => cursorMovedOut('left'));

// right.addEventListener('mouseenter', () => cursorMovedEnter('right'));
// right.addEventListener('mouseleave', () => cursorMovedOut ('right'));


left.addEventListener('cursorEnter', () => mainContainer.classList.add('hoverLeft'))
left.addEventListener('cursorLeave', () => mainContainer.classList.remove('hoverLeft'))

right.addEventListener('cursorEnter', () => mainContainer.classList.add('hoverRight'))
right.addEventListener('cursorLeave', () => mainContainer.classList.remove('hoverRight'))