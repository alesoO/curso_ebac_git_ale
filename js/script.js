const form = document.getElementById("formulario_nums");


form.addEventListener("submit", function (e) {
    e.preventDefault();

    let A = document.getElementById("campo_n1").value;
    let B = document.getElementById("campo_n2").value;
    let sucesso = document.getElementById("alerta_certo");
    sucesso.style.display = "none";
    let erro = document.getElementById("alerta_errado");
    erro.style.display = 'none';
    let igual = document.getElementById("alerta_igual");
    igual.style.display = 'none';
    let vazio = document.getElementById("alerta_vazio");
    vazio.style.display = 'none';

    if (A > B) {
        erro.style.display = 'block'
    } else if(B > A){
        sucesso.style.display = "block"
    }else if (A == "" && B == ""){
        vazio.style.display = "block"
    }else{
        igual.style.display = "block"
    }

});
