const soma = () => {
  let INDICE = 12;
  let SOMA = 0;
  let K = 1;

  while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
  }
  return SOMA;
};

// No final do processamento,a variável `SOMA` será igual a 77
console.log(`O valor de SOMA é: ${soma()}`);
