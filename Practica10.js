// se importan recursos
const { relative } = require("path");
const readline = require("readline");
const readlineSync = require('readline-sync');

//variable global para las funciones
var lista = [];
//Funcion principal
function listados() {
  console.clear();
  menu();
}

//Menu de Funciones
function menu() {

  console.log("\nPor favor seleccione una opción digitando únicamente la letra de la opción que desea ejecutar.\n");

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: false, });
  rl.question("Opciones\n a) Ingresar valor\n b) Eliminar valor\n c) Desordenar\n d) Ver lista\n e) Salir\n\nOpcion: ", (respuesta) => {

    if (respuesta === "a" || respuesta === "A") {
      console.clear();
      rl.close();
      Ingresar();
    } else if (respuesta === "b" || respuesta === "B") {
      console.clear();
      rl.close();
      lista = Eliminar(lista);
      menu();
    } else if (respuesta === "c" || respuesta === "C") {
      console.clear();
      rl.close();
      Desordenar();
    } else if (respuesta === "d" || respuesta === "D") {
      console.clear();
      console.log(lista);
      rl.close();
      menu();
    } else if (respuesta === "e" || respuesta === "E") {
      rl.close();
      console.clear();
    } else {
      console.log("\nEl valor ingresado no es valido\n");
      rl.close();
      console.clear();
      menu();
    };
  });
};

//Ingreso de datos nuevos
function Ingresar() {
  var lista_temp = []
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: false, });
  rl.question("Dijite el valor o valores que desea ingresar separados por una coma ',' y sin espacios.\n\nValores: ", (n_valores) => {

    lista_temp = n_valores.split(',');
    rl.close();
    lista = combinar(lista, lista_temp);
    lista = ordenar(lista)
    lista_temp = []
    menu();

  });

};

//Combina las entradas de usuario.
function combinar(o, t) {

  if (o.length === 0) {

    for (let i = 0; i < t.length; i++) {

      o[i] = t[i];

    };

    return (o);

  } else {

    var contador = o.length

    for (let i = 0; i < t.length; i++) {

      o[contador] = t[i];
      contador++

    };

    return (o);

  }

};

//Valida, convierte y ordena por numeros y letras
function ordenar(o) {
  var array = o
  var temporal
  var temporal1 = []
  var temporal2 = []
  var contador1 = 0
  var contador2 = 0

  for (let i = 0; i < array.length; i++) {

    if (/^[0-9]+$/.test(array[i])) {

      temporal1[contador1] = parseInt(array[i])
      contador1++

    } else {

      temporal2[contador2] = array[i].toString();
      contador2++

    }
  }

  do {
    var cambio = false;
    for (let i = 0; i < temporal1.length - 1; i++) {

      if (temporal1[i] > temporal1[i + 1]) {

        temporal = temporal1[i];
        temporal1[i] = temporal1[i + 1];
        temporal1[i + 1] = temporal;
        cambio = true;

      };
    };
  } while (cambio);

  do {
    var cambio = false;
    for (let i = 0; i < temporal2.length - 1; i++) {

      if (temporal2[i] > temporal2[i + 1]) {

        temporal = temporal2[i];
        temporal2[i] = temporal2[i + 1];
        temporal2[i + 1] = temporal;
        cambio = true;

      };
    };

  } while (cambio);

  array = combinar(temporal1, temporal2)
  o = array

  return (o);

};

//Elimina las similitudes en la lista
function Eliminar(o) {
  console.log('llegue1 ', o);
  let valor_eliminar
  let lista_temp = []

  const valor = readlineSync.question("Ingrese el valor a eliminar.\n\n" + "Lista actual: " + o + "\n\n\nValor a eliminar: ");

  console.log('llegue2 ', o);
  valor_eliminar = valor

  if (/^[0-9]+$/.test(valor_eliminar)) {

    valor_eliminar = parseInt(valor_eliminar)

  } else {

    valor_eliminar = valor_eliminar.toString()

  };
  let i2 = 0
  for (let i = 0; i < o.length; i++) {

    console.log("Lista valor eliminar: " + valor_eliminar + "\n\nLista o: " + o);

    if (o[i] === valor_eliminar) {

      console.log(lista_temp);

    } else {

      lista_temp[i2] = o[i];
      i2++
      console.log(lista_temp);

    };

  };

  o = lista_temp

  return (o)


};

listados();

