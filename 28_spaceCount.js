function spaceCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            count++;
        }
    }
    return count;
}
let str1 = "Revision is the mother of success";
let str2 = "JavaScript is the language of internet world";


console.log(`Given String1: ${str1} `);
console.log(`Space count: ${spaceCount(str1)}`); 
console.log(`Given String2: ${str2} `);
console.log(`Space count: ${spaceCount(str2)}`);