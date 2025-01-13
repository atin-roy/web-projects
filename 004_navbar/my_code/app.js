const face = document.querySelector(".fa-facebook");
face.addEventListener("click", () => {
  alert(
    "I don't use facebook dumass! Gotchu!\nHere you go though, u might have a facebook account."
  );
});

// Select elements
const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");
const icon = document.querySelector(".icon");

// Toggle active class on click
hamburger.addEventListener("click", () => {
  links.classList.toggle("active");
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars"); // Remove bars icon
    icon.classList.add("fa-times"); // Add X icon
  } else {
    icon.classList.remove("fa-times"); // Remove X icon
    icon.classList.add("fa-bars"); // Add bars icon
  }
});
