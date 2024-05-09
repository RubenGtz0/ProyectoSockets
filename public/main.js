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
});