// 1. What are the results of these expressions? (answer first, then use console.log() to check)

"" + 1 + 0            // 10
"" - 1 + 0            // -1
true + false          // 1
!true                 // false
6 / "3"               // 2
"2" * "3"             // 6
4 + 5 + "px"          // 9px
"$" + 4 + 5           // $45
"4" - 2               // 2
"4px" - 2             // NaN
" -9 " + 5            // -9 5
" -9 " - 5            // -14
null + 1              // 1
undefined + 1         // NaN
undefined == null     // true
undefined === null    // false
" \t \n" - 2          // -2

// ----------------------------------------------------------------------------------------------------------
// 2. Which of the below are not giving the right answer? Why are they not correct? How can we
// fix them?

let three = "3"                            
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four         // 34
let multiplication = three * four   // 12
let division = three / four         // 0.75
let subtraction = three - four      // -1
let lessThan1 = three < four        // true
let lessThan2 = thirty < four       // false

// --------------------------------------------------------------------------------------------------------
// 3. Which of the following console.log messages will print? Why?

if (0) console.log('#1 zero is true')   // Will not print
if ("0") console.log('#2 zero is true') // Will print, string "0" is true
if (null) console.log('null is true')   // Will not print
if (-1) console.log('negative is true') // Will print, -1 is non zero numeric value
if (1) console.log('positive is true')  // Will print, 1 is non zero numeric value

// ---------------------------------------------------------------------------------------------------------
// 4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a
// and b. What does the ‘+=’ do?

let a = 2, b = 3;
let result = `${a} + ${b} is `;       // let result = '${a} + ${b} is ${a + b < 10 ? 'less than 10' : greater than 10'}';
if (a + b < 10) {                     // += adds the the two variables and assign results back to it     
result += 'less than 10';
} else {
result += 'greater than 10';
} 

// -------------------------------------------------------------------------------------------------------
// 5. Rewrite the following function using: a) function expression syntax, and b) arrow function
// syntax. Test each version to make sure they work the same.

function getGreeting(name) {   
    return 'Hello ' + name + '!';
    }
// a) function expression syntax
const getGreeting = function(name) {
    return 'Hello ${name}!' ;
};

// b) arrow function syntax
const getGreeting = (name) => 'Hello ${name}!';

// ------------------------------------------------------------------------------------------------------
// 6. a) Complete the inigo object by adding a lastName property and including it in the
// greeting.
// b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
// prints his famous catch phrase to the console. HINT: see
// https://www.imdb.com/title/tt0093779/characters/nm0001597.
// c) Update getCatchPhrase to use arrow function syntax and a conditional operator.

const westley = {
name: 'Westley',
numFingers: 5
}
const rugen = {
name: 'Count Rugen',
numFingers: 6
}
const inigo = {
firstName: 'Inigo',
lastName: 'Montoya',      // a) Add lastName 

greeting(person) {
let greeting = `Hello ${person.name} ${this.lastName}, my name is ${this.firstName}.`;  // a) Inlcude lastName in greeting
console.log(greeting + this.getCatchPhrase(person));
},
getCatchPhrase: (person) =>
    (person.numFingers === 6) 
      ?  (console.log("My name is Inigo Monotya. You killed my father. Prepare to die."), ' ')  // b) Catch Phrase
      : 'Nice to meet you.'
};

inigo.greeting(westley)
inigo.greeting(rugen)

// ------------------------------------------------------------------------------------------------
// 7. The following object represents a basketball game and keeps track of the score as the
// game progresses.
// a) Modify each of the methods so that they can be ‘chained’ together and the last line of
// the example code works
// b) Add a new method to print the full time final score
// c) Add a new object property to keep track of the number of fouls and a method to
// increment it, similar but separate to the score. Include the foul count in the half time and
// full time console messages
// d) Test your object by chaining all the method calls together in different combinations.
const basketballGame = {
    score: 0,
    freeThrow() {
    this.score++;
    },
    basket() {
    this.score += 2;
    },
    threePointer() {
    this.score += 3;
    },
    halfTime() {
    console.log('Halftime score is '+this.score);
    }
    }
    //modify each of the above object methods to enable function chaining as below:
    basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();

const basketballGame = {
score: 0,
foulCount: 0,
freeThrow() {
    this.score++;
    return this;                        // a) Chaining
},
basket() {
    this.score += 2;
    return this;                        // a) Chaining
},
threePointer() {
    this.score += 3;
    return this;                        // a) Chaining
},
incrementFoul() {
    this.foulCount++;
    return this;                        // a) Chaining
},
halfTime() {
    console.log('Halftime score is '+ this.score + ' with ' + this.foulCount + ' fouls.');
    return this;                        // a) Chaining
}
fullTime() {
    console.log('Fulltime score is ' +this.score + ' with ' + this.foulCount + ' fouls ');
    return this;                        // a) Chaining
},
};

// ---------------------------------------------------------------------------------------------
// 8. The object below represents a single city.
// a) Write a function that takes an object as an argument and uses a for...in loop to access
// and print to the console each of those object properties and their values. Test it using
// the sydney object below.
// b) Create a new object for a different city with different properties and call your function
// again with the new object.
const sydney = {
name: 'Sydney',
population: 5_121_000,
state: 'NSW',
founded: '26 January 1788',
timezone: 'Australia/Sydney'
}
//  a)
function printObjectProperties(obj) {
    for (let key in obj) {
        console.log('${key}: ${obj[key]}');
    }
}
// b) 
const newYork = {
    name: 'Tokyo',
    population: 8_399_000,
    state: 'Japan',
    founded: 'May 1, 1868',
    timezone: 'Asia, Tokyo'
};
printObjectProperties(Tokyo);

// ---------------------------------------------------------------------------------------------------
// 9. Use the following variables to understand how JavaScript stores objects by reference.
// a) Create a new moreSports variable equal to teamSports and add some new sport
// values to it (using push and unshift)
// b) Create a new dog2 variable equal to dog1 and give it a new value
// c) Create a new cat2 variable equal to cat1 and change its name property
// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
// changed? Why?
// e) Change the way the moreSports and cat2 variables are created to ensure the
// originals remain independent

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let moreSports = [...teamSports];                                       // a) create new moreSports variable
moreSports.push('Football');                                            // a) add new sport using push 
moreSports.unshift('Golf');                                             // a) add new sport using unshift
let dog1 = 'Bingo';
let dog2 = 'Pingu';                                                     // b) create dog2 variable with new value
let cat1 = { name: 'Fluffy', breed: 'Siberian' };   
let cat2 = { ...cat1 };
cat2.name = 'Oyen';                                                     // c) create cat2 variable and new name

console.log(teamSports);                                                // d) print original teamSports
console.log(dog1);                                                      // d) print dog1 
console.log(cat1);                                                      // d) print cat1

let moreSportsIndependent = [ ...teamSports, 'Football', 'Golf']; 
let cat2Independent = { ...cat1, name: 'Oyen' };

// ---------------------------------------------------------------------------------------------------------------
// 10. The following constructor function creates a new Person object with the given name and
// age values.
// a) Create a new person using the constructor function and store it in a variable
// b) Create a second person using different name and age values and store it in a separate
// variable
// c) Print out the properties of each person object to the console
// d) Rewrite the constructor function as a class called PersonClass and use it to create a
// third person using different name and age values. Print it to the console as well.
// e) Add a canDrive method to both the constructor function and the class that returns true
// if the person is old enough to drive.

function Person(name, age) {
this.name = name;
this.age = age;
this.human
}