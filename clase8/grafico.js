let grafico1 = document.querySelector("#miPrimerGrafico");
// Vamos a graficar la función 8*sin(x)
// Debo generar un objeto que tenga los valores de las x, y los valores de las y.
// Voy a graficar entre 0 y 2*pi, 200 puntos
let x = [];
let y = [];
let paso = (2 * Math.PI - 0) / 200;
for (let xV = 0; xV <= 2 * Math.PI; xV += paso) {
  x.push(xV);
  y.push(8 * Math.sin(xV));
}
console.log(x);
console.log(y);
Plotly.newPlot(
  grafico1,
  [
    { x: [1, 2, 3, 4, 5], y: [1, 2, 4, 8, 16] }, { x: x, y: y },
  ],
  {
    margin: { t: 0 },
  }
);



//grafico
//sintaxis es - variable que tiene la referencia al elemento de la pagina web que llame con el querySelector y el id
//plotly lo puedo usar porque lo inclui en el head con el link raro ese
//newPlot - nuevo grafico. requiere varios argumetnos
//1. elemento de html en el que se va a graficar, un div
//2. array que tiene un objeto adentro con dos propriedades: x, y cada uno con unos valores, que van a hacer las coordenadas. es un objeto porque es solo una linea la que vamos a trazar
// para agregar otro objeto, pongo luego de una coma {x: x, y: y} - el programa ya sabe que los valores (que estan despues de los dos puntos) ya estan guardados en el array de antes