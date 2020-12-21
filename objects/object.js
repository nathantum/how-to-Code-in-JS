// object literal uses {}
// object constructor uses new keyword

// examples 
const objlit = {};
const objonst = new Object();

const nate = {
    name: 'nate',
    age: 30,
    height: 6,
    favHobby: "soccer",
    greet: function(){
        return `Hi, my name is ${this.name}!`;
    },
};

// accessing properties 
//  1. Dot notation
//  2. []

//Retrieve name

// console.log(nate.name);

// Retrieve age
// console.log(nate['age']);
// console.log(nate.greet());

// Adding and modifying object properties

nate.gender = 'M';
nate.color = 'Black';

nate.favTool = 'Battle Axe';

// console.log(nate);

// Looping through object Properties
for(let k in nate){
    console.log(nate[k]);
};

for(let k in nate){
    console.log(k.toUpperCase() + ':' , nate[k]);
};

// Return the keys
console.log(Object.keys(nate));

// Return the values
console.log(Object.values(nate));
