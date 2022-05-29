function homePage(){

    //encontrando a div com id "divMensagem" na arvore dom
    let paraMensagem = document.querySelector("#home");
    paraMensagem.innerHTML = 'Seja bem vindo(a) ';

    /* document.getElementById("home").innerHTML = `Seja bem vindo(a)`; */
    return false;
}