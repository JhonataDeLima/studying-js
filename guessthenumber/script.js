// 1 selecionando os elementos
const input = document.querySelector('#guessInput');
const button = document.querySelector('#submitGuessButton');
const message = document.querySelector('#message');

// 2 gerando numero aleatorio
let number = Math.floor(Math.random()* 101);

// 3 criando função para fazer valiações e definir o rasultado
function check() {
    const userGuess = parseInt(input.value);
    
    // Validando se o que foi digitado é um número válido entre 1 e 100
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.innerHTML = 'Por favor, digite um número válido entre 1 e 100.';
    } else {
        // Verifica se o número digitado é igual ao número gerado
        if (userGuess === number) {
            message.innerHTML = `Parabéns! Você acertou o número aleatório: ${number}`;
        }
        // Verifica se o número digitado é menor que o número gerado
        else if (userGuess < number) {
            message.innerHTML = 'Você digitou um número muito baixo!';
        }
        // Verifica se o número digitado é maior que o número gerado
        else if (userGuess > number) {
            message.innerHTML = 'Você digitou um número muito alto!';
        }        
    }
    // Limpa o campo de texto do input
    input.value = '';
}

// 4 evento que dispara a função ao clicar no botao enviar
button.addEventListener('click', check);
