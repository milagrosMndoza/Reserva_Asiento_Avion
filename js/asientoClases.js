var celdaPress;
var asientos = new Array(32);
var numAsiento = -1;
for (var i = 0; i < asientos.length; i++) {
	asientos[i] = undefined;
}
var celdas = document.getElementsByTagName("td");
for (var i = 0; i < celdas.length; i++) {
	celdas[i].addEventListener("click", redirect, false);
	limpiar();
}

function redirect(event) {
	document.getElementById("mostrar").innerHTML = (event.target.textContent);
	celdaPress = event.target;
	numAsiento = event.target.textContent;
	if (celdaPress.style.backgroundColor == "red") {
		document.getElementById("nombre").value = asientos[numAsiento - 1].nombre;
		document.getElementById("apellido").value = asientos[numAsiento - 1].apellido;
		document.getElementById("dni").value = asientos[numAsiento - 1].dni;
		console.log(celdaPress.style.backgroundColor)
	}
}
$("#buscarDni").click(function () {
	var buscardni = document.getElementById("buscar").value;
	for (var i = 0; i < asientos.length; i++) {
		if (asientos[i] != undefined) {
			if (asientos[i].dni == buscardni) {
				document.getElementById("mostrar").innerHTML = i + 1;
				document.getElementById("nombre").value = asientos[i].nombre;
				document.getElementById("apellido").value = asientos[i].apellido;
				document.getElementById("dni").value = asientos[i].dni;
			}
		}
	}
});
$("#reservar").click(function () {
	if ((numAsiento == -1) || document.getElementById("nombre").value == "" || document.getElementById("apellido").value == "" || document.getElementById("dni").value == "") {
		swal('Oops...', 'Selecione primero un asiento y complete todos los campos!', 'error');
	} else {
		var nom = document.getElementById("nombre").value;
		var ape = document.getElementById("apellido").value;
		var doc = document.getElementById("dni").value;
		var pasajero = {
			nombre: nom,
			apellido: ape,
			dni: doc
		};
		swal({
			title: "Registrado!",
			text: "Asiento N° " + numAsiento + "\n" + "Pasajero: " + pasajero.nombre + " " + pasajero.apellido + "\n" + "DNI: " + pasajero.dni,
			type: "success"
		});
		asientos[numAsiento - 1] = pasajero;
		celdaPress.style.backgroundColor = "red";
		//numAsiento=-1;
		console.log(asientos)
	}
	limpiar();
});
$("#listar").click(function () {
	var html = " ";
	var enlistando = document.getElementById("enlistando");
	html = "<h2>Lista de asientos reservados:</h2>" + "<table width=300; border=2 ; class=`table table-hover lista`>";
	for (var i = 0; i < asientos.length; i++) {
		if (asientos[i] != undefined) {
			html += "<tr>";
			html += "<td> <b> <h3>N° de Asiento:</h3></b></td><td>" + "<br><h3><b>" + (i + 1) + "</b></h3>" + "<br></td></tr>";
			html += "<td> <b> Nombre: </b></td><td>" + asientos[i].nombre + "<br></td></tr>";
			html += "<td> <b> Apellidos: </b></td><td>" + asientos[i].apellido + "<br></td></tr>";
			html += "<td> <b> DNI: </b></td><td>" + asientos[i].dni + "<br></td></tr>";
		}
	}
	enlistando.innerHTML = html;
	html += "</table><br><br>"
	limpiar();
});
$("#cancelar").click(function () {
	console.log(numAsiento)
	if ((numAsiento == -1) || document.getElementById("nombre").value == "" || document.getElementById("apellido").value == "" || document.getElementById("dni").value == "") {
		swal('Oops...', 'Seleccione primero el asiento que quiere cancelar!', 'error');
	} else if (celdaPress.style.backgroundColor == "red") {
		//asientos.splice((numAsiento - 1), 1);
		console.log(asientos)
		asientos[numAsiento - 1] = undefined;
		celdaPress.style.backgroundColor = "transparent";
		swal({
			title: "Cancelado!",
			text: "El asiento ha sido cancelado",
			type: "success"
		});
	}
	limpiar();
});

function limpiar() {
	document.getElementById("mostrar").textContent = "";
	document.getElementById("nombre").value = "";
	document.getElementById("apellido").value = "";
	document.getElementById("dni").value = "";
	document.getElementById("buscarDni").value = "";
}
