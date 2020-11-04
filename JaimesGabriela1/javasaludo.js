//hacer un programa que reciba la edad
//de una persona y la salude dependiendo
//de la edad: si es menor a 12 años que
//le diga: hola nombre, si tiene entre
//13 y 50 años que le diga buenos días
//nombre, si tiene mas de 50 años que le 
//diga buenos días respetado nombre.
let edad;
let nombre;
do{
    nombre = prompt("Ingrese su nombre");
}while(nombre.length < 3);

do{
    edad = parseFloat(prompt("Ingrese su edad"));
} while (Number.isNaN(edad)|| edad<=0);

if(edad <= 12){
    console.log(`Hola ${nombre}`)
} else{
    if (13 <= edad <= 50) console.log(`Buenos dìas ${nombre}`);
} 
if(edad > 50){
    console.log(`Buenos dìas respetado ${nombre}`)
}

