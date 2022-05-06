/* DATOS DE CADA UNO DE LOS EJERCICIOS */


//Ejercicio a seleccionar
const number = 3;

if(number == 1){
//Ejercicio 1
module.exports = {
    "number_exercise": 1,
    "url" : "https://pokeapi.co/api/v2/pokemon/ditto",
    "vus" : 5,
    "duration" : "30s",
    "sleep" : 1,
    "status_code": 200,
}
}else if(number == 2){

//Ejercicio2
module.exports = {
    "number_exercise": 2,
    "url" : "https://httpbin.test.k6.io",
    "vus" : 15,
    "duration" : "1m0s",
    "sleep" : 1,
    "status_code": 200,
}
}else{

//Ejercicio3
module.exports = {
    "number_exercise": 3,
    "url" : "https://httpbin.test.k6.io",
    "target_1": 20,
    "target_2": 2,
    "target_3": 0,
    "duration_1" : "2m30s",
    "duration_2" : "30s",
    "duration_3" : "10s",
    "sleep" : 1,
    "status_code": 200,
   }
}
