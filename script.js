const pMensagem = document.createElement("p"); 

const campoLogin = document.querySelector("#login");
const campoSenha = document.querySelector("#senha");
const buttonEnviar = document.querySelector("button");


function clearForm(){
    campoLogin.value = '';
    campoSenha.value = '';
}

buttonEnviar.addEventListener("click", function (event){
    event.preventDefault();
    if (campoLogin.value === ''){
        pMensagem.textContent= "CAMPO OBRIGATÓRIO";
        campoLogin.insertAdjacentElement("afterend", pMensagem);

        pMensagem.setAttribute("class", "erro");
        return false
    }
    if (campoSenha.value === ''){
        pMensagem.textContent = "CAMPO OBRIGATÓRIO";
        campoSenha.insertAdjacentElement("afterend", pMensagem);

        pMensagem.setAttribute("class", "erro");
        return false
    }
    pMensagem.classList.add('d-none');
    clearForm();
});

