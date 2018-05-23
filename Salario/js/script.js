function calcula(n1,n2){ 
	var salariofamilia = n2 * 41.37;
   	document.getElementById("salariobruto").value = parseInt(n1) + salariofamilia;
   	document.getElementById("descontos").value = parseInt(n1 * 0.08);
   	document.getElementById("salarioliquido").value = (parseInt(n1) + salariofamilia) - (parseInt(n1 * 0.08));
 }