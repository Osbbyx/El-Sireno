 

       var datos = [];
		 datos[0] = "smit";
		 datos[1] = "oliver";
		 datos[2] = "oliver@gmail.com";
		 datos[3] = "ropitas";
		 datos[4] = "tito";
		 datos[5] = "oliver";
		 datos[6] = "tito@gmail.com";
		 datos[7] = "tito";
		 datos[8] = "a";
		datos[9] = "oliver";
		datos[10] = "a";
		datos[11] = "a";

function login(){
	var a = document.getElementById('Cuenta').value;
    var b = document.getElementById('passc').value;
	



	if(a == datos[0] || a == datos[4] || a == datos[8] && b == datos[3] || b == datos[7] || b == datos[11]){
		alert("Bienvenido "+datos[1]);
		window.location.replace("sireno/index.html");
	}else{
		alert("Contraseña o Cuenta incorrecta vuelva intentar");

	}
}
