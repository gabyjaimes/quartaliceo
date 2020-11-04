//ponen cuidado cuando ocurre algo, pendiente si presiona una tecla o si mueve el mouse
boton =  document.querySelector
("#boton1");

parraf = document.querySelector
("#miparrafo");

function cambiarcolor(){
    parraf.style.backgroundColor = "red";
    alert("color cambiado");
} //toma el estilo del parrafo, el background y lo pone rojo
//al hacer click sobre el boton queremos que se ejecute la funcion cambiacolor
boton.onclick = cambiarcolor; //cuando el boton haga click haga esta funcion
