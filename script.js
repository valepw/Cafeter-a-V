document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("pedidoForm");
    const totalElement = document.getElementById("total");

    function calcularTotal() {
        let total = 0;
        total += parseInt(document.getElementById("cafe").value);
        total += parseInt(document.getElementById("tamaño").value);
        total += parseInt(document.getElementById("extras").value);
        totalElement.textContent = total;
    }

    document.getElementById("cafe").addEventListener("change", calcularTotal);
    document.getElementById("tamaño").addEventListener("change", calcularTotal);
    document.getElementById("extras").addEventListener("change", calcularTotal);

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("¡Pedido confirmado! ☕ Gracias por comprar en Cafetería Vale.");
    });
});
