// Elementos
const input = document.querySelector('input');
const lista = document.querySelector('ul');

// Função
function handleKeyUp(event) {  
    // Condição     
    if(event.key === 'Enter' && input.value != ''){
        // Adicionar elemento LI na lista
        let newLi = document.createElement("li");
        newLi.innerText = input.value;    
        lista.append(newLi);
        
        // Limpar o campo de texto
        input.value = null;    
    }
}

// Evento
input.addEventListener('keyup', handleKeyUp);