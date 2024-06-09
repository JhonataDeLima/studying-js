## Objetivo

Criar uma lista de tarefas simples que adicione uma nova tarefa ao final da lista.

### Requisitos:

- Toda manipulação deve ser realizada no script.js
- A task só deve ser adicionada após apertar e soltar a tecla 'Enter'
- A task deve ser adicionada ao final da lista
- A task não deve ser adicionada se o input estiver vazio
- Após apertar 'Enter' o campo de texto do input dever ser limpo

### Resolução:

utilizando querySelector recebi os elementos 'ul' e 'input'<br>
criei uma função 'handleKeyUp' que passa Event por parametro e uma condição que verifica se a tecla 'Enter' foi apertada e se o input está preenchido<br>
após a verificação a função cria um novo elemento 'li' que receber oque foi digitado no 'input' e adiciona ao final da lista 'ul'<br>
por fim após adicionar o novo elemento a lista, limpa o campo de texto do 'input'<br>
toda a manipulação é realizada por um EventListener no 'input' que passa os parametros 'keyup' e a função 'handleKeyUp' para manipular o DOM




