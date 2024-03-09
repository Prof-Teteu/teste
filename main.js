let nomeUsuario = ""
let elemento = document.querySelector("#nome-usuario");

while(nomeUsuario == ""){
    nomeUsuario = prompt("Qual o seu nome?")
}

if(nomeUsuario == null){
    elemento.textContent="Aluro :)";
}else{
   elemento.textContent = nomeUsuario; 
}
