//paso 1.login donde pide nombre de usuario y contrasena y cuando entre a la pagina presente el nombre del usuario se 
//mostrara encima del primer icono dentro del sistema de facturacion.
		//paso 2.fecha,rnc,res dgii (aqui va la fecha en la cual se creo la empresa 3 de abril 2018),nif.suplidor.debajo de
		// este vael codigo del producto,descripcion,cant,itbis,costo,total. debajo de esto va valor bruto, descuento, impuesto,
		// valor neto debajo a la izquierda tendra 6 botones los cuales  permitiran: guardar,eliminar,anular,imprimir,salir. 
		//esto debe sumar todas la cantiddes y mostrar el valor neto con los impuestos aplicados.//  


        alert("Es tu primera vez aqui!! comencemos creando la cuenta de administrador")

       var datos = [];
		 datos[0] = prompt("Cuenta");
		 datos[1] = prompt("Nombre");
		 datos[2] = prompt("Email");
		 datos[3] = prompt("Contraseña");
		

function login(){
	var a = document.getElementById('Cuenta').value;
    var b = document.getElementById('passc').value;
	



	if(a == datos[0] && b == datos[3]){
		alert("Bienvenido "+datos[1]);
		window.location.replace("sireno/index.html");
	}else{
		alert("Contraseña o Cuenta incorrecta vuelva intentar");

	}
}

		
	
		
	