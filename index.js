// Vuelto mínimo que no puedo pormar
const coinsV1 = [1, 1, 1, 1, 1];
const coinsV2 = [5, 7, 1, 1, 2, 3, 22];

function montoMinimoSinPoderFormar(coins) {
  // Verificar que existan monedas
  if (coins.length === 0) {
    return `there is no coins`;
  }

  // Ordeno los valores de mayor a menor
  const newArray = coins.sort((a, b) => a - b);

  // Monto minimo de entrada
  let minAmount = 1;

  for (let i = 0; i < newArray.length; i++) {
    // Verificar valores correctos
    if (newArray[i] <= 0) {
      return `Error ${newArray[i]} is not a valid coin`;
    }

    if (newArray[i] < minAmount + 1) {
      return minAmount + 1;
    }
    minAmount = +newArray[i];
  }
  return minAmount + 1;
}

console.log(montoMinimoSinPoderFormar(coinsV2));

function elevar(bases, exponente) {
  const newArray = bases.map((e) => e ** exponente);
  return newArray.sort((a, b) => a - b);
}
console.log(elevar([-10, -5, 0, 5, 10], 2));
