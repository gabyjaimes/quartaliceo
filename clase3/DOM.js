encabezado = document.querySelector("h1")
console.log(encabezado)
//el valor es el encabezado

texto = prompt("ingrese el texto que quiere en el encabezado")
encabezado.innerHTML = texto;
//innerHTML - texto que esta dentro del objeto

//backgroundColor corresponde al color del fondo 
color = prompt("ingrese el color deseado")
encabezado.style.backgroundColor = color;
//para ingresar a las propiedades escribe