let firstNumber = prompt('Entrez un 1er chiffre entre 1 et 10');
let secondNumber = prompt('Entrez un 2eme chiffre entre 1 et 10');

while ((firstNumber / secondNumber) > 1) {
  document.write('<div>' + firstNumber / secondNumber + '</div>');
  firstNumber = firstNumber / secondNumber;
  }