
//window.addEventListener("load", init);

function boton (){
  //text area
  var contenedorVacio=document.getElementById("contenedorVacio");
  var madre=document.getElementById ("vacio");
  madre.setAttribute ("class", "plomo");

  nodoTexto=document.createElement("input");
  var contenedorLista=document.createElement ("div");
  contenedorLista.setAttribute ("class", "listas");
  nodoTexto.setAttribute ("type", "text");
  nodoTexto.setAttribute ("placeholder", "Ingrese una tarea");
  nodoTexto.setAttribute ("class", "cuadrado");
  nodoTexto.setAttribute ("id", "texto");
  nodoTexto.value;
  nodoTexto.value= "";

  madre.appendChild(nodoTexto);

//boton
   var nodoBoton=document.createElement("input");
  nodoBoton.setAttribute ("type", "button");
  nodoBoton.setAttribute ("value", "guardar");
  nodoBoton.setAttribute ("class", "verde");

  contenedorVacio.appendChild(contenedorLista);
  madre.appendChild(nodoBoton);
 
 nodoBoton.addEventListener("click", function (){
  // tercer paso
  var nuevaLista=document.getElementById ("texto").value;
  var elementoMensaje=document.createElement ("p");
  var cajaMensaje=document.createTextNode(nuevaLista);
  elementoMensaje.appendChild(cajaMensaje);
  contenedorLista.appendChild(elementoMensaje); 

  var anadir = document.createTextNode ("Añadir nueva tarjeta");
  var nodoA= document.createElement ("a");
  nodoA.appendChild(anadir);
  contenedorLista.appendChild(nodoA);

  contenedorLista.appendChild(nodoBoton);
  contenedorVacio.appendChild(contenedorLista);
})



  // limpiar imput

}
