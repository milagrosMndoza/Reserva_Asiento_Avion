class pasajero {
	constructor(nom, ape, dni) {
		this.nombre = nom;
		this.apellido = ape;
		this.dni = dni
	}
}
class Areolinea {
	constructor(juega) {
		this.celdaPress = undefined;
		this.asiento = new Array(32);
		this.numAsiento = -1;
	}
}
var celdaPress;
var asientos = new Array(32);
var numAsiento = -1;
for (var i = 0; i < asientos.length; i++) {
	asientos[i] = undefined;
}
/*var celdas = document.getElementsByTagName("td");*/
$('table tr td').click((event) => {
	/*document.getElementById("mostrar").innerHTML = (event.target.textContent);*/
	var muestra = $("#mostrar").append(parseInt(event.target.textContent)); //como imprimir en jquery
	console.log(muestra);
	celdaPress = $(event.target);
	numAsiento = event.target.textContent;
	/*	$.each(asientos, function (i, value) {});*/
	if (celdaPress.css("background", "red")) {
		console.log(celdaPress.css("background", "red"));
		/*document.getElementById("nombre").value = asientos[numAsiento - 1].nombre;*/
		$("#nombre").val(asientos[numAsiento - 1].nombre);
		/*document.getElementById("apellido").value = asientos[numAsiento - 1].apellido;*/
		$("#apellido").val() = asientos[numAsiento - 1].apellido;
		/*document.getElementById("dni").value = asientos[numAsiento - 1].dni;*/
		$("#dni").val() = asientos[numAsiento - 1].dni;
	}
});
$('#reservar').click(function () {
if (numAsiento == -1) {
	alert("Seleccione primero un asiento");
}
else {
	//var nom = document.getElementById("nombre").value;
	var nom = $('#nombre').val();
	//var ape = document.getElementById("apellido").value;
	var ape = $('#apellido').val();
	//var doc = document.getElementById("dni").value;
	var doc = $('#dni').val();
	/*var pasajero = {
	nombre: nom
	, apellido: ape
	, dni: doc
};*/
	/*celdaPress = $(event.target);*/
	alert("Asiento N° " + numAsiento + "\n" + "Pasajero: " + pasajero.nombre + " " + pasajero.apellido + "\n" + "Registrado correctamente!");
	asientos[numAsiento - 1] = pasajero;
	celdaPress.css(color);
	//numAsiento=-1;
	console.log(asientos)
}
limpiar();
});
});
/*
				

					function buscar() {
						var buscardni = document.getElementById("buscarDni").value;
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
					}*/
/*function listar() {
	var html = " ";
	var enlistando = document.getElementById("enlistando");
	html = "<h2>Lista de asientos reservados:</h2>" + "<table width=300; border=2>";
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
}

function cancelar() {
	console.log(numAsiento)
	if (numAsiento == -1) {
		alert("Seleccione primero el asiento a cancelar!")
	}
	else if (celdaPress.style.backgroundColor == "red") {
		//asientos.splice((numAsiento-1), 1);
		console.log(asientos)
		asientos[numAsiento - 1] = undefined;
		celdaPress.style.backgroundColor = "transparent";
		alert("El asiento ha sido cancelado");
	}
	limpiar();
}*/
function limpiar() {
	$("#mostrar").textContent = "";
	$("#nombre").val() = "";
	$("#apellido").val() = "";
	$("#dni").val() = "";
	$("#buscarDni").val() = "";
}