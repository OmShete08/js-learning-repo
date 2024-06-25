/*console.log(city);
var city;


console.log(age);
let age;


console.log(pin);
const pin=12345;*/

//Named function(Always hoisting)
//show();
function show() {
    console.log();("show");
    
}



//Function expression(Never hoisting)
display();
var display = function(){
    console.log("display"

    );
}