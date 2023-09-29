console.log("-----Ejercicio 7-----");

function parimpar(numero) {
  var n = numero;

  if (n % 2 == 0) {
    return("Es par");
  } else {
    return ("Es impar");
  }
};


// --------------------------------------------------

let lista = [2,4,1,23,25,3,9,45,56,77,8,6,223];
let opcion = "impar"

let par = []
let impar = []

for (let i = 0; i < lista.length; i++){

  if (parimpar(lista[i]) == "Es par"){
 
    par.push(lista[i])

  } else if (parimpar(lista[i]) == "Es impar" ){

    impar.push(lista[i])

  };

};

if (opcion == "par"){

  console.log("Numeros pares")
  console.log(par)

}else{

  console.log("Numeros impares")
  console.log(impar)

};