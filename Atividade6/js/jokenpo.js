
function Jokenpo() {
    var userChoice = document.getElementById("escolha");

    var computerChoice = function(){
        var numero = Math.random().toFixed(2);

        if(numero < 0.33){
            return "Pedra";
        }else if(numero < 0.66){
            return "Papel";
        }else{
            return "Tesoura";
        }
    }();
    alert("Escolha do computador: " + computerChoice.toLowerCase());

    computerChoice = computerChoice.toLowerCase();
    alert(function(){
        if((userChoice.value == "papel" && computerChoice == "pedra") ||
            (userChoice.value == "tesoura" && computerChoice == "papel")||   
            (userChoice.value == "pedra" && computerChoice == "tesoura")){
            return "Vitoria";
    }else if((userChoice.value == "pedra" && computerChoice == "papel")||
        (userChoice.value == "papel" && computerChoice == "tesoura")||
        (userChoice.value == "tesoura" && computerChoice == "pedra")){
        return "Derrota";
    }else{
        return "Empate";
    }
}());

}