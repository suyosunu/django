var hot = false
var temp = prompt("What is temp?")

if (temp>80) {
    console.log("Hot outside!");
}
else if (temp<=80 && temp>=50){
    console.log("Average temp is outside!");
}
else if (temp<50 && temp>=32){
    console.log("It's pretty cold out!");
}
else{
    console.log("Coooold!");
}
