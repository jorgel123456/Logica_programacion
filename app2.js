//Variables
let numeroLimite=parseInt(prompt("Eliga el numero limite 100 o 1000"));
let numeroSecreto = Math.floor(Math.random()*numeroLimite)+1;
let numeroUsuario = 0;
let contador = 0;
let maximoIntentos = 10;
while(numeroSecreto != numeroUsuario){
        numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroLimite} por favor:`));

        console.log(numeroUsuario);
        /*
        Este código realiza
        la comparación
        */
        if (numeroUsuario == numeroSecreto) {
            //Acertamos, fue verdadera la condición
            contador++;
            alert(`Acertaste, el número es: ${numeroUsuario} y realizaste ${contador} ${contador ==1 ? "vez" : "veces"} para encontrarlo.`);

        } else {
            if(numeroUsuario<numeroSecreto){
                alert('El numero a adivinar es mayor,al numero ingresado');
            }
            else{
                alert("El numero adivinar es menor, al numero ingresado")
            }
            contador++;
            if(contador>=maximoIntentos){
                alert(`se te acabaron los intentos, numero de intentos ${maximoIntentos}`);
                break;
            }
        }

    }