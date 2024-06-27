function handleClickCard(item) {
  item.classList.add("active");
}

function handleClickReset() {
  location.reload();
}

export { handleClickCard, handleClickReset };
