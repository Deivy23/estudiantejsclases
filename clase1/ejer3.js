/*3. Escribe un programa de dos líneas que pida el nombre del usuario con un *prompt* y escriba un texto que diga “Hola nombreUsuario”.*/

var prompt = require('prompt');

prompt.start();

prompt.get(['nombreUsuario'], function (err, result) {

console.log('El nombre del usuario es: ' + result.nombreUsuario);
});