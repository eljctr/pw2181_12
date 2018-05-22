<?php
include 'conexiones.php';
function valida(){
	$usuario=$_POST["usuario"];
$clave  =md5($_POST["clave"])
	//conectarnos al servidor e BD.

$con=connecta();
$consulta="select * from usuarios where usuario=  '".$usuario."' and clave= '".$clave."' limit 1";
$resConsulta=mysqli_query($con,$consulta);
if (mysqli_num_row($resConsulta)>0) {
	$respuesta=true;
}

$salidaJSON = array('' => $respuesta );
print json_encode($salidaJSON);

}
    $opc=$_POST["opc"];
    switch ($opc) {
    	case 'validaentrada':
    	valida();
    		# code...
    		break;
    	
    	default:
    		# code...
    		break;
    }

?>