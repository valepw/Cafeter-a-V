function mostrarPantalla(id) {
    document.getElementById("pantallaInicio").style.display = "none";
    document.getElementById("pantallaPedido").style.display = "none";
    document.getElementById("pantallaConfirmacion").style.display = "none";

    document.getElementById(id).style.display = "block";
}

function calcularTotal() {
    let cafe = document.getElementById("cafe");
    let tamano = document.getElementById("tamaño");
    let extras = document.getElementById("extras");

    let total = parseInt(cafe.value) + parseInt(tamano.value) + parseInt(extras.value);

    document.getElementById("cafeSeleccionado").textContent = cafe.options[cafe.selectedIndex].text;
    document.getElementById("tamanoSeleccionado").textContent = tamano.options[tamano.selectedIndex].text;
    document.getElementById("extrasSeleccionados").textContent = extras.options[extras.selectedIndex].text;
    document.getElementById("total").textContent = total;
}
