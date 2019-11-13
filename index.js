/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/






/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name; 
  this.age = age;
  this.stomach = [];
}
Person.prototype.eat = function(someFood){
  if(this.stomach.length < 10){
    this.stomach.push(someFood);
  }
};
Person.prototype.poop = function(){
  this.stomach = [];
};
Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
};


const mary = new Person('Marry', 50);

// console.log(mary.toString());






/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
};
Car.prototype.fill = function(gallons){
  this.tank = this.tank + gallons;
};
Car.prototype.drive = function(distance){
  this.odometer += distance;

  if(this.milesPerGallon * this.tank < distance){
    this.odometer =  this.milesPerGallon * this.tank
    this.tank = 0
    return `I ran out of fuel at ${this.odometer} miles!`
  }else{
    this.tank = this.tank - (distance/this.milesPerGallon)
  }

};

const thunderBird = new Car('Thunderbird', 20)


thunderBird.fill(10);
thunderBird.drive(230);

console.log(`We have ${thunderBird.tank} gallons in our tank`);
console.log(`We have driven ${thunderBird.odometer} miles`);






/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

Baby.prototype = Object.create(Person.prototype);

function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);

  this.favoriteToy = favoriteToy;
}

Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`;
}

// const lilBaby = new Baby({
//   name: 'Timmy',
//   age: '2 months',
//   favoriteToy: 'stuffed horse'
// });

const lilBaby = new Baby('Timmy', '2 months', 'sutffed horse');

// console.log(lilBaby);

// lilBaby.eat('baby food');
// lilBaby.eat('baby food');
// lilBaby.eat('steak?');
// console.log(lilBaby.stomach);
// console.log(lilBaby.toString());
// console.log(lilBaby.play());






/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Implicit, is referring to what is to the left of the dot * apple.isRipe() * this would be referring to apple.
  2. 
  3. 
  4. 
*/







///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
