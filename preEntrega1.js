// Función para calcular el descuento
function calcularDescuento(cantidadSolicitada) {
  let cantidad1 = 5;
  let porcentaje1 = 5;
  let cantidad2 = 10;
  let porcentaje2 = 7.5;
  let cantidad3 = 15;
  let porcentaje3 = 10;

  let descuento = 0;

  for (let i = 1; i <= 3; i++) {
    let cantidad = eval("cantidad" + i);
    let porcentaje = eval("porcentaje" + i);
    if (cantidadSolicitada >= cantidad) {
      descuento = porcentaje;
    }
  }

  return descuento;
}

// Variables de cantidad y precio unitario
let cantidadSolicitada = Number(
  prompt("Ingresa la cantidad de este producto que deseas comprar")
);
let precioUnitario = 100;

// Verificar si la cantidad ingresada es válida
if (isNaN(cantidadSolicitada) || cantidadSolicitada <= 0) {
  console.log("Error: ingresa una cantidad válida.");
} else {
  // Calcular el descuento en base a la cantidad solicitada
  let descuentoFinal = calcularDescuento(cantidadSolicitada);

  // Calculo del precio total con el descuento aplicado
  let precioTotal = cantidadSolicitada * precioUnitario * (1 - descuentoFinal / 100);
  let ahorrado = cantidadSolicitada * precioUnitario - precioTotal;
  let iva = precioTotal * 0.21;
  let precioIva = precioTotal * 1.21;

  console.log("Precio total con descuento= " + precioTotal + " Pesos");
  console.log("Ahorras: " + ahorrado + " Pesos");
  console.log("Iva= " + iva + " Pesos");
  console.log("Precio total con IVA= " + precioIva + " Pesos");
}
