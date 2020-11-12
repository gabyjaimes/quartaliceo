let grafico = document.querySelector("#graf")

let x = [];
let y = [];
let paso = (3 + 3)/100
for (let xV = -3; xV <= 3; xV += paso) {
    x.push(xV);
    y.push(Math.exp(xV));
  }
console.log(x);
console.log(y);

let a = [];
let b = [];
let paso1 = (3 + 3)/100
for (let aV = -3; aV <= 3; aV += paso1) {
    a.push(aV);
    b.push(Math.exp(-aV));
  }
console.log(a);
console.log(b);

Plotly.newPlot(
    grafico,
    [
      { x: x, y: y }, { x: a, y: b},
    ],
    {
      margin: { t: 0 },
    }
  );
  