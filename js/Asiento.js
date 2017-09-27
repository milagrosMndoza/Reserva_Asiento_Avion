class pasajero {
	constructor(nom, ape, dni) {
		this.nombre = nom;
		this.apellido = ape;
		this.dni = dni
	}
}
class Aerolinea {
	constructor() {
		this.celdaPress = undefined;
		this.asientos = new Array(32);
		this.numAsiento = -1;
		//this.inicio()
	}
	inicio() {
		$('[data-toggle="tooltip"]').tooltip();
		/** llenar asientos */
		for (let i = 0; i < this.asientos.length; i++) {
			this.asientos[i] = undefined;
		}
		//console.log(this.asientos)
		$('td').click((evento) => this.redirect(event));
		$("#buscarDni").click(() => this.buscarDNI());
		$("#reservar").click(() => this.reservar());
		$("#listar").click(() => this.listar());
		$("#cancelar").click(() => this.cancelar());
	}
	redirect(event) {
		this.limpiar();
		$("#enlistando").empty();
		$("#mostrar").val(event.target.textContent);
		this.celdaPress = event.target;
		this.numAsiento = parseInt(event.target.textContent);
		if (this.celdaPress.style.backgroundColor == "red") {
			$("#nombre").val(this.asientos[this.numAsiento - 1].nombre);
			$("#apellido").val(this.asientos[this.numAsiento - 1].apellido);
			$("#dni").val(this.asientos[this.numAsiento - 1].dni);
			console.log(this.celdaPress.style.backgroundColor)
		}
	}
	buscarDNI() {
		let buscardni = $("#buscar").val();
		for (let i = 0; i < this.asientos.length; i++) {
			if (this.asientos[i] != undefined) {
				if (this.asientos[i].dni == buscardni) {
					$("#mostrar").val(i + 1);
					$("#nombre").val(this.asientos[i].nombre);
					$("#apellido").val(this.asientos[i].apellido);
					$("#dni").val(this.asientos[i].dni);
				}
			}
		}
	}
	reservar() {
		if ((this.numAsiento == -1) || $("#nombre").val() == "" || $("#apellido").val() == "" || $("#dni").val() == "") {
			swal('Oops...', 'Selecione primero un asiento y complete todos los campos!', 'error');
		} else {
			let nom = $("#nombre").val();
			let ape = $("#apellido").val();
			let doc = $("#dni").val();
			let pasajero = {
				nombre: nom,
				apellido: ape,
				dni: doc
			};
			swal({
				title: "Registrado!",
				text: "Asiento N° " + this.numAsiento + "\n" + "Pasajero: " + pasajero.nombre + " " + pasajero.apellido + "\n" + "DNI: " + pasajero.dni,
				type: "success"
			});
			this.asientos[this.numAsiento - 1] = pasajero;
			this.celdaPress.style.backgroundColor = "red";
			//this.numAsiento=-1;
			console.log(this.asientos)
		}
		this.limpiar();
	}
	listar() {
		let html1 = " ";
		html1 = "<h2>Lista de asientos reservados:</h2><table width=300; border=2>";
		for (let i = 0; i < this.asientos.length; i++) {
			if (this.asientos[i] != undefined) {
				html1 += `<tr>
						<td> <b> <h3>N° de Asiento:</h3></b></td><td><br><h3><b>${(i+1)}</b></h3><br></td></tr>
						<td> <b> Nombre: </b></td><td>${this.asientos[i].nombre}<br></td></tr>
						<td> <b> Apellidos: </b></td><td>${this.asientos[i].apellido}<br></td></tr>
						<td> <b> DNI: </b></td><td>${this.asientos[i].dni}<br></td></tr>`;
			}
		}
		html1 += "</table><br><br>";
		$("#enlistando").html(html1);
		this.limpiar();
	}
	cancelar() {
		console.log(this.numAsiento)
		if ((this.numAsiento == -1) || $("#nombre").val() == "" || $("#apellido").val() == "" || $("#dni").val() == "") {
			swal('Oops...', 'Seleccione primero el asiento que quiere cancelar!', 'error');
		} else if (this.celdaPress.style.backgroundColor == "red") {
			//asientos.splice((this.numAsiento - 1), 1);
			console.log(this.asientos)
			this.asientos[this.numAsiento - 1] = undefined;
			this.celdaPress.style.backgroundColor = "transparent";
			swal({
				title: "Cancelado!",
				text: "El asiento ha sido cancelado",
				type: "success"
			});
		}
		this.limpiar();
	}
	limpiar() {
		$("#mostrar").val("");
		$("#nombre").val("");
		$("#apellido").val("");
		$("#dni").val("");
		$("#buscarDni").val("");
	}
}
let avion = new Aerolinea();
avion.inicio();
