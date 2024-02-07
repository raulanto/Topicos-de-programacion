function darkModeListener() {
	document.querySelector("html").classList.toggle("dark");
}
darkModeListener();

// Ejcicio 1

function veriricarContra() {
	const password = "raulanto";
	const constrarUSer = document.getElementById("passwordUser");
	if (constrarUSer.value.toLowerCase() === password) {
		let respuesta = (document.getElementById("respuesta").innerHTML =
			'  <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium"></span>La contraseña es correcta</p>');
		console.log("verdadero");
		return;
	} else {
		let respuesta = (document.getElementById("respuesta").innerHTML =
			'    <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium"></span>La contraseña no es correcta</p>');
		console.log("FALSO");
		return;
	}
}

// Ejcicio 2

function dividir() {
	const numero1 = document.getElementById("numero1");
	const numero2 = document.getElementById("numero2");
	console.log(numero1.value);
	console.log(numero2.value);
	if (numero1.value === 0 && numero2.value === 0) {
		let respuesta = (document.getElementById("resultadoDiv").innerHTML =
			'    <samp class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium"></span>Erroe al dividir por 0</samp>');

		console.log("error al dividir");
		return;
	} else {
		let respuesta1 = parseInt(numero1.value) / parseInt(numero2.value);
		let respuesta = (document.getElementById(
			"resultadoDiv"
		).innerHTML = `<samp class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium"></span>${respuesta1}</samp>`);
		return;
	}
}

// Ejcicio 3

function ParoImpar() {
	var numero = document.getElementById("numeroPar");
	if (numero.value % 2 == 0) {
		console.log("es par");
		var respuestapar = (document.getElementById(
			"numeroParr"
		).innerHTML = `<samp class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium"></span>EL numero es par</samp>`);
		return;
	} else {
		var respuesta = (document.getElementById("numeroParr").innerHTML =
			'    <samp class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium"></span>El numero no es par</samp>');
		return;
	}
}

// Ejercicio 4

function edadImpuestos() {
	var edad = document.getElementById("edad");
	var entrada = document.getElementById("entrada");
	if (edad.value > 16 && entrada.value >= 1000) {
		console.log(" es mayor si puede pagar");
		var respuestapar = (document.getElementById(
			"edadImpuestosr"
		).innerHTML = `<samp class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium"></span>Tiene que atributar</samp>`);
	} else {
		console.log("es menor no puede pagar");
		let respuesta = (document.getElementById("edadImpuestosr").innerHTML =
			'    <samp class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium"></span>No tiene que atributar</samp>');
	}
}

// Ejercicio 5
function Rentaanual() {
	var renta = document.getElementById("renta");
	var impuesto;
	if (renta.value < 10000) {
		console.log("menos de 1000");
		impuesto = renta.value * 0.5;
		var respuestapar = (document.getElementById(
			"impuestosREnta"
		).innerHTML = `<samp class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium"></span>EL impuesto total apagar es de ${impuesto}</samp>`);
	} else if (renta.value >= 10000 && renta.value <= 20000) {
		console.log("entre 10000 a 20000");
		impuesto = renta.value * 1.5;
		var respuestapar = (document.getElementById(
			"impuestosREnta"
		).innerHTML = `<samp class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium"></span>EL impuesto total apagar es de ${impuesto}</samp>`);
	} else if (renta.value >= 35000 && renta.value <= 60000) {
		console.log("entre 35000 a 600000");
		impuesto = renta.value * 3.0;
		var respuestapar = (document.getElementById(
			"impuestosREnta"
		).innerHTML = `<samp class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium"></span>EL impuesto total apagar es de ${impuesto}</samp>`);
	} else if (renta.value > 60000) {
		console.log("60000");
		impuesto = renta.value * 4.5;
		var respuestapar = (document.getElementById(
			"impuestosREnta"
		).innerHTML = `<samp class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium"></span>EL impuesto total apagar es de ${impuesto}</samp>`);
	}
}

// Ejecicio 6
function empresaPuntuacion(params) {
	var puntuacion = document.getElementById("puntuacion");
	console.log(puntuacion.value);
	var totaldinero;
	if (puntuacion.value <= 0.0) {
		totaldinero = puntuacion.value * 24000;
		var respues = (document.getElementById(
			"repuestaPuntuacion"
		).innerHTML = `<samp class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium"></span>Inaceptable ,cantidad de dinero es de: ${totaldinero}</samp>`);
	} else if (puntuacion.value <= 0.4) {
		totaldinero = puntuacion.value * 24000;
		var respues = (document.getElementById(
			"repuestaPuntuacion"
		).innerHTML = `<samp class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium"></span>Aceptable ,cantidad de dinero es de: ${totaldinero}</samp>`);
	} else if (puntuacion.value >= 0.6) {
		totaldinero = puntuacion.value * 24000;
		var respues = (document.getElementById(
			"repuestaPuntuacion"
		).innerHTML = `<samp class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium"></span>Meritorio ,cantidad de dinero es de: ${totaldinero}</samp>`);
	}
}

// Ejercicio 7

function Calcularentrada() {
	var edadcliente = document.getElementById("edadCliente");
	if (edadcliente.value <= 4) {
		var respues = (document.getElementById(
			"repuestacliente"
		).innerHTML = `<samp class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium"></span>Entra gratis</samp>`);
	} else if (edadcliente.value >= 4 && edadcliente.value < 18) {
		var respues = (document.getElementById(
			"repuestacliente"
		).innerHTML = `<samp class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium"></span>Su entrada es de 5$</samp>`);
	} else if (edadcliente.value >= 18) {
		var respues = (document.getElementById(
			"repuestacliente"
		).innerHTML = `<samp class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium"></span>Su entrada es de 10$</samp>`);
	}
}

// ejercicio8

function pizza(params) {
	var select = document.getElementById("spizza");
	var tabla = document.getElementById("tabla");
	switch (parseInt(select.value)) {
		case 1:
			console.log("Vegetariana");
			tabla.innerHTML = `            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text">
			<tr>
			  <th scope="col" class="px-6 py-3 text-center">
				Ingredientes Vegetarianos
			  </th>
			</tr>
		  </thead>
		  <tbody class="text-center">
			<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
			  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
				<div class="">
				  <input onchange="pizza()" id="radio-1" type="radio" value="Pimienta" name="default-radio"
					class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
				  <label for="default-radio-1"
					class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pimienta</label>
				</div>
			  </th>
			</tr>
			<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
			  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
				<div class="">
				  <input onchange="pizza()" id="radio-2" type="radio" value="Tofu" name="default-radio"
					class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
				  <label for="default-radio-1"
					class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tofu</label>
				</div>
			  </th>
			</tr>
		  </tbody>`;
		  var radio1=document.getElementById("radio-1")
		  var radio2=document.getElementById("radio-2")
		  var repuestaingredientes=document.getElementById("repuestaingredientes")
		  repuestaingredientes.innerHTML=`SElecionastes una pizza Vegetariana con el ingrediente ${radio1.value} ${radio2.value}` 

			break;
		case 2:
			console.log("no vegetariana");
			break;
		default:
	}
}

function iprimirpizza() {
	var repuestaingredientes=document.getElementById("repuestaingredientes")
	repuestaingredientes.innerHTML=`SElecionastes una pizza Vegetariana con el ingrediente ${radio1.value} ${radio2.value}` 
}
