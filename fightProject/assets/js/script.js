// criando objetos personagens (opções: Knight ou Sorcerer)
let char = new Knight('Galego');
// opções de monstros (LitleMonster ou BigMonster)
let monster = new LitleMonster ();

// criando objeto de log 
let log = new Log(document.querySelector('.log'))

// passando objetos e elementos 
const lutar = new Stage (
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log

);

// iniciando
lutar.start();