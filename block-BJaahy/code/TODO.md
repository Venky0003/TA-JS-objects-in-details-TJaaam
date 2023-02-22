# More about class

- Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.

```js
class Square {
    constructor(side){
        this.width = side;
        this.height = side;
    }
    description(){
        alert (`The square is ${this.width} x ${this.height}`)
    }
    calArea(){
        return this.width * this.height;
    }
    get area(){
        return this.width * this.height;
    }
    set area(value) {
    let sideLength = Math.sqrt(value);
    this.width = sideLength;
    this.height = sideLength;
  }
  static isEqual(square1,square2){
    return square1.width*square1.height === square2.width*square2.height;
  }
}
let square1 = new Square(12);
let square2 = new Square(6);

console.log(square1.area);
console.log(square2.area);

let areEqual = Square.isEqual(square1, square2);
console.log(areEqual);

```

- Add a method named `description` that will alert a message saying `The square is ${width} x ${height}`

- Create another method named `calcArea` that will return the area of the square.

- Create a getter method named `area` that will return area of the square.

- Create a setter method named `area` that will accept a value (the value will be the area of any square like 124). Based on the input value update the `width` and `height` of the square.(The width and the height will be updated to 12 (12 \* 12 = 124))


- Create a static method named `isEqual` which accepts two square instance (when you create a new object using the class). If the area of both square is same the method should return `true` or `false`. (Static methods are called directly on the class not in the instance)

- Create two instance of the `Square` class (ex: `let s1 = new Square(6);`)

- Check the `area` getter method on both square.

- Check the `isEqual` method and pass the two instance you created above.

## User Class

- Create a class named `User` that accepts `firstName` and `lastName` property
```js
class User {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        let nameArr = fullName.split(' ');
        let firstName = nameArr[0];
        let lastName = nameArr.slice(1).join(' ');

        if (fullName.length < 5) {
            alert('Full name should be more than 5 characters.');
            return;
        }

        this.firstName = firstName;
        this.lastName = lastName;
    }
    nameContains(text) {
        return this.fullName.toLowerCase().includes(text.toLowerCase());
    }
}

let user1 = new User("Arya","Stark");
let user2 = new User("Tyrion","Lannister");

console.group(user1.fullName);
console.log(user1.fullName);
console.log(user1.nameContains("Ar"));
console.log(user1.nameContains("Lan"));
console.groupEnd();

console.group(user2.fullName);
console.log(user2.fullName);
console.log(user2.nameContains("Ar"));
console.log(user2.nameContains("Lan"));
console.groupEnd();

let user3 = new User("John Snow");
console.log(user3.fullName); // "John Doe"

user3.fullName = "Jon"
console.log(user3);
```
- Create a getter method named `fullName` that will return the full name of the person.

- Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. (Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`)

- Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.

- Create two instance of the `User` class

- Check by using the `fullName` setter method with name bigger than 5 characters.

- Check by using the `fullName` setter method with name less than 5 characters.

- Check the `fullName` using getter

- Check the `nameContains` method
