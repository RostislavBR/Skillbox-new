import { createAppGame } from "./createGame.js";
import { handleClickReset } from "./events.js";

(() => {
  function createAppContainer() {
    const container = document.createElement("div");
    const title = document.createElement("h1");
    const buttonWrapper = document.createElement("div");
    const buttonCounter = document.createElement("span");
    const buttonInc = document.createElement("button");
    const buttonDec = document.createElement("button");
    const submitCountButton = document.createElement("button");
    const isOddNumber = (n) => (n % 2 === 0 ? (n = 4) : n);
    let counter = 10;

    container.classList.add("container");
    title.classList.add("title");
    buttonWrapper.classList.add("button-wrapper");
    buttonInc.classList.add("count-button");
    buttonDec.classList.add("count-button");
    submitCountButton.classList.add("count-button");

    title.textContent = "This is card game";
    buttonCounter.textContent = `Текущее количество карточек с которыми вы начнете игру: ${counter}`;
    buttonInc.textContent = "+";
    buttonDec.textContent = "-";
    submitCountButton.textContent = "Начать";

    buttonWrapper.append(buttonCounter);
    buttonWrapper.append(buttonInc);
    buttonWrapper.append(buttonDec);
    container.append(title);
    container.append(buttonWrapper);
    container.append(submitCountButton);
    document.body.append(container);

    buttonInc.addEventListener("click", () => {
      if (counter >= 10) {
        return;
      } else {
        counter += 2;
      }

      buttonCounter.textContent = `Текущее количество карточек с которыми вы начнете игру: ${counter}`;
    });

    buttonDec.addEventListener("click", () => {
      if (counter <= 2) {
        return;
      } else {
        counter -= 2;
      }

      buttonCounter.textContent = `Текущее количество карточек с которыми вы начнете игру: ${counter}`;
    });

    submitCountButton.addEventListener("click", () => {
      container.append(createAppGame(container, counter).cardGroup);
      submitCountButton.setAttribute("disabled", "");
      buttonInc.setAttribute("disabled", "");
      buttonDec.setAttribute("disabled", "");

      setTimeout(() => {
        alert("Время закончилось");
        handleClickReset();
      }, 60000);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    createAppContainer();
  });
})();
