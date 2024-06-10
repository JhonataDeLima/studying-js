// 1. Selecione o elemento que exibe o contador.
const counter = document.querySelector('#counter');

// 2. Selecione os botões de aumentar e diminuir.
const increase = document.querySelector('#increase');
const decrease = document.querySelector('#decrease');

// 3. Adicione eventos de clique aos botões para incrementar ou decrementar o valor do contador.
function add(e){
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
}

function remover(e){
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
}

// 4. Atualize o texto do elemento do contador conforme necessário.
increase.addEventListener('click', add);
decrease.addEventListener('click', remover);

