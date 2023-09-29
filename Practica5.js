console.log("-----Ejercicio 5-----");
function multiplicar(a, b) {
  let n1 = parseInt(a);
  let n2 = parseInt(b);
  let c = n2;
  for (let i = 1; i < n1; i++) {
    c = c + n2;
  }
  return c;
}

const c = "-";
let d1 = 11; //Numero 1
let d2 = 20; //Numero 2
let s1 = d1.toString(); //Pasa a String d1
let s2 = d2.toString(); //Pasa a String d2
let v1 = s1.charAt(0); //Espacio 0 de la variable
let v2 = s2.charAt(0); //Espacio 0 de la variable
let o1;
let o2;
if (c == v1) {
  s1 = s1.slice(1);
  if (c == v2) {
    console.log("v1 y v2 son negativos");
    s2 = s2.slice(1);
    o1 = parseInt(s1);
    o2 = parseInt(s2);
    console.log(parseInt(multiplicar(o1, o2)));
  } else {
    console.log("Solo v1 es negativo");
    o1 = parseInt(s1);
    o2 = parseInt(s2);
    console.log(parseInt("-" + multiplicar(o1, o2)));
  }
} else {
  if (c == v2) {
    console.log("Solo v2 es negativo");
    s2 = s2.slice(1);
    o1 = parseInt(s1);
    o2 = parseInt(s2);
    console.log(parseInt("-" + multiplicar(o1, o2)));
  } else {
    console.log("Ninguno es negativo");
    o1 = parseInt(s1);
    o2 = parseInt(s2);
    console.log(multiplicar(o1, o2));
  }
}
