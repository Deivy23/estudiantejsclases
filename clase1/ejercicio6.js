var prompt = require('prompt');

prompt.start();

prompt.get(['numero1', 'numero2', 'numero3'], function (err, result) {

    let numero1 = Number (result.numero1)
    let numero2 = Number (result.numero2)
    let numero3 = Number (result.numero3)

    if (numero1 > numero2 && numero1 > numero3){

        console.log('el mayor es: ' + result.numero1)

    } else if (numero2 > numero1 && numero2 > numero3 ){

            console.log(' el mayor es: ' + result.numero2)

    }else {
        console.log(' el mayor es: ' + result.numero3)
    }
   
});