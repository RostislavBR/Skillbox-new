function createTitle(str, n) {
  let title;

  switch (n) {
    case 1:
      title = document.createElement("h1");
      title.classList.add("py-3", "mb-5");
      break;
    case 2:
      title = document.createElement("h2");
      break;
    case 3:
      title = document.createElement("h3");
      title.classList.add("py-2", "mb-3");
      break;
    case 4:
      title = document.createElement("h4");
      title.classList.add("py-2", "mb-3");
      break;
    case 5:
      title = document.createElement("h5");
      title.classList.add("py-2", "mb-3");
      break;
    default:
      throw new Error("Invalid heading level");
  }

  title.textContent = str;

  return title;
}

export default createTitle;
