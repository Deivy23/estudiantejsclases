var prompt = require('prompt');

prompt.start();

prompt.get(['numero'], function (err, result) {
    let numero = Number(result.numero)

    if (numero %2 === 0){

        console.log('Es divisible ' + result.numero)
    }
    else {
        console.log('No es divisible de 2')
    }

});
