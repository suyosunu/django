/// PART 8 - LOOP EXERCISES
// Before we continue on with your project, let's practice some loops!
// You'll have just two problems, but you'll need to use each loop type we
// learned about to solve them!


///////////////////
//// PROBLEM 1 ///
/////////////////

// Use a For Loop to print (console.log()) out the word "hello" 5 times.
//
// Do this with a While Loop and a For Loop

// While Loop
var x = 1;
while(x<=5){
    console.log("hello")
    x++;
}

// For Loop

for(i=1; i<=5; i++){
    console.log("Hello")
}




/////////////////
// PROBLEM 2 ///
///////////////

// Use Loops to console.log() (print out) all the odd numbers from 1 to 25
// Do this using two methods, a while loop and a for loop

// METHOD ONE
// While Loop

var x = 0;
while(x<=15){
    if(x%2==1){
        console.log("x is odd and x is " +x)
    }
    x++
}


// METHOD TWO
// For Loop

for(i=0; i<=15; i++){
    if(i%2==1){
        console.log("i is odd and x is " +i)
    }
}