var prompt = require('prompt');

prompt.start();

prompt.get(['numero1', 'numero2'], function (err, result) {

    let numero1 = Number (result.numero1)
    let numero2 = Number (result.numero2)

    if (numero1 > numero2){

        console.log('el mayor es: ' + result.numero1)
    
    }

    else {
        console.log(' el mayor es: ' + result.numero2)
    }


});