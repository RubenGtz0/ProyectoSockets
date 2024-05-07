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
var io= require('sokcet.io')(server);
app.get('/', function (req, res){
    res.status(200).send("Hola Mundo");
});

server.listen(3002, function(){
    console.log("El servidor esta corriendo en http://localhost:3002");

});