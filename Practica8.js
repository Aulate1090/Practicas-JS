function menu() {

  // se importan recursos
  const areaCuadrado = require("./Practica1");
  const areaRectangulo = require("./Practica2")

  var readline = require('readline');
  var rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: false });

  // Funcioes del menu

  function cuadra() {
    rl.question('\nIngresaste a area cuadrado:\n\nIngrese el lado: ', (respuesta2) => {
      console.log('\nResultado:', areaCuadrado(respuesta2));

      rl.question('\nDesea volver a calcular?\n Y/N: ', (respuesta0) => {

        if (respuesta0 === 'Y' || respuesta0 === 'y') {

          cuadra()

        } else {

          menu()

        }
      });
    });
  }
  function rectan() {

    var rectangulo = []

    rl.question('\nIngrese la base: ', (respuesta3) => {

      rectangulo.push(respuesta3)

      rl.question('\nIngrese la altura: ', (respuesta4) => {

        rectangulo.push(respuesta4)
        console.log('\nEl area es: ', areaRectangulo(rectangulo[0], rectangulo[1]));
        rectangulo = []

        rl.question('\nDesea volver a calcular?\n Y/N: ', (respuesta0) => {

          if (respuesta0 === 'Y' || respuesta0 === 'y') {

            rectan()

          } else {

            menu()

          }
        });
      });
    });
  }

  rl.question('\n\n\nPor favor elija una funcion:\n a) Area Cuadrado\n b) Area Rectangulo\n c) Exit\n \nR:', (respuesta1) => {

    if (respuesta1 === 'a') {

      cuadra()

    } else if (respuesta1 === 'b') {

      rectan()

    } else if (respuesta1 === 'exit' || respuesta1 === 'Exit' || respuesta1 === 'c') {

      rl.close()

    }
  });

};

menu()