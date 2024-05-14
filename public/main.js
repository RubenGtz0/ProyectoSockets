/**
 * Creamos la variable que permitira al frontend conectarse a nuestro backend
 */
var socket= io.connect('http://localhost:3002',{'forceNew':true});
/*Esto manda al servidor el mensaje de connect y aparece console.log*/

/**
 * El cliente manejara datos mediante nesajes, estos se llamaran eventos y se mostraran
 * por consola en el navegador
 */
socket.on('messages', function(data){
    console.log(data);
    render(data);
});

/* Creamos un template para que nos imprima el contenido*/

function render (data){
    //Aqui se inicia el manejo de string que viene en EM6 se usan estas comillas ´´
    // Las variables se colocan con el signo de $ y entre {}
    var html = data.map(function(elem, index){
        return(`<div>
            <strong>${elem.autor}</strong>:
            <em>${elem.texto}</em>
            </divZ>`);
    }).join("");
    document.getElementById('messages').innerHTML=html;
}
//Despues renderizamos los datos actualizados en la consola

//Cada vez que alguien precione el boton enviar en el formulario 
//El cliente emite un nuevo mensaje y manda el payload
function addMessage(e){
    var payload = {
        autor: document.getElementById('username').value,
        texto: document.getElementById('texto').value
    };
    socket.emit('new-message', payload);
    return false;
}