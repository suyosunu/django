function helloYou(name) {
    console.log("Hello "+name);
}

function addNum(num1, num2){
    console.log(num1+num2);
}

function helloSomeone(name="Frankie") {
    console.log("Hello " +name);
}

function formal(name="Sam", title="Sir") {
    return title + " " + name
}


function timesFive(numiput) {
    var result = numiput * 5
    return result
}

var v = "GLOBAL V"
var stuff = "GLOBAL STUFF"

function fun(stuff){
    console.log(v)
    stuff = "Reassign stuff inside func"
    console.log(stuff)
}

fun()
console.log(stuff)