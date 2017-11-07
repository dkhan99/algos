// Reverse a string 

function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");

//  Are all the characters in a string unique

var isUnique = function(str){
    for(i=0; i<str.length; i++){
        for(j=i+1; j<str.length; j++){
            if(str.charAt(i) === str.charAt(j) && str.charAt(i) != " "){return false}
        }
    }
    return true
}
