const readline = require("readline");
   
function listas() {
    // se importan recursos
     const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: false });
    //-------------------------------------------------------------------------------------------------------------------
    console.clear()
    let lista = []
    let contador = 0
    let ciclo = 1
    let Numero
    //--------------------------------------------------Menu-------------------------------------------------------------
    menu()

    function menu() {

        console.log('\nPor favor seleccione una opción digitando únicamente la letra de la opción que desea ejecutar.\n');
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: false });
        rl.question("Opciones\n a) Ingresar\n b) Eliminar\n c) Desordenar\n d) Ver lista\n e) Salir\n\nOpcion: ", (R1) => {

            if (R1 === "a" || R1 === "A") {
                rl.close()
                Ingresar();
            } else if (R1 === "b" || R1 === "B") {
                rl.close()
                Eliminar();
            } else if (R1 === "c" || R1 === "C") {
                rl.close()
                Desordenar();
            } else if (R1 === "d" || R1 === "D") {
                rl.close()
                console.log(lista);
                menu()
            } else if (R1 === "e" || R1 === "E") {
                rl.close()
                console.clear()
            } else {
                console.log("\nEl valor ingresado no es valido\n");
                rl.close()
                menu()
            };
            rl.close
        });


    };

    //-------------------------------------------Funciones del Menu------------------------------------------------------
    function Ingresar() {

        console.clear()
        parametros()

        let ciclo = 1
        function parametros() {

            const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: false });
            rl.question('\nPor favor ingrese el numero de valores que desea ingresar (Maximo 6 por ejecucion).\nNumero: ', (fi1) => {

                Numero = parseInt(fi1)
                rl.close()
                Iteraciones()

            });

        }


        function Iteraciones() {

            console.clear()


            if (ciclo <= Numero) {
                CrearLista()
                ciclo = ciclo + 1
            } else {

                console.log(lista)
                const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: false });

                rl.question('Desea agregar mas datos a la lista?\nS/N: ', (Respuesta) => {

                    if (Respuesta === 'S' || Respuesta === 's') {
                        rl.close()
                        Ingresar()

                    } else if (Respuesta === 'N' || Respuesta === 'n'){
                        rl.close()
                        menu()

                    }


                });

            };
        }

        function CrearLista() {

            console.clear()

            const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: false });
            rl.question(`Dijite el valor ${ciclo}: `, (fi2) => {

                fi2 = parseInt(fi2)
                lista[contador] = fi2
                contador = contador + 1
                rl.close()
                Ordenar(lista)
                Iteraciones()

            });
        };

        function Ordenar(ordenado) {
            
            var cambio;

            do {
                cambio = false;
                
                for (var i = 0; i < contador - 1; i++) {
                  
                    if (ordenado[i] > ordenado[i + 1]) {
                        
                        var temporal = ordenado[i];
                        ordenado[i] = ordenado[i + 1];
                        ordenado[i + 1] = temporal;
                        cambio = true;

                    }

                }

            } while (cambio);

            lista = ordenado
        }
    };

    function Eliminar() {
        
        console.clear()
        let validar

        const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: false });
        rl.question('Por favor seleccione una accesion con la letra de la opcion.\n\nOpciones:\n a) Eliminar coincidencias\n b) Eliminar elemento repetido\n\nOpcion: ', (fe1) => {

            if(fe1 === 'a' || fe1 === 'A'){
                
                rl.close()
                validar = parseInt(fe1)
                CasoA()

            }else if(fe1 === 'b' || fe1 === 'B'){



            }else{
                
                rl.close()
                Eliminar()

            };

        });

        
        function CasoA(){
            console.clear()
            const rl = readline.createInterface({input: process.stdin, output: process.stdout, terminal: false});
            rl.question('Dijite el elemento a buscar: ', (fe2) => {

                fe2 = parseInt(fe2)
                rl.close()
                limpiador1()

            });

            function limpiador1 () {

                let limpiar = [ [], [] ]
                let contador2 = 0
               
                do {
                    cambio = false;
                
                    for (var i = 0; i < contador - 1; i++){
                    
                        if (lista[i] == validar){
                            
                            limpiar[0][i] = validar
                            lista[contador2] = limpiar[0][contador2]
                            contador2 += 1
                            cambio = true;
    
                        } else {
    
                            limpiar[1][i] = validar
                            lista[contador2] = limpiar[1][contador2]
                            contador2 += 1
                            cambio = true;
    
                        };
                    };

                }while(cambio){
                    
                    menu()

                }
               
                
            };
            

            
        }




        


    }
    //---------------------------------------------------------------------------------------------------------------------
    function Desordenar() {

    //     rl.question('', () => {


    //     });

    // }
    };

    

}


    //---------------------------------------------------------------------------------------------------------------------

listas();
