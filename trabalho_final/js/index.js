window.onload = function inicio(){
    //footer copyright
    var d = new Date;
    if( d.getFullYear() == 2017){ //Here are the year in what you company start
        document.getElementById("copy").innerHTML = "© 2017 - TION SOFTWARES.Inc - Todos os direitos reservados.";//copyright text
    }else{
        document.getElementById("copy").innerHTML = "© 2017 - " + d.getFullYear() + " - TION SOFTWARES.Inc - Todos os direitos reservados.";//copyright text
    }
}
//navbar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function valida(){
    alert('Parabéns agora você vai receber novidades do mundo do software no seu e-mail');
}
function enviar(){
    alert('E-mail enviado');
    x = document.getElementById("pedido");
    x.reset();
}