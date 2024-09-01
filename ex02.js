const countLetter = (str) => {
  let count = 0;

  for (let c of str.toLowerCase()) {
    c === "a" && count++;
  }
  return count;
};

const v1 = "Abacaxi";
const v2 = "Bicicleta";

console.log(`Vogal 'a' aparece ${countLetter(v1)} na palavra "${v1}".`);
console.log(`Vogal 'a' aparece ${countLetter(v2)} vez(es) na palavra "${v2}".`);
