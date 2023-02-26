## Find the output

For the give code below write the output/error along with the reason!

```js
let user = {
  username: 'John',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};

let user2 = {
  username: 'Arya',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};
let user3 = {
  username: 'Bran',
};

function MainUser() {
  this.username = 'Tyrion';
  this.sayHello = function sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  };
}

let userSayHello = user.sayHello;

console.log(user.sayHello()); // output  Hello John as we call sayHello function in user
console.log(user2.sayHello()); // output Hello Arya as we call sayHello function in user2
console.log(user.sayHello.call(user2)); // output Hello Arya as we use explicit binding by using call
console.log(user.sayHello.call(user2, 'Hey')); // output Hey Arya using the explicit call it will bound parameters we pass
console.log(user.sayHello.apply(user2, ['Hey'])); // output Hey Arya as we use the explicit apply method
console.log(typeof user.sayHello.bind(user2)); // output  function as we use explicit bind method and its typeof it
console.log(user.sayHello.bind(user2)()); // output Hello Arya as we use  explicit bind thge two objects will bound together
console.log(userSayHello()); // output / refernce error as there is no function defined as userSayHello
console.log(typeof userSayHello.bind(user2)); // output Hello undefined as the typeof is function but userSayHello is not object
console.log(userSayHello.bind(user2)()); // output Hello Arya using the bind method
console.log(user3.sayHello()); // output user3.SayHello is not a function
console.log(userSayHello.apply(user3)); // output Hello Bran apply method used to call the specified function with `this` and arguments passed in the array
console.log(userSayHello.call(user3)); // output Hello Bran call method used to call specified function with `this` value and userSayHello as reference
console.log(typeof new MainUser()); // output object as `new` keyword is used it will create a new object
console.log(typeof new MainUser()); // output object as `new` keyword is used it will create a new object
console.log(new MainUser().sayHello()); // output Hello Tyrion  MainUser is contructor function  with value of username and the sayHello logs value 
console.log(new MainUser().sayHello.call(user2)); // output Hello Arya using the call it invokes the sayHello funcvtion
console.log(new MainUser().sayHello.call(user)); // output Hello John using call it invokes the sayHello and bounds the object passed as argument user
console.log(
  new MainUser().sayHello.apply(user, ['Welcome!'])
); // output Welcome! John using apply it will bound the argu,ments passed in array to the this object
```
