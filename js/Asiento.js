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
		this.asientos = new Array(32);
		this.numAsiento = -1;
	}
	dibuja() {
		for (var i = 0; i < this.asientos.length; i++) {
			this.asientos[i] = undefined;
		}
		var celdas = document.getElementsByTagName("td");
		for (var i = 0; i < celdas.length; i++) {
			celdas[i].addEventListener("click", this.redirect, false);
			this.limpiar();
		}
	}
	redirect(event) {
		$("#mostrar").append(parseInt(event.target.textContent)); 
		this.celdaPress = event.target;
		this.numAsiento = event.target.textContent;
		if (this.celdaPress.style.backgroundColor == "red") {
			document.getElementById("nombre").value = this.asientos[this.numAsiento - 1].nombre;
			document.getElementById("apellido").value = this.asientos[this.numAsiento - 1].apellido;
			document.getElementById("dni").value = this.asientos[this.numAsiento - 1].dni;
			console.log(this.celdaPress.style.backgroundColor)
		}
	}
	buscar() {
		var buscardni = document.getElementById("buscarDni").value;
		for (var i = 0; i < this.asientos.length; i++) {
			if (this.asientos[i] != undefined) {
				if (this.asientos[i].dni == buscardni) {
					document.getElementById("mostrar").innerHTML = i + 1;
					document.getElementById("nombre").value = this.asientos[i].nombre;
					document.getElementById("apellido").value = this.asientos[i].apellido;
					document.getElementById("dni").value = this.asientos[i].dni;
				}
			}
		}
	}
	reservar() {
		if (this.numAsiento == -1) {
			alert("Seleccione primero un asiento");
		} else {
			var nom = document.getElementById("nombre").value;
			var ape = document.getElementById("apellido").value;
			var doc = document.getElementById("dni").value;
			var pasajero = {
				nombre: nom,
				apellido: ape,
				dni: doc
			};
			alert("Asiento N° " + this.numAsiento + "\n" + "Pasajero: " + pasajero.nombre + " " + pasajero.apellido + "\n" + "Registrado correctamente!");
			this.asientos[numAsiento - 1] = pasajero;
			this.celdaPress.style.backgroundColor = "red";
			//numAsiento=-1;
			console.log(this.asientos)
		}
		this.limpiar();
	}
	listar() {
		var html = " ";
		var enlistando = document.getElementById("enlistando");
		html = "<h2>Lista de asientos reservados:</h2>" + "<table width=300; border=2>";
		for (var i = 0; i < this.asientos.length; i++) {
			if (this.asientos[i] != undefined) {
				html += "<tr>";
				html += "<td> <b> <h3>N° de Asiento:</h3></b></td><td>" + "<br><h3><b>" + (i + 1) + "</b></h3>" + "<br></td></tr>";
				html += "<td> <b> Nombre: </b></td><td>" + this.asientos[i].nombre + "<br></td></tr>";
				html += "<td> <b> Apellidos: </b></td><td>" + this.asientos[i].apellido + "<br></td></tr>";
				html += "<td> <b> DNI: </b></td><td>" + this.asientos[i].dni + "<br></td></tr>";
			}
		}
		enlistando.innerHTML = html;
		html += "</table><br><br>"
		this.limpiar();
	}
	cancelar() {
		console.log(this.numAsiento)
		if (this.numAsiento == -1) {
			alert("Seleccione primero el asiento a cancelar!")
		} else if (this.celdaPress.style.backgroundColor == "red") {
			//asientos.splice((numAsiento-1), 1);
			console.log(this.asientos)
			this.asientos[this.numAsiento - 1] = undefined;
			this.celdaPress.style.backgroundColor = "transparent";
			alert("El asiento ha sido cancelado");
		}
		this.limpiar();
	}
	limpiar() {
		document.getElementById("mostrar").textContent = "";
		document.getElementById("nombre").value = "";
		document.getElementById("apellido").value = "";
		document.getElementById("dni").value = "";
		document.getElementById("buscarDni").value = "";
	}
}
let ejecuta = new Areolinea();
ejecuta.redirect();
ejecuta.dibuja();
ejecuta.buscar();
ejecuta.listar();
ejecuta.reservar();
ejecuta.cancelar();
ejecuta.limpiar();


