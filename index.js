function isPalindrome(text) {
  const cleantext = text.toLowerCase().replace(/[^a-z]/g, '');
  const reversedtext = cleantext.split('').reverse().join('');
  return cleantext === reversedtext;
}

const userInput = prompt('Escreva uma palavra: ');

if (isPalindrome(userInput)) {
  console.log('É um palíndromo!!');
} else {
  console.log('Não é um palíndromo!!');
}