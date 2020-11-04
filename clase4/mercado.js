let compras = ["arroz", "lentejas", "papas"]
let lista = document.querySelector("#listaMercado")

//opcion 1, for como en c
//for(let i = 0; i <compras.length; i ++ ){
//    let elemento = document.createElement("li");
//    elemento.innerHTML = compras[i];
//    lista.appendChild(elemento);
//}


//opcion 2, for of
//se hace lo mismo para cada uno de los elementos, el mismo lleva la cuenta
function hacerLista(){
    lista.innerHTML = "";
    for(item of compras){
        let elemento = document.createElement("li");
        elemento.innerHTML = item;
        lista.appendChild(elemento);
    }
}


let input = document.querySelector("#inputAdd");
let btn = document.querySelector("#btnAdd");


//event listener
function addItem(){
    //leer el valor que el usuario escribio
    let item = input.value;
    compras.push(item);
    hacerLista();
    //borrar lo que el usuario escribio
    input.value = "";
}

btn.onclick = addItem;
hacerLista();
