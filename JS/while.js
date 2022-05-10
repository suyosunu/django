var x = 0;

while (x < 5) {
    console.log("x is currently: "+x);

    if ( x===3) {
        console.log("x is equal to three!")
        break;
    }

    console.log("x is still less than 5, adding 1 to x");

    x = x+1;
}

x = 0;

while (x <= 10) {
    console.log("x is currently: "+x);

    if (x % 2==1) {
        console.log("x is odd");
    }
    

    x = x+1;
}