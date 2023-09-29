console.log("-----Ejercicio 4-----");

function largo(num) {
  let i;

  if (num == 0) {
    return num;
  } else {
    for (i = 0; num > 0; i++) {
      num = num / 10;
      num = parseInt(num);
    }
    return i;
  }
}

console.log(largo(715340));
