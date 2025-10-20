let bouton = document.getElementById("btn-start");
let message = document.getElementById("message");
bouton.addEventListener("click", function(){
    let nom = prompt("quel est votre prenom ?");
    if(nom){
        message.innerText = "Bonjour ,"+ nom;
    }
    else{
        alert("aucun nom saisi !");
    }
});