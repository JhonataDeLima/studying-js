// classe que define atributos dos personagens
class Character{

    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;


    constructor(name){
        this.name = name;
    }
    
    get life() {
        return this._life;
    }

    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }
}


// classe que define os atributos de um guerreiro
class Knight extends Character {
    constructor(name){
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

// classe que define os atributos de um mago
class Sorcerer extends Character {
    constructor(name){
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 4;
        this.maxLife = this.life;
    }
}

// classes que definem atributos dos monstros
class LitleMonster extends Character {
    constructor(){
        super('Litle Monster');
        this.life = 40;
        this.attack = 4;
        this.defense = 5;
        this.maxLife = this.life;
    }
}

class BigMonster extends Character {
    constructor(){
        super('Big Monster');
        this.life = 120;
        this.attack = 11;
        this.defense = 7
        this.maxLife = this.life;
    }
}

// MONTANDO CENARIO DA LUTA
class Stage {
    // Recebendo lutadores e seus respectivos elementos DOM
    constructor(fighter1, fighter2, fighter1El, fighter2El){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
    }

    start() {
        //atualiza dados do combate
        this.update();

        //evento e clique para atacar o inimigo
        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));

    }

    update(){
        //fighter1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life} HP`;
        //calculando % de vida do personagem
        let f1pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        //atualizar a barra de vida do fighter1
        this.fighter1El.querySelector('.bar').style.width = `${f1pct}%`

        //fighter2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life} HP`;
        //calculando % de vida do fighter2
        let f2pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        //atualizano barra de vida do fighter2
        this.fighter2El.querySelector('.bar').style.width = `${f2pct}%`;
    }

    doAttack(attacking, attacked) {
        console.log(`${attacking.name} atacou ${attacked.name}`);
        
    }
}