document.addEventListener("DOMContentLoaded", function() {
    var enlace = document.getElementById("proyecto-a");
    var seccion = document.getElementById("proyecLocation-a");
  
    enlace.addEventListener("click", function(event) {
      event.preventDefault(); // Evita que el enlace se comporte normalmente
  
      // Obtiene la posición de la sección con respecto al inicio del documento
      var seccionOffset = seccion.offsetTop;
  
      // Realiza el desplazamiento suave hacia la sección
      window.scrollTo({
        top: seccionOffset,
        behavior: "smooth"
      });
    });
  });
  
document.addEventListener("DOMContentLoaded", function() {
   var enlace = document.getElementById("contacto-a");
   var seccion = document.getElementById("Contact-section");
  
    enlace.addEventListener("click", function(event) {
      event.preventDefault(); // Evita que el enlace se comporte normalmente
  
      // Obtiene la posición de la sección con respecto al inicio del documento
      var seccionOffset = seccion.offsetTop;
  
      // Realiza el desplazamiento suave hacia la sección
      window.scrollTo({
        top: seccionOffset,
        behavior: "smooth"
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var enlace = document.getElementById("conocimiento-a");
    var seccion = document.getElementById("seccionConocimiento");
   
     enlace.addEventListener("click", function(event) {
       event.preventDefault(); // Evita que el enlace se comporte normalmente
   
       // Obtiene la posición de la sección con respecto al inicio del documento
       var seccionOffset = seccion.offsetTop;
   
       // Realiza el desplazamiento suave hacia la sección
       window.scrollTo({
         top: seccionOffset,
         behavior: "smooth"
       });
     });
   });

   document.addEventListener("DOMContentLoaded", function() {
    var enlace = document.getElementById("contacto-a-sectHero");
    var seccion = document.getElementById("Contact-section");
   
     enlace.addEventListener("click", function(event) {
       event.preventDefault(); // Evita que el enlace se comporte normalmente
   
       // Obtiene la posición de la sección con respecto al inicio del documento
       var seccionOffset = seccion.offsetTop;
   
       // Realiza el desplazamiento suave hacia la sección
       window.scrollTo({
         top: seccionOffset,
         behavior: "smooth"
       });
     });
   });


   const formulario = document.getElementById('enviaForm');
// El evento de subbmit
formulario.addEventListener('click', function(evento) {//submit se usa mas en formularios
  evento.preventDefault();

  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var telefono = document.getElementById("telefono").value;

  if (nombre === '' || email === '' || telefono === '') {
    // Mostrar el mensaje de error
    document.getElementById("mensajeError").style.display = "block";
} else {
  document.getElementById("mensajeExito").style.display = "block";
  document.getElementById("mensajeError").style.display = "none";

  setTimeout(function() {
      document.getElementById("mensajeExito").style.display = "none";
  }, 5000);
}
});

