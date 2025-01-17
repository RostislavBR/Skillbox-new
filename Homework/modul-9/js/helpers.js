function createNumbersArray(n) {
  let pairs = [];
  for (let i = 1; i <= n; i++) {
    pairs.push(i);
    pairs.push(i);
  }
  return pairs;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

export { createNumbersArray, shuffle };
