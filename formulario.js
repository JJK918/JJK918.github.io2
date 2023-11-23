document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var asunto = document.getElementById('asunto').value;
        var mensaje = document.getElementById('mensaje').value;
        var lugar = document.getElementById('lugar').value;  // Corrección aquí

        if (nombre === '' || email === '' || asunto === '' || mensaje === '' || lugar === "") {
            alert('Por favor, rellene todos los campos.');
            return;
        }

        alert('Formulario enviado:\nNombre: ' + nombre + '\nCorreo Electrónico: ' + email + '\nAsunto: ' + asunto + '\nMensaje: ' + mensaje + '\nUbicación: ' + lugar);
    });
});
