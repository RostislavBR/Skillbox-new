let visible = false;
let button = document.createElement("button");
button.innerText = "Показать список";

document.body.append(button);

button.addEventListener("click", () => {
  visible ? (visible = false) : (visible = true);

  if (visible) {
    createStudentsList(allStudents);
  } else {
    document.getElementById("container").remove();
  }
});

//Задача 1
function createStudentCard(student) {
  let container = document.createElement("div");
  let studentName = document.createElement("h2");
  let studentAge = document.createElement("span");

  studentName.innerText = student.name;
  studentAge.innerText = `Возраст: ${student.age}`;

  container.append(studentName);
  container.append(studentAge);
  document.body.append(container);
}

//Задача 2-3
let allStudents = [
  { name: "Валя", age: 11 },
  { name: "Таня", age: 24 },
  { name: "Рома", age: 21 },
  { name: "Надя", age: 34 },
  { name: "Антон", age: 7 },
];

function createStudentsList(arr) {
  let container = document.createElement("div");
  let list = document.createElement("ul");
  let students = sortStudent(arr);

  container.setAttribute("id", "container");

  for (student of students) {
    let item = document.createElement("li");
    let title = document.createElement("h2");
    let age = document.createElement("span");

    title.innerText = student.name;
    age.innerText = `Возраст: ${student.age}`;

    item.append(title);
    item.append(age);

    list.append(item);
  }

  container.append(list);
  document.body.append(container);
}

function sortStudent(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      let currentStudent = arr[j];

      if (currentStudent.age > arr[j + 1].age) {
        arr[j] = arr[j + 1];
        arr[j + 1] = currentStudent;
      }
    }
  }

  return arr;
}
