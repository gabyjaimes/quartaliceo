
boton1 =  document.querySelector
("#boton1");
boton2 =  document.querySelector
("#boton2");
boton3 =  document.querySelector
("#boton3");

parraf = document.querySelector
("#parrafo");

function cambiarcolor(){
    parraf.style.backgroundColor = "orange";
} 
boton1.onclick = cambiarcolor; 


function ocultapa(){
    parraf.style.display = "none";
}
boton2.onclick = ocultapa;


function mostrarpa(){
    parraf.style.display = "block";
}
boton3.onclick = mostrarpa;


document.getElementById("img").onmouseover = function() {mouseOver()};
document.getElementById("img").onmouseout = function() {mouseOut()};

function mouseOver(){
    document.getElementById("img").style.padding = "20px";
}

function mouseOut(){
    document.getElementById("img").style.padding = "0px";
}



