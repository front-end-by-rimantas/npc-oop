import NonPlayerCharacter from '../npc/NonPlayerCharacter.js';

class Mage extends NonPlayerCharacter {
    constructor( name ) {
        super( name, 'mage' );
        this.mana = 100;
    }

    attack() {
        console.log(`${this.name}(${this.type}) attacked you with 6 damage!`);
        this.mana -= 20;
        console.log(`${this.type} is left with ${this.mana} mana.`);
        
        return;
    }

    refillMana( amount ) {
        this.mana += amount;
    }
}

export default Mage;