require('dotenv').config();
//solo en este caso de ruta la debi poner desde el principio osea desde la carpeta contenedora
//importa de model el archivo server y lo asigna a "Server" con la primera mayuscula
const Server = require('../NuevaApiClientes/model/server')
//a "server" en minuscula lo crea como un objeto de "Server"
const server = new Server();
server.listen();
const port = 8090