//Первая задача;
let x = (x1, x2) => Math.abs(x1 - x2);
let y = (y1, y2) => Math.abs(y1 - y2);

function searchSquare(x, y) {
  return Math.sqrt(Math.pow(x(2, 10), 2) * Math.pow(y(3, 5), 2));
}

// Вторая задача
let normilize = (num, precision) =>
  Math.round((num % 1) * Math.pow(10, precision));

// Третья задача
function generateRandomNumberFunc(n, m) {
  const min = Math.min(n, m);
  const max = Math.max(n, m);
  let firstRandom = Math.random() * (max - min) + min;
  let secondRandom = Math.random() * (max - min) + min;

  console.log(firstRandom > secondRandom);
  console.log(firstRandom < secondRandom);
  console.log(firstRandom >= secondRandom);
  console.log(firstRandom <= secondRandom);
  console.log(firstRandom === secondRandom);
  console.log(firstRandom !== secondRandom);
}
