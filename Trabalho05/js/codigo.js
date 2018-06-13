function fcompra(vinc){
	if(vinc == 1) {
        document.getElementById('total').value = 50;
	}
	if(vinc == 2) {
        document.getElementById('total').value = 100;
	}
	if(vinc == 3) {
        document.getElementById('total').value = 150;
	}
}
function alerta(){
	alert('Inscrição Confirmada');
	document.getElementById("formulario").reset();
}