//Задача 1
function substringSearchFunc(str) {
  let hasComma = str.includes("-");
  let hasUnderscore = str.includes("_");

  if (str.length >= 4) {
    if (hasComma && hasUnderscore) {
      console.log("Пароль не может содержать и '-', и '_'");
    } else if (hasComma) {
      console.log("Пароль надежный");
    } else if (hasUnderscore) {
      console.log("Пароль надежный");
    }
  } else {
    console.log("Пароль ненадежный");
  }
}

//Задача 2
function capitalizeFunc(name, surname) {
  let capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return `${capitalize(name)} ${capitalize(surname)}`;
}

//Задание 3
function isEvenOrOdd(num) {
  return num % 2 ? "Число чётное" : "Число нечётное";
}
