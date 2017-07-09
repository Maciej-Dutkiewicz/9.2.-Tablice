var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
var newName = 'Marcin';
  if (allNames.indexOf(newName) === -1) {
    allNames[8] = newName;
  }
  else {
    console.log('Warunek nie jest spełniony');
  }
console.log(allNames);