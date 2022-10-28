/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */
console.log('Hello')
// Vanilla JavaScript Function

function addTwoNumbers(a,b) {
    return a+b
}
let sum = addTwoNumbers(2,3)
console.log(sum)

// Arrow Function With Parameters

const addTwoNumbers2 =  (a, b)  => {
    return a+b
}
sum = addTwoNumbers2(3,5)
console.log(sum)

// Single Line Arrow Function With Parameters

// also valid
// const addTwoNumbers3 =  (a, b)  => (a + b)

const addTwoNumbers3 =  (a, b)  => a + b
sum = addTwoNumbers3(4,6)
console.log(sum)

// Implicit Returns

const saySOmething = message => console.log(message)
saySOmething('Hello world')

const sayHello = () => console.log('hello')
sayHello()

// Returning Multiple Lines

const returnMultipleLines = () => (
    `
    <p>
    This is a multiline string!
    </p>`
)
console.log(returnMultipleLines())