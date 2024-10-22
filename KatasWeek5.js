//https://www.codewars.com/kata/5648b12ce68d9daa6b000099

//Number of People in the Bus

var number = function(busStops){

    if(busStops.length>0){
    let suma= busStops.reduce((acc,curr)=>acc+curr[0]-curr[1],0)

    return suma
    }
}
//---------------------------------------------------------------------------------------


//https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

//Quarter of the year

const quarterOf = (month) => {
const trimestres=[
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [10,11,12]]
  
  for(let i=0;trimestres.length>i;i++){
      let trimestreActual=  trimestres[i]
      if (trimestreActual.includes(month)){
         return i +1
      
      }  
  }
  }

  //------------------------------------------------------------------------------------



 //https://www.codewars.com/kata/53369039d7ab3ac506000467

 //Convert boolean values to strings 'Yes' or 'No'.
 function boolToWord( bool ){
   return bool ? "Yes":"No"
 }
 
 //--------------------------------------------------------------------------------------

//https://www.codewars.com/kata/5556282156230d0e5e000089

 //DNA to RNA Conversion
 function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U')
 }



//https://www.codewars.com/kata/57e76bc428d6fbc2d500036d

 //Write a function to split a string and convert it into an array of words.

 function stringToArray(string){

	return string.split(" ")
}

//-------------------------------------------------------------------------------------------

//https://www.codewars.com/kata/57eae20f5500ad98e50002c5

//Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x){
    return x.replace(/\s/g, '')
}

//-------------------------------------------------------------------------------------------


//https://www.codewars.com/kata/50654ddff44f800200000004

//This code does not execute properly. Try to figure out why.

const multiply=(a, b) => a * b 
   
  
  
//-------------------------------------------------------------------------------------------


//https://www.codewars.com/kata/56b1f01c247c01db92000076

//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
    return str.split("").map(char => char + char).join("")
  }
  
//---------------------------------------------------------------------------------------------
/*https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
It's pretty straightforward. Your goal is to create a function that removes the first 
and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.*/

function removeChar(str){
 return str.slice(1,-1)
};

//--------------------------------------------------------------------------------------------------
/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/

//https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {

const vocales=["a","e","i","o","u"]
let contador = 0;
for (let i = 0; str.length>i;i++)
    if (vocales.includes(str[i])) {
        contador++;
    }

    return contador;
  }

  //-----------------------------------------------------------



//https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/
  //Given the triangle of consecutive odd numbers:
  function rowSumOddNumbers(n) {
	return n **3
}