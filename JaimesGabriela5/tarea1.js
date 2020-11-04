let tabla = document.querySelector("#tTareas");
let tareas = JSON.parse(window.localStorage.getItem("tareas"));
if (tareas == null) tareas = [];
let btn= document.querySelector("#btnAdd")
let input= document.querySelector("#inputAdd")
let input1= document.querySelector("#inputAdd1")
let input2= document.querySelector("#inputAdd2")

function addHeaders() {
    let fila = document.createElement("tr");
    let enc1 = document.createElement("th");
    enc1.innerHTML = "Materia";
    let enc2 = document.createElement("th");
    enc2.innerHTML = "Descripción";
    let enc3 = document.createElement("th");
    enc3.innerHTML = "Fecha";
  
    fila.appendChild(enc1);
    fila.appendChild(enc2);
    fila.appendChild(enc3);
    tabla.appendChild(fila);
  }
  
  function hacerTabla() {
    tabla.innerHTML = "";
    addHeaders();
    for (item of tareas) {
    let fila = document.createElement("tr");
    for (valor of Object.values(item)) {
      let celdaNueva = document.createElement("td");
      celdaNueva.innerHTML = valor;
      fila.appendChild(celdaNueva);
    }
    tabla.appendChild(fila);
  }
  }
    function addItem() {
    let tarea = {materia: input.value, descripcion: input1.value, Fecha:input2.value,}
    tareas.push(tarea);
    hacerTabla();
    window.localStorage.setItem("tareas", JSON.stringify(tareas));
    input.value = "";
    input1.value = "";
    input2.value = "";
  }
  btn.onclick = addItem;
  hacerTabla();
  
