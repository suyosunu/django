var name=prompt("Welcome! What is your name?")
var surname=prompt("What is your surname?")
var age=prompt("How old are you?")
var tall=prompt("How long are you? (cm)")
var pet=prompt("What is your pet name?")

var x = 0

if (name[0]==surname[0]){
    x++
}

if (age>=20 && age<=30){
    x++
}

if (tall>=170){
    x++
}

if (pet.slice(-1)=="y"){
    x++
}

if(x==4){
    console.log("Welcome Comrade")
} 
else{
    console.log("Nothing to see")
}