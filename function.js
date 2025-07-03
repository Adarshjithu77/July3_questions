//qstn1

function sumLength(a,b){
    return a.length + b.length
}
console.log(sumLength("Hi","There"))


//qstn2


function typeContact(a,b){
    return typeof a + typeof b;
}
console.log(typeContact("hello",5))

//qstn 3

function isNaNValue(value){
    return Number.isNaN(value)
}
console.log(isNaNValue('abhi'/2))

//qstn4

function boolToString(value){
    return String(value)
}
console.log(boolToString(true))

//qstn5

function sumNumbers(a,b){
    return Number(a) + Number(b)
}
console.log(sumNumbers("20",10))