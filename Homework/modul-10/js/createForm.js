import createTitle from "./createTitle.js";
import { inputArray } from "./constants.js";

function createForm() {
  const wrapper = document.createElement("div");
  const form = document.createElement("form");

  const buttonWrapper = document.createElement("div");
  const button = document.createElement("button");

  wrapper.classList.add("d-flex");
  form.classList.add(
    "input-group",
    "gap-3",
    "p-5",
    "border",
    "border-2",
    "rounded"
  );
  buttonWrapper.classList.add("input-group-append");
  button.classList.add("btn", "btn-primary");
  button.textContent = "Добавить студента";

  buttonWrapper.append(button);

  form.append(createTitle("Title form", 2));
  createFormInput(inputArray, form);
  wrapper.append(form);

  return {
    wrapper,
  };
}

function createFormInput(arr, parent) {
  for (let i = 0; i < arr.length; i++) {
    const inputWrapper = document.createElement("div");
    const label = document.createElement("label");
    const input = document.createElement("input");

    inputWrapper.classList.add("d-flex", "flex-column", "w-100");
    label.classList.add("form-label");
    input.classList.add("form-control");

    input.setAttribute("id", `input-${arr[i].id}`);

    label.textContent = arr[i].title;
    input.placeholder = arr[i].placeholder;

    inputWrapper.append(label);
    inputWrapper.append(input);
    parent.append(inputWrapper);
  }

  return parent;
}

export default createForm;
