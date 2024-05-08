var express = require ('express');
var app= express();

/* como trabajamos con socket, es recomendable usar el modulo HTTP para pasarle la app a express
y manejar bien http */
var server=require('http').Server(app);
/**Aqui estara toda la funcionalidad de los sockets
 * se requiere la libreria socket.io
 * se pasa la variable Server que tiene la app express y http
 * 
*/
var io= require('socket.io')(server);
app.use(express.static ('public'));
app.get('/', function (req, res){
    res.status(200).send("Hola Mundo");
});
/**De esta forma activamos socket para que este escuchando mandamos un mensaje
 * de control por consola para saber que pasa y tenemos que hacer que el mensaje 
 * venga del navegador web mediante html y JS
 */
io.on('connection', function(socket){
    console.log("Alguien se ha conectado con socket")
});
server.listen(3002, function(){
    console.log("El servidor esta corriendo en http://localhost:3002");

});