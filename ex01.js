const isFibonacci = (num) => {
  if (num < 0) return false;

  let a = 0;
  let b = 1;
  let temp;

  if (num === a || num === b) return true;

  while (b < num) {
    temp = a + b;
    a = b;
    b = temp;
  }

  return b === num;
};

const v1 = 45;
const v2 = 34;

console.log(
  `${v1} ${
    isFibonacci(v1) ? "pertence" : "não pertence"
  } à sequência de Fibonacci.`
);

console.log(
  `${v2} ${
    isFibonacci(v2) ? "pertence" : "não pertence"
  } à sequência de Fibonacci.`
);
