var prompt = require('prompt');

prompt.start();

prompt.get(['numero1', 'numero2'], function (err, result) {

console.log(parseInt(result.numero1)+parseInt(result.numero2));
});