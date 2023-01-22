// querySelector  devuelve 0 o 1 enlace que concuerde con el selector
// usar id con javascript no con css
const heading = document.querySelector('.header__texto h2') // retorna 0 o 1 elemento  máximo
// se puede modificar texto, clases... con js
// heading.textContent = 'Nuevo Heading'
console.log(heading);


// querySelectorAll  devuelve todos los enlaces que concuerden con el selector
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces[0]); // se puede acceder a cada uno con su posición

enlaces[0].textContent = 'Nuevo texto para enlace'
//enlaces[0].href = 'http://google.com'
enlaces[0].classList.add('nueva-clase');
enlaces[0].classList.remove('navegacion__enlace')


// getElementById  se usa menos. Antigûa
const heading2 = document.getElementById('heading');
console.log(heading2);
