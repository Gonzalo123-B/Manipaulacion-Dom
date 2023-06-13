let parrafo = document.getElementById("texto")
let boton = document.getElementById("boton")

boton.addEventListener('click', function(){
  parrafo.classList.toggle("texto-color")
})