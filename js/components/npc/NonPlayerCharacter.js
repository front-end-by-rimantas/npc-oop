class NonPlayerCharacter {
    constructor( name, type ) {
        this.availableTypes = ['mage', 'ranger', 'warrior'];
        this.name = name;
        this.type = this.availableTypes.includes(type) ? type : null;
    }

    attack() {
        return console.log(`${this.name}(${this.type}) attacked you with 6 damage!`);
    }
}

export default NonPlayerCharacter;