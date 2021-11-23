const button = document.getElementById("button-menu"),
  menu = document.getElementById("menu"),
  body = document.querySelector("body");

button.addEventListener("click", openMenu);

function openMenu() {
  button.classList.toggle("active");
  menu.classList.toggle("active");
  if (!button.classList.contains("active")) {
    body.style.overflow = "auto";
  } else {
    body.style.overflow = "hidden";
  }
}
