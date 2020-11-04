//variables
let x = 3
let y = 4
//string con backtick
console.log(`x + y = ${x % y}`)

//condicionales
let w;
do{
   w = parseFloat(prompt("ingrese un numero"))
} while(Number.isNaN(w)) //numero que no es NaN

//parseFloat convierte una cadena de caracteres en un numero decimal
//NaN - not a number
if (w > 0) {
    console.log(`${w} es positivo`);
} else {
    if (w < 0) console.log(`${w} es negativo`);
    else console.log(`${w} es cero`);
  }