//Задача 1

function getAge(arg) {
  let currentYear = new Date().getFullYear();
  let age = currentYear - arg;

  return age;
}

//Задача 2
function filter(arr1, arr2) {
  let newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    let isBlackList = false;

    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        isBlackList = true;
        break;
      }
    }

    if (!isBlackList) {
      newArr.push(arr1[i]);
    }
  }

  return newArr;
}

//Задача 3
function arrSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}
