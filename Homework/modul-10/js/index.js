import createForm from "./createForm.js";
import createTitle from "./createTitle.js";

(() => {
  function createAppContainer() {
    const container = document.createElement("div");

    container.classList.add("container");

    container.append(createTitle("Title table", 1));
    container.append(createForm().wrapper);
    document.body.append(container);
  }

  document.addEventListener("DOMContentLoaded", () => {
    createAppContainer();
  });
})();
