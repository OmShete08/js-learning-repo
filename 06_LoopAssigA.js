console.log('=== Count the total number of vowels ===');

var str = "I am very good IT Developer";
var vowels = 'aeiou';
var counter = 0;
for (let index = 0; index < str.length; index++) {
    var ch = str.charAt(index);
    var chLowerCase = ch.toLowerCase();
    if(vowels.includes(chLowerCase)){
        counter++;
    }
}
console.log(counter);



function SumCube() 
{
    

console.log('=== Sum of cube of numbers from 1 to 5 ===');
var SumCube  = 0;
for (let i = 0; i <= 5; i++) {
     var cube = i * i * i ;
    SumCube  = SumCube  + cube ;
    
}
console.log(SumCube);
}
SumCube();



function oddPositionedChars(str) {

console.log('=== Odd Postion Char ===');
for (let index = 0; index < str.length; index++) {
    var ch = str.charAt(index);
        if (index%2 && ch !=' ') {
        console.log(ch);
        
        }
    
    }
    
}
oddPositionedChars('Hard work always pays back'); 
oddPositionedChars('Soon i will be UI IT champ');

