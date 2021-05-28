// ENTRE TODOS
function pagoEquitativo(cuenta, cantAmigos) {
  let totalCuenta = cuenta;
  console.log("la cuenta es: " + totalCuenta);
  let descuento = totalCuenta * 0.1;
  let subTotal = totalCuenta - totalCuenta * 0.1;
  let propina = subTotal * 0.25;
  let totalFinal = subTotal + propina;
  if (cuenta > 4000) {
    console.log("se aplica un descuento del 10%: " + descuento);
    console.log("el subtotal es: " + subTotal);
    console.log("la propina es de: " + propina);
    console.log("el total con propina es " + totalFinal);
    return totalFinal / cantAmigos;
  } else {
    console.log("se aplica un descuento del 10%: " + descuento);
    console.log("el subtotal es: " + subTotal);
    console.log("la propina es de: " + propina);
    console.log("el total con propina es " + totalFinal);
    return totalFinal / cantAmigos;
  }
}

let cadaQuien = pagoEquitativo(5000, 4);
console.log(cadaQuien);
