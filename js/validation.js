


function validarFormulario(evento) {
    evento.preventDefault();

    let nombre = document.getElementById('fname').value;
    if(nombre.length === 0) {
      alert('No has escrito nada en el nombre');
      return;
    }
    else if(nombre.length > 30) {
      alert('Exceso de caracteres, maximo 30');
      return;
    }
    else if(!/^[a-zA-Z\s]+$/.test(nombre)) {
        alert("Solo se pueden usar letras y espacios");
        return;
    }

   let apellido = document.getElementById('lname').value;
    if (apellido.length === 0) {
      alert('No has escrito nada en el apellido');
      return;
    }
    else if(apellido.length > 30) {
        alert('Exceso de caracteres, maximo 30');
        return;
      }
    else if(!/^[a-zA-Z\s]+$/.test(apellido)) {
        alert("Solo se pueden usar letras y espacios");
        return;
    }

    let mail = document.getElementById('email').value;
    if (mail === "") {
        alert("No has escrito nada en el mail");
        return;
    } 
    else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(mail)) {
        alert("Por favor, ingrese direccion valida de Email");
        return;
    } 

    let texto = document.getElementById('comment').value;
    if (texto.length === 0) {
      alert('No has escrito nada en el Comentarios');
      return;
    }
    else if(texto.length > 200) {
        alert('Exceso de caracteres, maximo 200');
        return;
      }

    this.submit();
  }

  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
