let graf1 = document.querySelector("#grafico1");
let graf2 = document.querySelector("#grafico2");
let graf3 = document.querySelector("#grafico3");

let x = [];
let y = [];
let paso1 = (5 + 5)/100
for (let xV = -5; xV <= 5; xV += paso1) {
    x.push(xV);
    y.push(2*(xV) - 4);
  }
console.log(x);
console.log(y);

Plotly.newPlot(
  graf1,
  [
    { x: x, y: y },
  ],
  {
    margin: { t: 0 },
  }
);

let a = [];
let b = [];
let paso2 = (4 + 4)/100
for (let aV = -4; aV <= 4; aV += paso2) {
    a.push(aV);
    b.push(6 * Math.pow(aV, 2) - 3 * (aV) - 8);
  }
console.log(a);
console.log(b);

Plotly.newPlot(
  graf2,
  [
    { x: a, y: b },
  ],
  {
    margin: { t: 0 },
  }
);

let c = [];
let d = [];
let paso3 = (7 + 7)/100
for (let cV = -7; cV <= 7; cV += paso3) {
    c.push(cV);
    d.push(Math.sin(cV));
  }
console.log(c);
console.log(d);
Plotly.newPlot(
  graf3,
  [
    { x: c, y: d },
  ],
  {
    margin: { t: 0 },
  }
);