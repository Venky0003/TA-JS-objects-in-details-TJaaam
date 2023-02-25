function Animals(location, numberOfLegs) {
  this.location = location;
  this.numberOfLegs = numberOfLegs;
}

Animals.prototype = {
  eat() {
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation(newLocation) {
    this.location = newLocation;
    return this.location;
  },
  summary() {
    return `I live in ${this.location} and I have ${this.numberOfLegs} legs`;
  },
};

let animal = new Animals("Forest", 4);

function AnimalDog(location, numberOfLegs, name, color) {
  Animals.apply(this, [location, numberOfLegs]);
  this.name = name;
  this.color = color;
}

AnimalDog.prototype.bark = function () {
  console.log(`I am ${this.name} and I can bark 🐶`);
};

AnimalDog.prototype.changeName = function (newName) {
  this.name = newName;
  return this.name;
};

AnimalDog.prototype.changeColor = function (newColor) {
  this.color = newColor;
  return this.color;
};

AnimalDog.prototype.summary = function () {
  return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
};

Object.setPrototypeOf(AnimalDog.prototype, Animals.prototype);
let dog = new AnimalDog("mumbai", 4, "tommy", "brown");

function AnimalCat(location, numberOfLegs, name, color) {
  Animals.apply(this, [location, numberOfLegs]);
  this.name = name;
  this.color = color;
}

AnimalCat.prototype.meow = function () {
  alert(`I am ${this.name} and I can do mewo meow 😹`);
};
AnimalCat.prototype.changeName = function (newName) {
  this.name = newName;
  return this.name;
};
AnimalCat.prototype.changeColorOfEyes = function (newColor) {
  this.color = newColor;
  return this.color;
};
AnimalCat.prototype.summary = function () {
  return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
};

Object.setPrototypeOf(AnimalCat.prototype, Animals.prototype);
let cat = new AnimalCat("pune", 4, "orc", "blue");

console.group(animal.location);
console.log(animal.location);
console.log(animal.numberOfLegs);
console.log(animal.eat());
console.log(animal.changeLocation("Delhi"));
console.log(animal.summary());
console.groupEnd();

console.group(dog.location);
console.log(dog.location);
console.log(dog.numberOfLegs);
console.log(dog.eat());
console.log(dog.changeLocation("Delhi"));
console.log(dog.changeColor("white"));
console.log(dog.summary());
console.log(dog.changeName("Jerry"));
console.groupEnd();

console.group(cat.location);
console.log(cat.location);
console.log(cat.numberOfLegs);
console.log(cat.eat());
console.log(cat.changeLocation("Delhi"));
console.log(cat.changeColorOfEyes("brown"));
console.log(cat.summary());
console.log(cat.changeName("cat"));
console.groupEnd();


class Animal {
    constructor(location, numberOfLegs) {
      this.location = location;
      this.numberOfLegs = numberOfLegs;
    }
    eat() {
      console.log(`I live in ${this.location} and I can eat`);
    }
    changeLocation(newLocation) {
      this.location = newLocation;
      return this.location;
    }
    summary() {
      return `I live in ${this.location} and I have ${this.numberOfLegs} legs`;
    }
}

let animals = new Animal("Bengal",4);

console.group(animals.location);
console.log(animals.location);
console.log(animals.numberOfLegs);
console.log(animals.eat());
console.log(animals.changeLocation("Delhi"));
console.log(animals.summary());
console.groupEnd();

class AnimalDogPet extends Animal {
  constructor(location, numberOfLegs, name, color) {
    super(location,numberOfLegs);
    this.name = name;
    this.color = color;
  }
  bark() {
    console.log(`I am ${this.name} and I can bark 🐶`);
  }
  changeName(newName) {
    this.name = newName;
    return this.name;
  }
  changeColor(newColor) {
    this.color = newColor;
    return this.color;
  }
  summary () {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  }
  
}

let petDog = new AnimalDogPet("house",4,"rocho","lightbrown")

console.group(petDog.name);
console.log(petDog.location);
console.log(petDog.numberOfLegs);
console.log(petDog.eat());
console.log(petDog.changeLocation("Delhi"));
console.log(petDog.changeColor("white"));
console.log(petDog.summary());
console.log(petDog.changeName("Jerry"));
console.groupEnd();



class AnimalCatPet extends Animal {
  constructor(location, numberOfLegs, name, color) {
 super(location, numberOfLegs);
  this.name = name;
  this.color = color;
}
 meow() {
  alert(`I am ${this.name} and I can do mewo meow 😹`);
}
 changeName(newName) {
  this.name = newName;
  return this.name;
}
 changeColorOfEyes(newColor) {
  this.color = newColor;
  return this.color;
}
 summary = function () {
  return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
}
}

let petCat = new AnimalCatPet("kolkatta", 4, "roco", "white");

console.group(petCat.name);
console.log(petCat.location);
console.log(petCat.numberOfLegs);
console.log(petCat.eat());
console.log(petCat.changeLocation("Delhi"));
console.log(petCat.changeColorOfEyes("brown"));
console.log(petCat.summary());
console.log(petCat.changeName("cat"));
console.groupEnd();