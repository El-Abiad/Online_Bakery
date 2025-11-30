const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", function () {
  const searchValue = searchInput.value.toLowerCase();

  productCards.forEach((card) => {
    const name = card.getAttribute("data-name").toLowerCase();

    if (name.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
