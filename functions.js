// capitalize

function capitalize(string){
  const newString = string.replace(string[0], string[0].toUpperCase());
  return newString;
}

// reverse string

function reverseString(string){
  const newString = string.split("").reverse().join("");
  return newString;
}

// calc

const calculator = {
  plus(a, b){ return  a + b },
  minus(a, b){ return  a - b },
  multiply(a, b){ return  a * b },
  divide(a, b){ return  a / b }
}

// caesar

function wrapper(num, key){

  let shiftedNum = num + key;

      if(shiftedNum >= 97 && shiftedNum <= 122 || shiftedNum >= 65 && shiftedNum <= 90)
        {
          shiftedNum = shiftedNum;
        }
      else if(shiftedNum > 90 && shiftedNum >= 65){
        shiftedNum = 64 + (shiftedNum) % 90;
      }
      else if(shiftedNum > 122 && shiftedNum >= 97){
        shiftedNum = 96 + (shiftedNum) % 122;
      }
      else{
        shiftedNum = num;
      }
      return shiftedNum;
}


function changeLetterToNums(string){
  const stringAsArray = string.split("");
  let translatedArray = stringAsArray.map(letter => 
  letter.charCodeAt())
  return translatedArray;
}


function shiftArray(array, key){
    const changedString = array;
    const shiftedString = changedString.map( num => (wrapper(num, key)));
    return shiftedString;
}


function translateToLetter(array){

  let newTranslatedArray = [];
  array.forEach((num) => {
    newTranslatedArray.push(String.fromCharCode(num))
  })
  let newString = newTranslatedArray.join('');

  return newString;
};


function caesar(string, key){
 const stringToNumArray = changeLetterToNums(string);
 const shift = shiftArray(stringToNumArray, key);
 const shiftedWord = translateToLetter(shift);
  
 return shiftedWord;
}

// analyze array

function analyzeArray(array){

  const reducer = (previousVal, currentVal) => previousVal + currentVal;
  
  const object = {
    average: array.reduce(reducer) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length
  }

  return object;
}

  module.exports = { capitalize, reverseString, calculator, caesar, analyzeArray} ;