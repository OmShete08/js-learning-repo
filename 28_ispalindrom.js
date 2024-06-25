function ispalindrom(str) {
   var reverseStr = str.split("").reverse().join("");
   if (str==reverseStr) {
      return true;
      
   } else {
      return false;
      
   }  
}
const string = ["madam","141","sunday","mom","listen","dad"];


string.forEach(str => {
   if (ispalindrom(str)) {
      console.log(` ${str} : is palindrom `);
      
   } else {
      console.log(` ${str} : is  not palindrom `);
   }
})


