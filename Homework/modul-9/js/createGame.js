import { createNumbersArray, shuffle } from "./helpers.js";
import { handleClickCard, handleClickReset } from "./events.js";

function createAppGame(parent, count) {
  let arr = createNumbersArray(count);
  const shuffleArr = shuffle(arr);

  const cardGroup = document.createElement("div");
  const buttonWrapper = document.createElement("div");
  const button = document.createElement("button");

  buttonWrapper.classList.add("button-wrapper");
  button.classList.add("button");
  button.textContent = "Начать сначала";
  buttonWrapper.append(button);

  cardGroup.classList.add("card-group");

  if (shuffleArr !== null) {
    for (let i = 0; i < shuffleArr.length; i++) {
      const card = document.createElement("div");
      card.textContent = arr[i];
      card.classList.add("card");

      card.addEventListener("click", function () {
        if (!card.classList.contains("active")) {
          handleClickCard(this);

          const activeElements = document.querySelectorAll(".card.active");

          if (activeElements.length === 2) {
            const first = activeElements[0];
            const second = activeElements[1];

            if (first.textContent === second.textContent) {
              first.classList.add("matched");
              second.classList.add("matched");

              first.classList.remove("active");
              second.classList.remove("active");

              const allMatched = document.querySelectorAll(".card.matched");

              if (allMatched.length === arr.length) {
                setTimeout(() => {
                  alert("Вы нашли все пары !");
                  parent.append(buttonWrapper);

                  button.addEventListener("click", function () {
                    handleClickReset();

                    parent.children[1].children[0].removeAttribute("disabled");
                    parent.children[1].children[1].removeAttribute("disabled");
                    parent.children[2].removeAttribute("disabled");
                  });
                }, 200);
              }
            } else {
              setTimeout(() => {
                first.classList.remove("active");
                second.classList.remove("active");
              }, 200);
            }
          }
        }
      });

      cardGroup.append(card);
    }
  }

  return {
    cardGroup,
  };
}

export { createAppGame };
