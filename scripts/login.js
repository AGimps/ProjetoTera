function loginUsuario(){
    var usuario = document.getElementById("txtLogin").value;
    return usuario;

}

function funcConfirmar() {
  if (confirm("Deseja confirmar o cadastro?") == true) {
    window.alert("Cadastro completo");
    return true;
} else {
  window.alert("Cadastro cancelado");
    return false;
}
}

  /*   let divMensagem = document.querySelector("#divMensagem");
  
    //alterando o atributo "style" para exibir este elemento
    divMensagem.style.display = '';
    
    let tituloMensagem = document.querySelector("#tituloMensagem");
    tituloMensagem.innerHTML = 'Seja bem vindo(a) ' + usuario; */


/* document.addEventListener("DOMContentLoaded", function(){
  
    let btnEnviar = document.querySelector("#btnLogar");
    btnEnviar.addEventListener("click", function(){
      loginUsuario();
    }
    )
}
) */