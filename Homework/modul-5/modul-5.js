//Задача 1

function getOrderUser(u1, u2) {
  return u1.age > u2.age ? u1.name : u2.name;
}

//Задача 2
function getOrderUserArray(arr) {
  let currentUser = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (currentUser["age"] < arr[i].age) {
      currentUser = arr[i];
    }
  }

  return currentUser;
}

//Задача 3
function filter(arr, k, str) {
  let newArr = [];
  let isFindUser = false;

  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];

    if (temp[k] === str) {
      newArr.push(temp);
      isFindUser = true;
    }
  }

  if (!isFindUser) {
    console.log("Данного пользователя нет");
  }

  return newArr;
}
