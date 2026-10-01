function sum(a, b) {
    return a + b
}   
// console.log(sum(2, 3));

function multiply(a, b) {
    return a * b
}


function subtract(a, b) {
    return a - b
}


function divide(a, b) { 
    return a / b
}   
// module.exports = sum
// module.exports = multiply
// module.exports = divide
// module.exports = subtract

export { sum, multiply, subtract, divide }
