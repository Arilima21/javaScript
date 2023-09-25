var matrizQuadradaMagica = function () {
  console.log("Quantidade de Parametros: " + arguments.length);

  for (var i = arguments.length - 1; i >= 0; i--) {
    if (isNaN(arguments[i])) {
      console.log("O parametro de nº" + (i + 1) + " não é um numero");
      return false;
    }
  }

  var n = Math.sqrt(arguments.length);

  if (Math.floor(n) !== n) {
    console.log("Raiz Quadrada do tamanho da matriz: " + n + " não é um número inteiro!");
    return false;
  }

  console.log("Numero de linhas e colunas: " + n);

  var matriz = [];
  var arr = [];
  var cont = 0;
  var cont2 = 0;

  for (var i = arguments.length - 1; i >= 0; i--) {
    if (cont < n) {
      arr[cont] = arguments[i];
    }

    if (cont === n - 1) {
      matriz[cont2] = arr.reverse();
      arr = [];
      cont2++;
      cont = -1;
    }
    cont++;
  }

  var expectedSum = (n * (n * n + 1)) / 2; 
  
  function calculateSum(arr) {
    return arr.reduce(function (acc, val) {
      return acc + val;
    }, 0);
  }

  for (var i = 0; i < n; i++) {
    if (calculateSum(matriz[i]) !== expectedSum) {
      console.log("Não é um Quadrado Mágico");
      return false;
    }

    var col = [];
    for (var j = 0; j < n; j++) {
      col.push(matriz[j][i]);
    }

    if (calculateSum(col) !== expectedSum) {
      console.log("Não é um Quadrado Mágico");
      return false;
    }
  }

  var diagPrincipal = [];
  for (var i = 0; i < n; i++) {
    diagPrincipal.push(matriz[i][i]);
  }

  if (calculateSum(diagPrincipal) !== expectedSum) {
    console.log("Não é um Quadrado Mágico");
    return false;
  }

  var diagSecundaria = [];
  for (var i = 0; i < n; i++) {
    diagSecundaria.push(matriz[i][n - 1 - i]);
  }

  if (calculateSum(diagSecundaria) !== expectedSum) {
    console.log("Não é um Quadrado Mágico");
    return false;
  }

  console.log("É um Quadrado Mágico");
  return true;
};

var result = matrizQuadradaMagica(2, 5, 1, 9, 3, 6, 4, 7, 9);
