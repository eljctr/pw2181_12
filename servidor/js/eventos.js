var inicioApp= function(){
	var Aceptar = function(){
		var usuario=$("#txtUsuario").val();
		var clave=$("#txtClave").val();
		var parametros="opc=validaentrada"+
		"&usuario="+usuario+
		"$clave="+clave+
		"&aleatorio="+Math.random();

		$.ajax([{
			cache:false,
			type: "POST"
			dataType: "json",
			url: "php/validaentrada.php",
			data: parametros,
			success: function(response){
				if (response.respuesta==true) {

					$("#secInicio").hide("slow");
					$("#secInicio").show("slow");
				}else{
					alert("Usuario o clave incorrecta");
				}

			},
			error: function(xhr,ajaxOptions,thrownError){
				console.log(xhr);

			}
		});

	}
	$("#btnAceptar").on("click",Aceptar);
}
$(document).ready(inicioApp);