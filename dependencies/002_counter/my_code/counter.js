let cnt = 0;

const dec = document.querySelector(".dec");
const reset = document.querySelector(".reset");
const inc = document.querySelector(".inc");

dec.addEventListener("click", () => {
  cnt--;
  updateCount();
});

reset.addEventListener("click", () => {
  cnt = 0;
  updateCount();
});

inc.addEventListener("click", () => {
  cnt++;
  updateCount();
});

function updateCount() {
  const countText = document.querySelector(".count");
  countText.textContent = cnt;
  if (cnt > 0) {
    countText.classList.remove("negative");
    countText.classList.add("positive");
  } else if (cnt < 0) {
    countText.classList.remove("negative");
    countText.classList.add("negative");
  } else {
    countText.classList.remove("negative");
    countText.classList.remove("positive");
  }
}
