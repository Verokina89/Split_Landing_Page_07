const left = document.querySelector('.left');
const right = document.querySelector('.right');
const mainContent = document.querySelector('.mainContent');

//toma el argumento side (lado), que indica de que lado se mueve el cursor (izquierda o derecha)
function cursorMovedEnter(side) {
    mainContent.classList.add(`hover-${side}`) //se agrega una clase al elemento mainContent; que dependiendo del lado que este el cursor; es decir dependiendo del valor de sied.Se utiliza template literals para crear dinamicamente el nombre de la clase en tiempo de ejecucion.
}

//toma el argumento side.Se ejecuta al salir el cursor del lado especifico.
function cursorMovedOut(side) {
    mainContent.classList.remove(`hover-${side}`) //se quita la clase correspondiente del elemento mainContent tomando en cuenta el valor de side 
}

left.addEventListener('mouseenter', () => cursorMovedEnter('left')) //añade un event listener al elemento left.Cuando el cursor entra en el area de left,se jecuta la funcion cursorMovedEnter('left'), lo que agrega la clase `hover-left``mainCOntent`

left.addEventListener('mouseleave', () => cursorMovedOut('left')) //se añade otro event listener al elemento `left.Cuando el cursor sale del area de `left`, eliminando la clase `hover-left`de `mainContent`

right.addEventListener('mouseenter', () => cursorMovedEnter('right'))
right.addEventListener('mouseleave', () => cursorMovedOut ('right'))


// left.addEventListener('mouseenter', () => mainContent.classList.add('hover-left'));
// left.addEventListener('mouseleave', () => mainContent.classList.remove('hover-left'));

// right.addEventListener('mouseenter', () => mainContent.classList.add('hover-right'));
// right.addEventListener('mouseleave', () => mainContent.classList.remove('hover-right'));
