const { compareTrue } = require("./challenges");

// Desafio 11
function generatePhoneNumber(numArr) {
  if (numArr.length !== 11) {
    return 'Array com tamanho incorreto.'
  }
  
  newArr = []
  let countOccurrences = (numArr, val) => numArr.reduce((a, v) => (v === val ? a + 1 : a), 0);
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] < 0 || numArr[i] > 9) {
      return "não é possível gerar um número de telefone com esses valores"
    }
    else if (countOccurrences(numArr, numArr[i]) >= 3) {
      return "não é possível gerar um número de telefone com esses valores"
    }
    else {
      newArr += numArr[i]
    }
  }
  
  let ddd = newArr.slice(0,2)
  let fiveDig = newArr.slice(2,7)
  let fourDig = newArr.slice(7,11)
  return '(' + ddd + ') ' + fiveDig + '-' + fourDig
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC) 
  && lineB < lineA + lineC && lineB > Math.abs(lineA - lineC) 
  && lineC < lineB + lineA && lineC > Math.abs(lineB - lineA)) {
    return true
  }
  else {
    return false
  }
}
console.log(triangleCheck(16, 9, 2))

// Desafio 13
function hydrate(str) {
  var r = /\d+/g;
  strNumbers = str.match(r);
  let total = 0
  for (let i = 0; i < strNumbers.length; i++) {
    total += parseInt(strNumbers[i])
  }
  
  if (total != 1) {
    return total + " copos de água"
  }
  else {
    return total + " copo de água"
  }
}
console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"))

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
