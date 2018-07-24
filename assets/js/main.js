/*
DOM
Tiene jerarquía (div padre e hijos)
*/

const boton = document.getElementById("btn");
boton.addEventListener("click", () => {
  //Acá se guarda el comentario ingresado por el usuario
  let comments = document.getElementById("comment").value;

  //Limpiar el textarea
  document.getElementById("comment").value = "";

  //Contenedor donde quedarán los comentarios en html
  const cont = document.getElementById("cont");

  //Crear div contenedor
  const newComments = document.createElement("div");

  //Validar que no se puedan ingresar comentarios vacios
  //Textarea tenga un comentario
  if(comments.length === 0 || comments === null) {
    alert("Debes ingresar un mensaje");
    return false;
  }

  //Crear checkbox
  const chck = document.createElement("input");
  chck.type = "checkbox";

  //Crar icono corazón
  const heart = document.createElement("i");
  heart.classList.add('fas', 'fa-heart', 'heart');


  //Crear icono basura
  const trash = document.createElement("i");
  trash.classList.add('fas', 'fa-trash', 'trash');

  //Nodos de texto del textarea
  let textNewComment = document.createTextNode(comments);

  //
  const contenedorElemento = document.createElement("p");
  contenedorElemento.appendChild(textNewComment);
  newComments.appendChild(chck);
  newComments.appendChild(trash);
  newComments.appendChild(heart);
  newComments.appendChild(contenedorElemento);

  cont.appendChild(newComments);
})
