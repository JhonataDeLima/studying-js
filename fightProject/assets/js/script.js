let char = new Knight('Galego');
let monster = new LitleMonster ();

const lutar = new Stage (
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')

);

lutar.start();