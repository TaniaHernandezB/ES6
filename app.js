// 1. Create a new "Character" Class that has a name, type, age, specialSkill, healthPoints, and status(boolean) property.
class Character{
    constructor(name, type, age, specialSkill, healthPoints, status){
        this.name = name;
        this.type = type;
        this.age = age;
        this.specialSkill = specialSkill;
        this.healthPoints = healthPoints;
        this.status = status;
    }

// 2. Create a method for the character class called attack that returns a number (damage) between 20 and 35.
    attack(){
        var damage = Math.floor(Math.random() * 15) + 20;
        return damage
    }

// 3. Create a method for the character class called introduction that returns the character's name, type, and age.
    introduction(){
        console.log(`Hello ${this.name}!
        You are a ${this.type} type character
        and are ${this.age} years old.`)
    }
}
// 4. Now create a boss class that extends the character class and gives it an additional property of level, and attack points.
class Boss extends Character{
    constructor(level,attackPoints,name, type, age, specialSkill, healthPoints, status){
        super(name, type, age, specialSkill, healthPoints, status);
        this.level = level;
        this.attackPoints = attackPoints;
    }

// 5. add a method to the boss class that adds 5 points to base attack points that could be called after each attack from the boss
    afterAttack(){
        this.attackPoints += 5
    }
}
// 6. Create a new boss and new character.
const userBoss = new Boss("Bossy", "fire", 75, "flames", 100, true, 3, 15);
const userChar = new Character("Whale", "water", 20, "spraying", 100, true);


// 7. set up a function that runs a battle sequence between your boss and your character.
function battle(userBoss, userChar){
    class Boss{}
    class Character{}
    return userBoss && userChar
}

battle(userBoss, userChar)
