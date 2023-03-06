// clase de productos.
class Producto {
  constructor(nombre, precio, cantidad, descuento = 0) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.descuento = descuento;
  }
}
// catalogo de productos.
let catalogo = [
  new Producto("Lampara led 50W E27", 1948, 1),
  new Producto("Lampara led 50W E27 X 5 unidades", 1948, 5, 0.1),
  new Producto("Lampara led 10W C/bateria Emerg. E27", 2076, 1),
  new Producto(
    "Lampara led 10W C/bateria Emerg. E27 X 5 unidades",
    2076,
    5,
    0.1
  ),
  new Producto("Portalampara ceramico E27", 400, 1),
  new Producto("Portalampara ceramico E27 X 10 unidades", 400, 10, 0.15),
  new Producto("Lampara incandescente filamento 500W E40", 1999, 1),
  new Producto(
    "Lampara incandescente filamento 500W E40 X 5 unidades",
    1999,
    5,
    0.1
  ),
  new Producto("Lampara led E40 150 W", 10262, 1),
  new Producto("Lampara led E40 150 W X 5 unidades", 10262, 5, 0.08),
];

// Mostrar los productos y precios.
function mostrarCatalogo() {
  console.log("Productos disponibles:");
  catalogo.forEach((producto, index) => {
    console.log(`${index + 1}. ${producto.nombre} - ${producto.precio} `);
  });
}

mostrarCatalogo();

// Carrito de compras.
let carrito = [];

// Agregar productos al carrito.
function agregarProductos() {
  while (true) {
    //Pedir seleccion de producto.
    let seleccion = Number(
      prompt("Seleccione el numero del producto deseado: ")
    );

    if (seleccion < 1 || seleccion > catalogo.length) {
      console.log("Seleccion no valida");
      return;
    }

    let cantidad = Number(prompt("Indique la cantidad de productos que desea"));

    if (cantidad <= 0) {
      console.log("Cantidad no valida");
      return;
    }

    let producto = catalogo[seleccion - 1];
    carrito.push(
      new Producto(
        producto.nombre,
        producto.precio,
        cantidad,
        producto.descuento
      )
    );
    console.log(`Se aagrego ${cantidad} de ${producto.nombre} al carrito.`);

    // Preguntar si desea agregar otro producto
    let respuesta = prompt("Desea agregar un nuevo producto ? S/N");
    if (respuesta.toLowerCase() === "n") {
      alert("Gracias por su compra");
      break;
    }
  }
}
agregarProductos();

// Mostrar productos en el carrito.
function mostrarCarrito() {
  console.log("Productos en el carrito:");
  carrito.forEach((producto) => {
    console.log(
      `${producto.cantidad} - ${producto.nombre} ${"Subtotal="} $${(
        producto.precio * producto.cantidad
      ).toFixed(2)} (${producto.descuento * 100}% de descuento)`
    );
  });
  console.log(`Total a pagar es $${calcularTotalCarrito()}`);
}

mostrarCarrito();

function calcularTotalCarrito() {
  let total = 0;
  carrito.forEach((producto) => {
    total += producto.cantidad * producto.precio * (1 - producto.descuento);
  });
  return total.toFixed(2);
}
