// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true
  }
  else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2
}

// Desafio 3
function splitSentence(s) {
  return s.split(/[ ]+/)
}

// Desafio 4
function concatName(arr) {
  return arr[[arr.length-1]] + ", " + arr[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3 + ties)
}

// Desafio 6
function highestCount(numArr) {
  maxCount = 0;
  maxNumber = Math.max(...numArr);
  
  for (let i=0; i < numArr.length; i++) {
    if (numArr[i] === maxNumber) {
      maxCount += 1
    }
  }
  return maxCount
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return "cat2"
  }
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return "cat1"
  } else {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(numArr) {
  fizzBuzzArray = []
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 3 === 0 && numArr[i] % 5 === 0) {
      fizzBuzzArray.push("fizzBuzz");
    }
    else if (numArr[i] % 3 === 0) {
      fizzBuzzArray.push("fizz");
    }
    else if (numArr[i] % 5 === 0) {
      fizzBuzzArray.push("buzz");
    }
    else {
      fizzBuzzArray.push("bug!");
    }
  }
  return fizzBuzzArray
}

// Desafio 9
function encode(str) {
  let chars = {'a':'1','e':'2','i':'3','o':'4','u':'5'};
  newStr = str.replace(/[aeiou]/g, m => chars[m])
  return newStr
}
function decode(str) {
  let chars = {'1':'a','2':'e','3':'i','4':'o','5':'u'};
  newStr = str.replace(/[12345]/g, m => chars[m])
  return newStr
}

// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) {
    return "Vazio!"
  }
  
  techArr = []
  for (let i =0; i < tech.length; i++) {
    sortedTech = tech.sort()
    let techObj = {
      tech: sortedTech[i],
      name: name
    }
    techArr.push(techObj);
  }
  return techArr
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
