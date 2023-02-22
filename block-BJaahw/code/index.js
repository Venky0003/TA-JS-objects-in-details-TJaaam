// 1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.

function createUser(name, age) {
  let user = {};
  user.name = name;
  user.age = age;
  user.sayHello = function () {
    alert(`Welcome ${this.name}`);
  };
  return user;
}
let user1 = createUser("Arya", 21);

// 2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.
console.group(user1.name);
console.log(user1.name);
console.log(user1.age);
console.log(user1.sayHello());
console.groupEnd();

// 3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.

let personOne = createUser("Jon",29);
let personTwo = createUser("Robb",24);

// 4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())
let userMethod = {
  sayHello() {
    alert(`Welcome ${this.name}`);
  },
};
function createUsers(name, age) {
  let user = Object.create(userMethod);
  user.name = name;
  user.age = age;

  return user;
}
let user2 = createUsers("Robb", 21);
// 5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.

function createUsersFunc(name, age) {
    let user = Object.create(createUsersFunc.prototype);
    user.name = name;
    user.age = age;
  
    return user;
  }
  createUsersFunc.prototype = {
    sayHello() {
        alert(`Welcome ${this.name}`);
      },
  }

  let user3 = createUsersFunc("Ryan", 35);

// 6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.

function CreateUsersFunc(name, age) {
    this.name = name;
    this.age = age;
  }
  CreateUsersFunc.prototype = {
    sayHello() {
        alert(`Welcome ${this.name}`);
      },
  };

  personOne = new CreateUsersFunc("Sansa",29);
  personTwo = new CreateUsersFunc("Tyrion",39);
// 7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.

console.group(personOne.name);
console.log(personOne.name);
console.log(personOne.age);
console.log(personOne.sayHello());
console.groupEnd()

console.group(personTwo.name);
console.log(personTwo.name);
console.log(personTwo.age);
console.log(personTwo.sayHello());
console.groupEnd()

// 8. Convert the `createUser` function into `User` class.

class User {
    constructor (name,age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        alert (`Welcome ${this.name}`)
    }
}

let user4 = new User("Dev",25);


// 9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`

personOne = new User("Raj",29);
personTwo = new User("Tim",39);

// 10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.

console.group(personOne.name);
console.log(personOne.name);
console.log(personOne.age);
console.log(personOne.sayHello());
console.groupEnd()

console.group(personTwo.name);
console.log(personTwo.name);
console.log(personTwo.age);
console.log(personTwo.sayHello());
console.groupEnd()