const displayValorAnterior = document.getElementById('numero-anterior');
const displayValorActual = document.getElementById('numero-actual');
const botonesNumeros = document.querySelectorAll('.btn-numero');
const botonesOperadores = document.querySelectorAll('.btn-operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton =>{
    boton.addEventListener('click', () => display.computar(boton.value))
});