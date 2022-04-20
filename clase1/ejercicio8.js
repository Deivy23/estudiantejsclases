var prompt = require('prompt');

prompt.start();

prompt.get(['numero'], function (err, result) {
    
i=0
primo = true
numero = Number(result.numero)

for (i=2; i < numero; i++){
    if(numero%i==0){
        primo=false;
    }
}

if(primo==true){
    console.log("este numero es primo")
}
else{
    console.log("no es primo")
}

});