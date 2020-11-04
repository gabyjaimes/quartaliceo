let compras = JSON.parse(window.localStorage.getItem("compras"));
// Que ocurre si la variable compras no existe en el almacenamiento local?
if (compras == null) compras = [];
let lista = document.querySelector("#listaMercado");

// Opcion 1, for como en C
// for (let i = 0; i < compras.length; i++) {
//   let elemento = document.createElement("li");
//   elemento.innerHTML = compras[i];
//   lista.appendChild(elemento);
// }

// Opcion 2, for of.
// Se hace lo mismo para cada uno de los elementos de la lista.
function hacerLista() {
  lista.innerHTML = "";
  for (item of compras) {
    let elemento = document.createElement("li");
    elemento.innerHTML = item;
    lista.appendChild(elemento);
  }
}
let input = document.querySelector("#inputAdd");
let btn = document.querySelector("#btnAdd");

// Event listener
function addItem() {
  // leer el valor que el usuario escribio
  let item = input.value;
  compras.push(item);
  window.localStorage.setItem("compras", JSON.stringify(compras));
  hacerLista();
  //Borrar lo que el usuario escribio
  input.value = "";
}
btn.onclick = addItem;
hacerLista();
// El almacenamiento local guarda unicamente cadenas de caracteres
// let notas = [6, 7, 6, 7, 5, 8, 10];
// generar la cadena de caracteres correspondiente a la variable notas
// guardar la cadena de caracteres en el almacenamiento local
// JSON javascript object notation
// window.localStorage.setItem("Notas", JSON.stringify(notas));

// window.localStorage.setItem("Curso", "Quarta");


//window.localStorage.setItem - guardar el item en el storage
//con getItem - leo la variable
//primeros "" - nombre de la variable
//segundos "" - valor de la variable
//el local sotorage solo guarda cadena de caracteres - array a cadena de caracteres se pasa con JSON.stringify("lo que quiro convertir")
//JSON.parse(window.localStorage.getItem("notas")) - de cadena a array. necesita un texto
// si quiero acceder a cierta posición del arrary - JSON.parse(window.localStorage.getItem("notas"))
// leo el almacenamiento al inicio con el JSON.parse
// si hago un cambio, añado algo pongo el window.local para que se vaya guardando en el almacenamiento