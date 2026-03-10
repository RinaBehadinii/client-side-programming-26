console.log("Hello World!")

// ==========================
// Testing Scope - var, let, const
// ==========================

function testingScope() {
    if(true) {
        var a = 1;
        let b = 2
        const c= 3;

        a=2;
        b=4;

        console.log(b)
        console.log(c)
    }

    console.log(a);
    // console.log(b); error
    // console.log(c); error
}

testingScope();

// ==========================
// Types of Functions
// ==========================

// Normal function
function firstFunction(num){
    console.log(num);
}

// Arrow function
const secondFunction= (num) => console.log(num);

firstFunction(10);
secondFunction(10);

// ==========================
// Conditions - Minor / Adult
// ==========================

function ageCheck(age) {
    if(age<18) {
        console.log("This person is a minor.");
    } else {
        console.log("This person is an adult.");
    }
}

ageCheck(15);
ageCheck(28);
ageCheck(2);

// ==========================
// Age Groups Example
// ==========================

//<18 - Minor
//18< - Adult
//60< - Senior

function ageGroupCheck(age) {
    if(age<18) {
        console.log("Minor.");
    } else if(age>18 && age<60) {
        console.log("Adult");
    } else if(age>60) {
        console.log("Senior.")
    } else {
        console.log("Not a valid input.")
    }
}

ageGroupCheck(17);
ageGroupCheck(36);
ageGroupCheck(67);

// ==========================
// Loops
// ==========================

let randomList = [1, 2, 3, 4, 5];

for(const number of randomList) {
    console.log("This is the - " + number);
}

// ==========================
// DOM Exercise
// ==========================

/*
Create two buttons: Increment and Decrement.
Display a number on the screen.

When the Increment button is clicked:
- Increase the number by 1.

When the Decrement button is clicked:
- Decrease the number by 1.

Rules:
- When the number is 0, the color should be grey.
- When the number becomes greater than 10, the color should change to blue.
- The Decrement button should be disabled when the number is 0.
*/

var count= 0;
var result = document.getElementById("result");

result.innerHTML=count;

function checkResult() {
    if (count === 0) {
        document.getElementById("decrement").disabled = true;
        document.body.style.backgroundColor = "gray";
    }
    else if (count > 10) {
        document.getElementById("decrement").disabled = false;
        document.body.style.backgroundColor = "blue";
    }
    else {
        document.getElementById("decrement").disabled = false;
        document.body.style.backgroundColor = "white";
    }
}
function increment() {
    count++;
    result.innerHTML=count;

    checkResult();
}

function decrement() {
    if(count>0) {
        count--;
        result.innerHTML= count;
    }

    checkResult();
}

checkResult();


