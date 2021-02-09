const express = require('express');
const app = express();

/*=============================================
IMPORTAMOS EL CONTROLADOR
=============================================*/

const Administradores = require('../controladores/administradores.controlador');

/*=============================================
IMPORTAMOS EL MIDDLEWARE
=============================================*/

const { verificarToken } = require('../middlewares/autenticacion');

/*=============================================
CREAMOS LAS RUTAS HTTP
=============================================*/

app.get('/mostrar-Usuarios', verificarToken, Administradores.mostrarAdministradores);

//app.post('/crear-Usuario', verificarToken, Usuarios.crearUsuario);

app.post('/crear-Usuario', verificarToken, Administradores.crearAdministrador);
app.put('/editar-Usuario/:id', verificarToken, Administradores.editarAdministrador);

app.delete('/borrar-Usuario/:id', verificarToken, Administradores.borrarAdministrador);

app.post('/login', Administradores.login);

/*=============================================
EXPORTAMOS LA RUTA
=============================================*/

module.exports = app;