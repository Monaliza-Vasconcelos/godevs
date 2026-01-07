function formulario(){
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    if (nome.trim() === "" || email.trim() === ""){
        alert("Espaço em branco!")
        return false;
    }else{
        return true;
    }  
}



