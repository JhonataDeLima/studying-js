let char = new Knight('Galego');
let monster = new LitleMonster ();
let log = new Log(document.querySelector('.log'))

const lutar = new Stage (
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log

);

lutar.start();