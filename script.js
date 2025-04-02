let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById("lista-carrito");
    const totalCarrito = document.getElementById("total-carrito");
    const contadorCarrito = document.getElementById("contador-carrito");

    listaCarrito.innerHTML = "";
    carrito.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio}`;
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "X";
        btnEliminar.onclick = () => eliminarDelCarrito(index);
        li.appendChild(btnEliminar);
        listaCarrito.appendChild(li);
    });

    totalCarrito.textContent = total;
    contadorCarrito.textContent = carrito.length;
}

function eliminarDelCarrito(index) {
    total -= carrito[index].precio;
    carrito.splice(index, 1);
    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    total = 0;
    actualizarCarrito();
}

document.getElementById("ver-carrito").addEventListener("click", () => {
    document.getElementById("carrito").classList.toggle("hidden");
});
