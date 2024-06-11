## Objetivo:
Criar um jogo de adivinhação de números onde o usuário tenta adivinhar um número aleatório gerado pelo computador.

### Instruções:

Gere um número aleatório entre 1 e 100.
Valide a entrada do usuário para garantir que seja um número entre 1 e 100.
Compare a entrada do usuário com o número aleatório e exiba mensagens apropriadas.
Limpe o campo de entrada após cada tentativa.

### Resolução:

* 1 selecionei os elementos utilizano querySelector
* 2 utilizando Math.floor e Math.random garanti que fosse gerado um numero aleatorio entre 0 e 100
* 3 criei uma função responsavel por validar entradas, verificar resultados e limpar o campo de texto apos cada tentativa
* 4 criei um evento no botão enviar que após clicado dispara a função de check.