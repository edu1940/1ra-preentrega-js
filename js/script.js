const golosinas = [ 
    { nombre: "Chocolate", precio: 3000},
    { nombre: "Masticables", precio: 4500 },
    { nombre: "Gomitas", precio: 3500 },
    { nombre: "Chicles", precio: 1500 },
];

function mostrarGolosinas() {
    let lista = "Golosinas disponibles:\n";
    golosinas.forEach((golosina, index) => {
        lista += `${index + 1}. ${golosina.nombre} - $${golosina.precio}\n`;
    });
    return lista;
}

function comprarGolosina(opcion, cantidad) {
    if (opcion < 1 || opcion > golosinas.length) {
        return "Opción inválida. Por favor, elige una golosina válida.";
    }

    if (isNaN(cantidad) || cantidad <= 0) {
        return "Cantidad inválida. Debes ingresar un número positivo.";
    }

    const golosinaElegida = golosinas[opcion - 1];
    const total = golosinaElegida.precio * cantidad;
    return { mensaje: `Has comprado ${cantidad} ${golosinaElegida.nombre}(s) por un total de $${total}.`, total };
}

function simularCompras() {
    let continuar = true;
    let totalAcumulado = 0;

    while (continuar) {
        const listaGolosinas = mostrarGolosinas();
        const opcion = parseInt(prompt(listaGolosinas + "Elige el número de la golosina que deseas comprar: "));
        const cantidad = parseInt(prompt("¿Cuántas unidades deseas comprar? "));

        const resultadoCompra = comprarGolosina(opcion, cantidad);
        
        if (typeof resultadoCompra === 'string') {
            alert(resultadoCompra); 
        } else {
            alert(resultadoCompra.mensaje);
            totalAcumulado += resultadoCompra.total; 
        }

        const respuesta = prompt("¿Quieres seguir comprando? (s/n) ");
        continuar = respuesta.toLowerCase() === 's';
    }

    
    alert(`Su importe es: $${totalAcumulado}. Gracias por tu compra!`);
}

simularCompras();