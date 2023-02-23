
let animalMethods = {
    eat(){
        console.log(`I live in ${this.location} and I can eat`)
    },
    changeLocation(newLocation){
        this.location = newLocation;
        return this.location;
    },
    summary(){
        return `I live in ${this.location} and I have ${this.numberOfLegs} legs`;
    },
}

function animal (location, numberOfLegs){
    let animals = Object.create(animalMethods);
    animals.location = location;
    animals.numberOfLegs = numberOfLegs;

    return animals;
}

let animalDogMethods = {
    bark(){
        alert (`I am ${this.name} and I can bark 🐶`)
    },
    changeName(newName){
        this.name = newName;
        return this.name;
    },
    changeColor(newColor){
        this.color = newColor;
        return this.color;
    },
    summary(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}

Object.setPrototypeOf(animalDogMethods, animalMethods)

function animalDog (location, numberOfLegs, name, color){
    let animals = Object.create(animalDogMethods);
    animals.location = location;
    animals.numberOfLegs = numberOfLegs;
    animals.name = name;
    animals.color = color;

    return animals;
}

let animalCatMethods = {
    meow(){
        alert (`I am ${this.name} and I can do mewo meow 😹`
        )
    },
    changeName(newName){
        this.name = newName;
        return this.name;
    },
    changeColorOfEyes(newColor){
        this.color = newColor;
        return this.color;
    },
    summary() {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }
}

Object.setPrototypeOf(animalCatMethods, animalMethods)

function animalCat (location, numberOfLegs, name, color){
    let animals = Object.create(animalCatMethods);
    animals.location = location;
    animals.numberOfLegs = numberOfLegs;
    animals.name = name;
    animals.color = color;
    
    return animals;
}

let animals = animal("Forest",4);

let dog = animalDog("mumbai",4,"tommy","brown");

let cat = animalCat("pune",4,"orc","blue");

console.group(animals.location);
console.log(animals.location);
console.log(animals.numberOfLegs);
console.log(animals.eat());
console.log(animals.changeLocation("Delhi"));
console.log(animals.summary());
console.groupEnd();


console.group(dog.location);
console.log(dog.location);
console.log(dog.numberOfLegs);
console.log(dog.eat());
console.log(dog.changeLocation("Delhi"));
console.log(dog.changeColor("white"))
console.log(dog.summary());
console.log(dog.changeName("Jerry"));
console.groupEnd();

console.group(cat.location);
console.log(cat.location);
console.log(cat.numberOfLegs);
console.log(cat.eat());
console.log(cat.changeLocation("Delhi"));
console.log(cat.changeColorOfEyes("brown"))
console.log(cat.summary());
console.log(cat.changeName("cat"));
console.groupEnd();