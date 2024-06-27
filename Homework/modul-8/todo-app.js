(function () {
  let userType = localStorage.getItem("userType");
  let localStorageData = getTodoItemData(userType);

  function createAppTitle(title) {
    let appTitle = document.createElement("h1");
    appTitle.innerHTML = title;
    return appTitle;
  }

  function createTodoItemForm() {
    let form = document.createElement("form");
    let input = document.createElement("input");
    let buttonWrapper = document.createElement("div");
    let button = document.createElement("button");

    form.classList.add("input-group", "mb-3");
    input.classList.add("form-control");
    input.placeholder = "Введите название нового дела";
    buttonWrapper.classList.add("input-group-append");
    button.classList.add("btn", "btn-primary");
    button.setAttribute("disabled", "");
    button.textContent = "Добавить дело";

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    return {
      form,
      input,
      button,
    };
  }

  function createTodoListForUserType() {
    let list = document.createElement("ul");
    list.classList.add("list-group");

    if (localStorageData) {
      let items = jsonToData(localStorageData);

      for (let i = 0; i < items.length; i++) {
        let todoItem = createTodoItem(
          items[i].name,
          items[i].done,
          items[i].id
        );

        list.append(todoItem.item);
      }
    }
    return list;
  }

  function createTodoItem(name, done, id) {
    let data = { id, name, done };
    let item = document.createElement("li");
    let buttonGroup = document.createElement("div");
    let doneButton = document.createElement("button");
    let deleteButton = document.createElement("button");

    //Добавление классов item
    if (done) {
      item.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center",
        "list-group-item-success"
      );
    } else {
      item.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center"
      );
    }
    item.textContent = name;
    item.setAttribute("id", id);

    //Добавление классов кнопкам
    buttonGroup.classList.add("btn-group", "btn-group-sm");
    doneButton.classList.add("btn", "btn-success");
    doneButton.textContent = "Готово";
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.textContent = "Удалить";

    //Добавление  кнопок в wrapper(div) и после добавление wrapper в item
    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    //Обработчик для кнопки doneButton
    doneButton.addEventListener("click", () => {
      handleClickDone(item, id);
    });

    //Обработчик для кнопки deleteButton
    deleteButton.addEventListener("click", function () {
      if (confirm("Вы уверены?")) {
        item.remove();
        removeFromTodoItem(id);
      }
    });

    return {
      data,
      item,
      doneButton,
      deleteButton,
    };
  }

  function getMaxId(arr) {
    let maxId = -1;

    if (arr === null) {
      return maxId;
    } else {
      for (let i = 0; i < arr.length; i++) {
        let currentId = arr[i].id;

        if (typeof currentId === "string") {
          currentId = parseInt(currentId.split("_").pop(), 100);
        }
        if (currentId > maxId) {
          maxId = currentId;
        }
      }
    }

    return maxId;
  }

  //Обработчик нажатия для кнопки doneButton +
  function handleClickDone(el, id) {
    el.classList.toggle("list-group-item-success");
    updateTodoItemStatus(id, el.classList.contains("list-group-item-success"));
  }

  function addTodoItem(item) {
    let todoItems = localStorageData ? jsonToData(localStorageData) : [];
    todoItems.push(item);
    setTodoItemData(dataToJson(todoItems), userType);
  }

  function removeFromTodoItem(id) {
    let todoItems = jsonToData(getTodoItemData(userType));
    let newTodoItems = [];

    for (let i = 0; i < todoItems.length; i++) {
      if (todoItems[i].id !== id) {
        newTodoItems.push(todoItems[i]);
      }
    }

    setTodoItemData(dataToJson(newTodoItems), userType);
  }

  function updateTodoItemStatus(id, done) {
    let todoItems = jsonToData(getTodoItemData(userType));

    for (let i = 0; i < todoItems.length; i++) {
      let currentItem = todoItems[i];

      if (currentItem.id === id) {
        currentItem.done = done;
        break;
      }
    }

    setTodoItemData(dataToJson(todoItems), userType);
  }

  function createTodoApp(container, title) {
    const todoAppTitle = createAppTitle(title);
    const todoItemForm = createTodoItemForm();
    const todoList = createTodoListForUserType();

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    todoItemForm.input.addEventListener("input", function () {
      todoItemForm.input.value.length > 0
        ? todoItemForm.button.removeAttribute("disabled")
        : todoItemForm.button.setAttribute("disabled", "");
    });

    todoItemForm.form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!todoItemForm.input.value) {
        return;
      }

      const todoItems = jsonToData(localStorageData);
      const maxId = getMaxId(todoItems);
      const newId = maxId + 1;

      const todoItem = createTodoItem(todoItemForm.input.value, false, newId);
      addTodoItem(todoItem.data);
      localStorageData = getTodoItemData(userType);

      todoList.append(todoItem.item);

      todoItemForm.input.value = "";
      todoItemForm.button.setAttribute("disabled", "");
    });
  }

  function dataToJson(data) {
    return JSON.stringify(data);
  }

  function jsonToData(data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error("Ошибка при преобразовании JSON:", e);
      return [];
    }
  }

  function getTodoItemData(user) {
    switch (user) {
      case "me":
        return localStorage.getItem("myTodoItems");
      case "dad":
        return localStorage.getItem("dadTodoItems");
      case "mom":
        return localStorage.getItem("momTodoItems");
      default:
        break;
    }
  }

  function setTodoItemData(data, user) {
    console.log("user", user);
    console.log("data", data);
    switch (user) {
      case "me":
        return localStorage.setItem("myTodoItems", data);
      case "dad":
        return localStorage.setItem("dadTodoItems", data);
      case "mom":
        return localStorage.setItem("momTodoItems", data);
      default:
        break;
    }
  }

  window.createTodoApp = createTodoApp;
})();
