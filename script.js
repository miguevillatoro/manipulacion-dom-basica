//Crear variables que representen a los selectores
/*
const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const parrafito = document.querySelector('.parrafito')
const pid = document.getElementById('pid')
const input = document.querySelector('input')

//documet | Funciones
//querySelector | Metodos
//querySelector es para seleccionar las etiquetas, clases o id | Las primera que se encuentra
//querySelectorAll selecciona todos las etiquetas por ejemplo los p | Por medio de un array
//getElementById es para seleccionar id y hay otros
// En querySelector se pone ".", "#", pero con getElementById solo se pone el nombre del elemneto o del id
console.log(input.value); 
// .value

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

//CAMBIAR HTML DESDE JS

h1.innerHTML = 'Patito <br> Feo'; //Cambia el texto de nuestro h1 | Podemos escribir html
h1.innerText = 'Patito <br> Feo'; //Cambia el texto de nuestro h1 | No podemos escribir html solo texto
//console.log(h1.getAttribute('pantalla')); //

//console.log(h1.getAttribute('class')); 
//h1.setAttribute('class', 'rojo'); //Cambia los atributos en html

//getAttribute modificar un atribute | Ayuda a leer algunos de los atributos que tenga nuestros elementos
//setAttribute modifica la clase

h1.classList.add('rojo');
//Agrega una clase

h1.classList.remove('verde');
//Eliminar clase

//h1.classList.toggle('verde'); | Para poner y quitar una clase
//h1.classList.contains('verde'); | Nos devuelve true o false si tiene la clse que le estamos preguntando (verde)


//input.value = "456";
//Modificamos el value del input

//CÓMO CREAR UN ELEMENTO DESDE CERO
//document.crateElement() nos ayuda a crear un elemento html que queramos

//console.log(document.createElement('img'));
//console.log(document.createElement('span'));
const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
console.log(img);


pid.innerHTML = "";  //COMO BORRAR EL CONTENIDO Y LUEGO AGREGAR LA IMAGEN
pid.append(img);
//Estamos insertando la imagen dentro de un contenedor, dentro de otor elemento que ya existia en html

//appendChild agregan el elemento (imagen) despues del contenido que tiene nuestro parrafo
*/

const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

/*form.addEventListener('submit', sumarInputValues); //No se pone parentesisi de función porque se ejecutaria primero la funcion y luego el addEventListener

function sumarInputValues(event) {
  console.log({event});
  event.preventDefault();
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumaInputs;
}*/

//Una de las formas de escuchar los eventos es agregar en html onclick
//onchange escucha cuando el usuario deja de escribir


//OTRA FORMA
btn.addEventListener('click', sumarInputValues); //No se pone parentesisi de función porque se ejecutaria primero la funcion y luego el addEventListener

function sumarInputValues(event) {
  //console.log({event});
  //event.preventDefault();
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumaInputs;
}
