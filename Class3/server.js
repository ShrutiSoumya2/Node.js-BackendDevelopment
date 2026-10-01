let num1=Number(process.argv[2])
let num2=Number(process.argv[3])
let operation=process.argv[4]
let result;
if (operation==='add') {
    result=num1+num2
    //console.log(num1+num2)
}else if (operation==='multiply') {
    result=num1*num2
    //console.log(num1*num2)
}
console.log(result)
// console.log(num1+num2)
// console.log(num1)
// console.log(num2)
// console.log(process.argv)  //process.argcv is an array, first two indexes are occupied 0 index is for nodejs address, 1 index is for absolute file path, 2 is for first user input

console.log(process.cwd())