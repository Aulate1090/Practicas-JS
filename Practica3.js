console.log("-----Ejercicio 3-----");
function tipoTriangulo(a, b, c) {
  if (a == b && a == c && c == b) {
    console.log("Es equilatero");
  } else if (a != b && a != c && b != c) {
    console.log("Es escaleno");
  } else if ((a == b && b != c) || (a == c && b != c) || (b == c && a != c)) {
    console.log("Es isosceles");
  }
}

console.log(tipoTriangulo(100, 1000, 10));
