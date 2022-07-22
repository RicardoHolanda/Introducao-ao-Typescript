"use strict";
var valorAny;
valorAny = 3;
valorAny = 'Olá';
valorAny = true;
var valorString = "Teste";
valorString = valorAny;
var valorString2 = " De erro";
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorString2);
somarString("Olá ", "meu chapa");
